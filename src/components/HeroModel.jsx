import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Book } from "./Book";

const HeroModel = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    return (
        <Canvas 
            camera={{ 
                position: [0, 0, 12], 
                fov: isMobile ? 35 : 55 
            }}
            style={{ width: '100%', height: '100%' }}
        >
            <OrbitControls
                enablePan={false}
                enableZoom={true}
                maxDistance={15}
                minDistance={5}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 1.5}
                autoRotate={false}
                enableDamping={true}
                dampingFactor={0.05}
            />
            
            {/* Better lighting setup */}
            <ambientLight intensity={0.6} color="#f4f4f4" />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1.2}
                color="#ffffff"
                castShadow
            />
            <directionalLight
                position={[-5, -5, 5]}
                intensity={0.5}
                color="#ffffff"
            />
            
            <group
                scale={isMobile ? 5 : isTablet ? 6 : 8}
                position={
                    isMobile 
                        ? [0, -3, 0]        // Mobile: centered horizontally, moved down
                        : isTablet 
                        ? [1, -0.5, 0]      // Tablet: slightly right, slightly down  
                        : [1, -5, 0]         // Desktop: moved right, centered vertically
                }
                rotation={[0, -Math.PI / 5, 0]}
            >
                <Book />
            </group>
        </Canvas>
    )
}

export default HeroModel