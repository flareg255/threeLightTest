import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three/src/Three';
import _ from 'lodash';

const Box_group = (props) => {
    let group = useRef();
    let theta = 0;

    useFrame(() => {
        // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
        // const r = 1 * Math.sin(THREE.Math.degToRad((theta += 0.1)))
        const r = THREE.Math.degToRad((theta += 0.2));
        // const s = Math.cos(THREE.Math.degToRad(theta * 2))
        // const s = Math.cos(theta * 2)
        let s = r * 10;
        group.current.rotation.set(r, r, r);
        group.current.scale.set(1, 1, 1);
        group.current.position.set(1, 1, 1);
    });

    const [geo, mat, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(1, 10, 10);
        const mat = new THREE.MeshStandardMaterial({
            color: new THREE.Color('orange'),
        });
        const coords = new Array(500)
            .fill()
            .map((i) => [
                _.random(400, true) - 200,
                _.random(400, true) - 200,
                _.random(400, true) - 200,
            ]);

        return [geo, mat, coords];
    }, []);

    console.log(group);

    return (
        <group ref={group}>
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

    // let list = [];

    // for(let i = 0; i < 250; i++){

    //     let listChild = [];

    //     for(let j = 0; j < 3; j++){
    //         if(randBetween(1, 10) % 2 === 0){
    //             listChild[j] = randBetween(1, 10);
    //         }else{
    //             listChild[j] = randBetween(1, 10) * -1;
    //         }
    //     }

    //     list.push(listChild);
    // }

    // let boxList = [];

    // for(let data in list){
    //     // console.log(data);
    //     boxList.push(<Box key={data} position={list[data]} />)
    // }

    // console.log(list);
    // console.log(boxList);

    // return (
    //     <Canvas camera={{ position: [0, 0, 15] }} shadowMap>
    //         <ambientLight />
    //         <pointLight position={[10, 10, 10]} />
    //         <fog attach="fog" args={['#cc7b32', 16, 20]} />
    //         {boxList}
    //     </Canvas>
    // )
};

export default Box_group;
