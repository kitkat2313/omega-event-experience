import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

// Glass Shattering Cube Component
const GlassShatteringCube = () => {
  const count = 120;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const mainCubeRef = useRef<THREE.Mesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    const colors = ["#1a1a1a", "#ffffff", "#4a4a4a"]; // ash, white, black
    
    for (let i = 0; i < count; i++) {
      // Random direction for explosion
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const speed = 0.8 + Math.random() * 1.2;
      const distance = 2 + Math.random() * 4;
      const size = 0.08 + Math.random() * 0.15;
      const rotationSpeed = (Math.random() - 0.5) * 0.2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      temp.push({ 
        theta,
        phi,
        speed,
        distance,
        size,
        rotationSpeed,
        color,
        delay: Math.random() * 0.3,
      });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = clock.getElapsedTime();
    
    // Main animation cycle: 3 seconds total (1.5s shatter, 1.5s reform)
    const cycle = (time % 4);
    const isExploding = cycle < 2;
    const progress = isExploding ? cycle / 2 : 1 - ((cycle - 2) / 2);
    
    // Main cube visibility and scale
    if (mainCubeRef.current) {
      mainCubeRef.current.visible = progress < 0.1 || progress > 0.9;
      const scale = progress < 0.1 ? 1 - (progress * 10) : progress > 0.9 ? (progress - 0.9) * 10 : 0;
      mainCubeRef.current.scale.setScalar(Math.max(0.01, scale));
      mainCubeRef.current.rotation.x = time * 0.1;
      mainCubeRef.current.rotation.y = time * 0.15;
    }
    
    particles.forEach((particle, i) => {
      const { theta, phi, distance, size, rotationSpeed, delay } = particle;
      
      // Apply delay and smooth easing
      const delayedProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
      const eased = delayedProgress < 0.5 
        ? 2 * delayedProgress * delayedProgress 
        : 1 - Math.pow(-2 * delayedProgress + 2, 2) / 2;
      
      const currentDistance = distance * eased;
      
      const x = currentDistance * Math.sin(phi) * Math.cos(theta);
      const y = currentDistance * Math.cos(phi);
      const z = currentDistance * Math.sin(phi) * Math.sin(theta);
      
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(size * (progress > 0.05 ? 1 : 0));
      dummy.rotation.set(
        time * rotationSpeed + eased * Math.PI * 2,
        time * rotationSpeed * 1.5 + eased * Math.PI,
        time * rotationSpeed * 0.5
      );
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      {/* Main Cube */}
      <mesh ref={mainCubeRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#e0e0e0" 
          metalness={0.7} 
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Shattered Pieces */}
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial 
          color="#cccccc" 
          metalness={0.6} 
          roughness={0.4}
        />
      </instancedMesh>
    </>
  );
};

// Exploding Particles Component
const ExplodingParticles = () => {
  const count = 100;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const speed = 0.5 + Math.random() * 2;
      const size = 0.05 + Math.random() * 0.15;
      
      temp.push({ 
        theta,
        phi,
        speed,
        size,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = clock.getElapsedTime();
    
    particles.forEach((particle, i) => {
      const { theta, phi, speed, size, phase } = particle;
      
      // Pulsing explosion effect
      const pulseRadius = 1 + Math.abs(Math.sin(time * speed + phase)) * 4;
      
      const x = pulseRadius * Math.sin(phi) * Math.cos(theta);
      const y = pulseRadius * Math.cos(phi);
      const z = pulseRadius * Math.sin(phi) * Math.sin(theta);
      
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(size * (1 + Math.sin(time * speed + phase) * 0.5));
      dummy.rotation.set(time * 2, time * 3, time);
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial 
        color="#8B0000" 
        metalness={0.8} 
        roughness={0.2}
        emissive="#8B0000"
        emissiveIntensity={0.5}
      />
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
      {/* Lights */}
      <AnimatedSpotlights />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#D4AF37" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8B0000" />
      <pointLight position={[0, 5, 5]} intensity={0.6} color="#FFD700" />

      {/* 3D Elements */}
      <GlassShatteringCube />
      <Stage />
      
      <Sparkles
        count={200}
        scale={15}
        size={2}
        speed={0.3}
        color="#D4AF37"
      />

      <Environment preset="night" />
      
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
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-gold animate-fade-in">
            We Make Your Celebrations
          </h1>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Truly Unforgettable
          </h2>
          <p className="font-sub text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
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
