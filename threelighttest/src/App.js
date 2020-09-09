import React, { useRef, useEffect } from 'react';
import './App.css';
import { BoxObj } from './component/BoxObj';
import Light from './component/Light';
import Box_group from './component/Box_group';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import _ from 'lodash';

extend({ OrbitControls });

function App() {
    return (
        <Canvas>
            {/* <Camera position={[0, 0, 300]} /> */}
            <CameraControls />
            <axesHelper args={[30, 15, 15]} />
            {/* <Light /> */}
            <ambientLight color={'orange'} intensity={1} />
            {/* <ambientLightProbe color={'red'} intensity={1} /> */}
            {/* <directionalLight
                color={'red'}
                intensity={0.5}
                castShadow={true}
                position={[5, 0, 0]}
            /> */}
            {/* <spotLight color={'#0000ff'} intensity={1} /> */}
            <GroundPlane />
            <BackDrop />
            <Box_group />
            <rectAreaLight
                width={30}
                height={30}
                intensity={10}
                color={'#ffbdf4'}
                position={[2, 1, 4]}
                lookAt={[0, 0, 0]}
                penumbra={2}
                castShadow
            />
            <rectAreaLight
                width={30}
                height={30}
                intensity={10}
                color={'#bdefff'}
                position={[-2, 1, 4]}
                lookAt={[0, 0, 0]}
                penumbra={2}
                castShadow
            />
            <rectAreaLight
                width={30}
                height={30}
                intensity={10}
                color={'#fff'}
                position={[1, 4, -2]}
                lookAt={[0, 0, 0]}
                penumbra={2}
                castShadow
            />

            <BoxObj position={[0, 0, 0]} />
        </Canvas>
    );
}

// function Camera(props) {
//     const ref = useRef();
//     const { setDefaultCamera } = useThree();
//     // // Make the camera known to the system
//     useEffect(() => setDefaultCamera(ref.current), []);
//     // // Update it every frame
//     // useFrame(() => ref.current.updateMatrixWorld());
//     return <perspectiveCamera ref={ref} {...props} />;
// }

const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls class.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls

    const {
        camera,
        gl: { domElement },
    } = useThree();

    // Ref to the controls, so that we can update them on every frame with useFrame
    const controls = useRef();
    useFrame(() => controls.current.update());
    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            autoRotate={false}
            enableZoom={true}
            enablePan={false}
            minDistance={100}
            maxDistance={200}
        />
    );
};

function GroundPlane() {
    return (
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -100, 0]}>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}

function BackDrop() {
    return (
        <mesh receiveShadow position={[0, -1, -100]}>
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}

export default App;
