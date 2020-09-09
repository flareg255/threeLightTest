import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three/src/Three';
import _ from 'lodash';

function Light() {
    let group = useRef();
    let theta = 0;

    const radius = 3;
    const rand = _.random(1) === 1 ? -1 : 1;
    let rad;

    useFrame(() => {
        // const r = 1 * Math.sin(THREE.Math.degToRad((theta += 0.1)))
        const r = THREE.Math.degToRad((theta += 0.2));
        // const s = Math.cos(THREE.Math.degToRad(theta * 2))
        // const s = Math.cos(theta * 2)
        let s = r * 10;
        group.current.rotation.set(0, r, 0);
        group.current.scale.set(1, 1, 1);
        group.current.position.set(0, 0, 0);

        group.current.rotation.x = group.current.rotation.y += 0.01;
        theta += 1;
        rad = (theta * Math.PI) / 180;

        // group.current.position.x = radius * Math.cos(rad) * rand;
        // group.current.position.y = radius * Math.sin(rad) * rand;
    });

    console.log(group);

    const [geo, mat, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1, 300, 300);
        const mat = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#123456'),
            wireframe: true,
        });
        const coords = new Array(100)
            .fill()
            .map((i) => [
                _.random(400, true),
                _.random(10, true),
                _.random(40, true) - 40,
            ]);
        // const coords = new Array(1).fill().map((i) => [0, 0, 0]);

        return [geo, mat, coords];
    }, []);

    return (
        <group ref={group}>
            <ambientLight color={'#00ffff'} intensity={0.5} />
            <directionalLight
                color={'red'}
                intensity={0.5}
                castShadow={true}
                position={[5, 0, 0]}
            />
            {coords.map(([p1, p2, p3], i) => (
                <mesh
                    key={i}
                    geometry={geo}
                    material={mat}
                    position={[p1, p2, p3]}
                />
            ))}
        </group>
    );
}

export default Light;
