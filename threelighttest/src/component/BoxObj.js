import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

import _ from 'lodash';

function BoxObj(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    // Set up state for the hovered and active state
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)

    let theta = 0;
    const radius = 3;
    const rand = _.random(1) === 1 ? -1 : 1;
    let rad;

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
        mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01;
        // mesh.current.rotation.z += 0.01;
        // theta += 1;
        // rad = (theta * Math.PI) / 180;
        // mesh.current.position.x = radius * Math.cos(rad) * rand;
        // mesh.current.position.y = radius * Math.sin(rad) * rand;
    });

    return (
        <mesh
            {...props}
            ref={mesh}
            // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            // onClick={(e) => setActive(!active)}
            // onPointerOver={(e) => setHover(true)}
            // onPointerOut={(e) => setHover(false)}
            // castShadow
        >
            {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> */}
            {/* <circleBufferGeometry attach="geometry" args={[10, 40]} /> */}
            {/* <ringBufferGeometry attach="geometry" args={[10, 2, 50]} /> */}
            <sphereBufferGeometry attach="geometry" args={[30, 30, 30]} />
            {/* <cylinderBufferGeometry attach="geometry" args={[0, 3, 3, 10, 1]} /> */}
            {/* <tetrahedronBufferGeometry attach="geometry" args={[2]} /> */}
            {/* <octahedronBufferGeometry attach="geometry" args={[30]} /> */}
            {/* <dodecahedronBufferGeometry attach="geometry" args={[30]} /> */}
            {/* <icosahedronBufferGeometry attach="geometry" args={[2]} /> */}
            {/* <torusBufferGeometry attach="geometry" args={[10, 20, 40, 40]} /> */}
            {/* <torusKnotBufferGeometry attach="geometry" args={[10, 1, 10, 10]} /> */}
            <meshStandardMaterial
                attach="material"
                color={'#123456'}
                wireframe={true}
            />
        </mesh>
    );
}

export { BoxObj };
