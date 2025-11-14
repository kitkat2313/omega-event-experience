import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

// Confetti Particles Component
const Confetti = () => {
  const count = 100;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 10 + 5;
      const z = (Math.random() - 0.5) * 20;

      temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle;

      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) * 2,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 2) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.1, 0.1, 0.02]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
    </instancedMesh>
  );
};

// Stage Component
const Stage = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Stage Platform */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[12, 0.5, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Stage Floor with Reflective Material */}
      <mesh position={[0, -0.7, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.95} 
          roughness={0.05}
          envMapIntensity={1}
        />
      </mesh>

      {/* Backdrop */}
      <mesh position={[0, 2, -4]}>
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Side Panels */}
      <mesh position={[-6, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[6, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.7} />
      </mesh>
    </group>
  );
};

// Animated Spotlights
const AnimatedSpotlights = () => {
  const spotlight1 = useRef<THREE.SpotLight>(null);
  const spotlight2 = useRef<THREE.SpotLight>(null);
  const spotlight3 = useRef<THREE.SpotLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (spotlight1.current) {
      spotlight1.current.position.x = Math.sin(t * 0.5) * 5;
      spotlight1.current.position.z = Math.cos(t * 0.5) * 3;
    }
    
    if (spotlight2.current) {
      spotlight2.current.position.x = Math.sin(t * 0.7 + 2) * 4;
      spotlight2.current.position.z = Math.cos(t * 0.7 + 2) * 4;
    }
    
    if (spotlight3.current) {
      spotlight3.current.position.x = Math.sin(t * 0.3 + 4) * 6;
      spotlight3.current.position.z = Math.cos(t * 0.3 + 4) * 2;
    }
  });

  return (
    <>
      <spotLight
        ref={spotlight1}
        position={[3, 8, 2]}
        angle={0.4}
        penumbra={0.5}
        intensity={150}
        color="#D4AF37"
        castShadow
        target-position={[0, 0, 0]}
      />
      <spotLight
        ref={spotlight2}
        position={[-3, 8, 2]}
        angle={0.4}
        penumbra={0.5}
        intensity={120}
        color="#ffffff"
        castShadow
        target-position={[0, 0, 0]}
      />
      <spotLight
        ref={spotlight3}
        position={[0, 10, -2]}
        angle={0.5}
        penumbra={0.6}
        intensity={100}
        color="#800020"
        castShadow
        target-position={[0, 0, 0]}
      />
    </>
  );
};

// Main Scene Component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <AnimatedSpotlights />
      
      <Stage />
      <Confetti />
      
      <Sparkles
        count={50}
        scale={15}
        size={2}
        speed={0.3}
        color="#D4AF37"
      />

      <Environment preset="studio" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// Loading Fallback
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-muted-foreground">Loading Experience...</p>
    </div>
  </div>
);

// Main 3D Hero Component
export const Hero3D = () => {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        shadows
        camera={{ position: [0, 4, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-background"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <div className="text-center space-y-6 px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold animate-fade-in">
            We Make Your Celebrations
          </h1>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Truly Unforgettable
          </h2>
          <p className="font-sub text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Premium Event Planners
          </p>
          <div className="pt-8 pointer-events-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="/book">
              <button className="px-10 py-5 bg-primary hover:bg-gold-glow text-primary-foreground font-heading font-bold text-lg rounded-2xl glow-gold hover:glow-gold-strong transition-all hover:scale-105">
                Plan Your Event
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};
