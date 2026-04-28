import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.05, 0.05, 0.15],
      markerColor: [0.1, 0.8, 1], // Cyan
      glowColor: [0.2, 0.4, 1],   // Blue/Purple glow
      markers: [
        { location: [19.076, 72.8777] as [number, number], size: 0.1 },
        { location: [28.6139, 77.209] as [number, number], size: 0.1 },
        { location: [20.1011, 77.1337] as [number, number], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.08 }, // NY
        { location: [34.0522, -118.2437], size: 0.08 }, // LA
        { location: [51.5074, -0.1278], size: 0.08 }, // London
        { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
        { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
      ],
      onRender: (state: any) => {
        state.phi = phi + pointerInteractionMovement.current;
        phi += 0.005;
      },
    } as any);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative transition-all duration-1000 flex items-center justify-center w-full h-full">
      <div className="relative rounded-full border border-blue-500/20 shadow-[0_0_120px_rgba(59,130,246,0.2)] mask-gradient">
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            canvasRef.current!.style.cursor = 'grabbing';
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current!.style.cursor = 'grab';
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current!.style.cursor = 'grab';
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta * 0.01;
            }
          }}
          style={{ width: 800, height: 800, maxWidth: "100%", aspectRatio: 1, cursor: 'grab' }}
        />
      </div>
    </div>
  );
}
