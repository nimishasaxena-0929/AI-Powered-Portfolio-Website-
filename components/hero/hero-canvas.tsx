"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Hero3DScene from "./hero-3d-scene";

export default function HeroCanvas() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border border-[#222724] flex items-center justify-center font-mono text-[10px] text-slate-500">
          SYSTEM_READY
        </div>
      </div>
    );
  }

  if (reducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-[#222724] bg-[#121513] flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-dashed border-slate-700" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[380px] sm:h-[480px] lg:h-[540px] relative">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        aria-label="Abstract Engineering 3D Model Accent"
      >
        <Hero3DScene />
      </Canvas>
    </div>
  );
}
