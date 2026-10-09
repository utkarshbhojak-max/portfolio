import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const WebGLBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGLSupport, setHasWebGLSupport] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasWebGLSupport(false);
      return;
    }

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGLSupport(false);
      return;
    }

    if (!renderer) {
      setHasWebGLSupport(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 18;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Smooth soft plane geometry
    const geometry = new THREE.PlaneGeometry(36, 24, 32, 24);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColorA: { value: new THREE.Color(0x7c3aed) }, // Deep violet
        uColorB: { value: new THREE.Color(0x0891b2) }, // Cyan
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Gentle ambient wave
          float wave = sin(pos.x * 0.2 + uTime * 0.4) * cos(pos.y * 0.25 + uTime * 0.3) * 1.5;
          float mouseDist = distance(pos.xy, uMouse * vec2(12.0, 8.0));
          float mouseWave = sin(mouseDist * 0.3 - uTime * 0.8) * exp(-mouseDist * 0.2) * 1.2;

          pos.z += wave + mouseWave;
          vElevation = pos.z;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          float mixStrength = smoothstep(-1.8, 2.2, vElevation);
          vec3 color = mix(uColorA, uColorB, vUv.x + vElevation * 0.15);
          float alpha = mixStrength * 0.22;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.3;
    scene.add(mesh);

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isTabVisible) return;

      const elapsedTime = clock.getElapsedTime();
      currentMouseX += (targetMouseX - currentMouseX) * 0.03;
      currentMouseY += (targetMouseY - currentMouseY) * 0.03;

      material.uniforms.uTime.value = elapsedTime;
      material.uniforms.uMouse.value.set(currentMouseX, currentMouseY);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      geometry.dispose();
      material.dispose();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement?.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {!hasWebGLSupport && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.18),rgba(8,145,178,0.12),transparent_70%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05060A]/60 to-[#05060A]" />
    </div>
  );
};
