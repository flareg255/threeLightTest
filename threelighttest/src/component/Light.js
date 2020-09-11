import React, { useRef, useMemo } from 'react';
import { useFrame, useResource } from 'react-three-fiber';
import * as THREE from 'three/src/Three';
import _ from 'lodash';

function Light() {
    // パラメータを見たいときはrefでアクセスし、コンソールログに表示する
    const ref = useRef();
    const [ref1, light] = useResource();
    console.log(ref);
    return (
        <>
            {/* <ambientLight color={'aqua'} intensity={1} castShadow={true} /> */}
            {/* <ambientLightProbe sh={'lightskyblue'} intensity={1} /> */}
            {/* <lightProbe color={'#0000ff'} intensity={4} sh={'lightskyblue'} /> */}
            <directionalLight
                ref={ref1}
                color={'blue'}
                intensity={1}
                position={[0, 50, 0]}
                castShadow
            />
            {light && <directionalLightHelper ref={ref} args={[light, 5]} />}

            {/* <hemisphereLight
                ref={ref}
                color={'aqua'}
                groundColor={'brown'}
                intensity={1}
                receiveShadow
                castShadow
            /> */}
            {/* <spotLight
                intensity={0.6}
                position={[30, 30, 50]}
                angle={0.2}
                penumbra={1}
                castShadow
            /> */}
            {/*
            <rectAreaLight
                width={30}
                height={30}
                intensity={10}
                color={'#ffbdf4'}
                position={[2, 1, 4]}
                lookAt={[0, 0, 0]}
                penumbra={2}
                castShadow
            /> */}
            {/* <rectAreaLight
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
            /> */}
        </>
    );
}

export default Light;
