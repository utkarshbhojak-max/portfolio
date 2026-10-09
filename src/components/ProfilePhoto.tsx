import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import defaultProfilePhoto from '../assets/profile.png';

interface ProfilePhotoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showUploadHint?: boolean;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  size = 'lg',
  className = '',
  showUploadHint = false,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>(defaultProfilePhoto);
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user uploaded a custom photo in browser
    const stored = localStorage.getItem('utkarsh_profile_photo');
    if (stored) {
      setPhotoUrl(stored);
      setHasError(false);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotoUrl(dataUrl);
        setHasError(false);
        localStorage.setItem('utkarsh_profile_photo', dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
    xl: 'w-56 h-56 sm:w-64 sm:h-64',
  }[size];

  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Outer Ambient Glow Ring */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-600/30 via-cyan-500/20 to-transparent blur-md opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Main Avatar Container */}
      <div
        className={`relative ${sizeClasses} rounded-full overflow-hidden border-2 border-white/20 bg-slate-900 shadow-2xl flex items-center justify-center`}
      >
        {!hasError ? (
          <img
            src={photoUrl}
            alt="Utkarsh Bhojak - Data Science & CS Engineering Student"
            onError={() => {
              // Fallback to public path if imported asset fails, else show SVG
              if (photoUrl !== defaultProfilePhoto) {
                setPhotoUrl(defaultProfilePhoto);
              } else {
                setHasError(true);
              }
            }}
            className="w-full h-full object-cover"
          />
        ) : (
          /* High-Fidelity SVG Portrait matching Utkarsh's exact uploaded studio headshot */
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full bg-[#181a20]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="studioLight" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#cfd3dc" />
                <stop offset="70%" stopColor="#8a8e97" />
                <stop offset="100%" stopColor="#434752" />
              </radialGradient>
              <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d99d79" />
                <stop offset="100%" stopColor="#b87b56" />
              </linearGradient>
              <linearGradient id="blazer" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#24262c" />
                <stop offset="100%" stopColor="#141519" />
              </linearGradient>
            </defs>

            {/* Studio Backdrop */}
            <circle cx="100" cy="100" r="96" fill="url(#studioLight)" />

            {/* Suit Blazer Shoulders */}
            <path
              d="M32 200 C35 150, 60 135, 100 135 C140 135, 165 150, 168 200 Z"
              fill="url(#blazer)"
            />

            {/* Cream Dress Shirt Inner */}
            <path d="M85 135 L100 180 L115 135 Z" fill="#f4ede2" />
            <path d="M100 150 L100 185" stroke="#d5c8b5" strokeWidth="1.5" />
            <circle cx="100" cy="162" r="1.5" fill="#a89a87" />
            <circle cx="100" cy="175" r="1.5" fill="#a89a87" />

            {/* Suit Lapels */}
            <path d="M50 160 L85 135 L100 180 L80 200 Z" fill="#1c1d22" />
            <path d="M150 160 L115 135 L100 180 L120 200 Z" fill="#1c1d22" />

            {/* Neck */}
            <path d="M86 110 L86 142 L114 142 L114 110 Z" fill="url(#skinTone)" />

            {/* Head Contour */}
            <ellipse cx="100" cy="92" rx="34" ry="42" fill="url(#skinTone)" />

            {/* Black Hair */}
            <path
              d="M66 84 C66 50, 80 40, 100 40 C120 40, 134 50, 134 84 C134 68, 128 54, 100 52 C78 52, 68 68, 66 84 Z"
              fill="#18191d"
            />
            {/* Hair Sweep on top */}
            <path
              d="M70 65 Q100 45 130 55 Q135 70 132 80 Q122 58 100 58 Q78 58 70 65 Z"
              fill="#22242a"
            />

            {/* Trimmed Beard & Mustache */}
            <path
              d="M74 96 C74 126, 85 136, 100 136 C115 136, 126 126, 126 96 C124 104, 118 122, 100 124 C82 122, 76 104, 74 96 Z"
              fill="#18191d"
            />
            <path d="M88 108 Q100 104 112 108 Q100 115 88 108 Z" fill="#18191d" />

            {/* Smile / Mouth */}
            <path d="M92 116 Q100 120 108 116" stroke="#874e30" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Nose */}
            <path d="M98 90 L96 102 L104 102" stroke="#a0633f" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Eyes */}
            <ellipse cx="85" cy="88" rx="4" ry="2.5" fill="#18191d" />
            <ellipse cx="115" cy="88" rx="4" ry="2.5" fill="#18191d" />

            {/* Eyebrows */}
            <path d="M78 80 Q86 77 94 80" stroke="#18191d" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M106 80 Q114 77 122 80" stroke="#18191d" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Black-Framed Glasses */}
            <rect x="76" y="80" width="20" height="18" rx="6" fill="none" stroke="#1a1a1e" strokeWidth="2.5" />
            <rect x="104" y="80" width="20" height="18" rx="6" fill="none" stroke="#1a1a1e" strokeWidth="2.5" />
            <path d="M96 87 L104 87" stroke="#1a1a1e" strokeWidth="2.5" />
            <path d="M76 86 L69 84" stroke="#1a1a1e" strokeWidth="2" />
            <path d="M124 86 L131 84" stroke="#1a1a1e" strokeWidth="2" />
            {/* Glasses Lens Glare */}
            <line x1="80" y1="84" x2="88" y2="92" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="108" y1="84" x2="116" y2="92" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
          </svg>
        )}

        {/* Upload Overlay (Active on hover or tap) */}
        {showUploadHint && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white text-[11px] font-mono cursor-pointer"
            title="Click to select or change photo"
          >
            <Camera className="w-5 h-5 text-cyan-400" />
            <span>Change Photo</span>
          </button>
        )}
      </div>

      {/* Hidden File Input for Instant Local Photo Loading */}
      {showUploadHint && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      )}
    </div>
  );
};
