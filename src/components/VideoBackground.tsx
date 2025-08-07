'use client';

import { ReactNode } from 'react';

interface VideoBackgroundProps {
  children: ReactNode;
  overlayOpacity?: number;
  className?: string;
}

export default function VideoBackground({ 
  children, 
  overlayOpacity = 85,
  className = "" 
}: VideoBackgroundProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/855564-hd_1280_720_24fps.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-[1px]`} />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        {children}
      </div>
    </section>
  );
}