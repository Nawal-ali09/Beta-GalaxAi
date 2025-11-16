import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Avatar } from "./Avatar";

export const Experience = ({ scriptCommand }) => {
  const starsRef = useRef();
  const hollowRadius = 25; // radius of the empty center

  // Create stars positions outside hollow
  // const starPositions = useMemo(() => {
  //   const positions = [];
  //   for (let i = 0; i < 7000; i++) {
  //     let x, y;
  //     do {
  //       x = (Math.random() - 0.5) * 200;
  //       y = (Math.random() - 0.5) * 200;
  //     } while (Math.sqrt(x * x + y * y) < hollowRadius); // avoid center
  //     const z = (Math.random() - 0.5) * 200;
  //     positions.push(x, y, z);
  //   }
  //   return new Float32Array(positions);
  // }, []);



  // Create star lines instead of points
const starPositions = useMemo(() => {
  const positions = [];
  for (let i = 0; i < 7000; i++) {
    let x, y;
    do {
      x = (Math.random() - 0.5) * 200;
      y = (Math.random() - 0.5) * 200;
    } while (Math.sqrt(x * x + y * y) < hollowRadius);
    const z = (Math.random() - 0.5) * 200;

    // Add start and end points for the line (streak)
    positions.push(x, y, z);      // start
    positions.push(x, y, z - 2);  // end, length of the streak
  }
  return new Float32Array(positions);
}, []);


  useFrame(() => {
    if (starsRef.current) {
      const positions = starsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += 0.9; // move stars toward camera
        if (positions[i + 2] > 100) {
          positions[i + 2] = -100; // reset behind camera
        }
      }
      starsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <ambientLight intensity={0.0} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      {/* Shooting stars with hollow center */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starPositions.length / 3}
            array={starPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00eaff" size={0.9} />
      </points>

      <Environment preset="sunset" />

      <Avatar position={[0, -3.39, 7.2]} scale={2} scriptCommand={scriptCommand} />
    </>
  );
};