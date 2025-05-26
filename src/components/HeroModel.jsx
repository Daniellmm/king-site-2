import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Book } from "./Book";

const HeroModel = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 15 }}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={1.5} color="#f4f4f4" />
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                color="#ffffff"
            />
            
            <group
                scale={isMobile ? 7.7 : 1}
                position={[-0.3, 0.0, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Book />
            </group>
        </Canvas>
    )
}

export default HeroModel