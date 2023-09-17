// import React, { useRef } from 'react';
// import { View, TouchableOpacity } from 'react-native';
// import { GLView } from 'expo-gl';
// import { Renderer, Scene, Mesh, MeshBasicMaterial, PerspectiveCamera, TextureLoader } from 'three';

// export const FlippedCard = () => {
//   const glView = useRef(null);
//   const scene = useRef(new Scene());
//   const camera = useRef(new PerspectiveCamera(75, 1, 0.1, 1000));
//   const card = useRef(null); // We'll create the card mesh in onContextCreate
//   const renderer = useRef(new Renderer({ gl: glView.current }));
//   renderer.current.setSize(300, 300);

//   const flipCard = () => {
//     card.current.rotation.x += Math.PI; // Rotate by 180 degrees on the x-axis
//   };

//   const onContextCreate = async (gl) => {

//     // Create a material for the card with two-sided textures
//     const material = new MeshBasicMaterial({ side: THREE.DoubleSide });

//     // Create the card mesh
//     card.current = new Mesh(new THREE.BoxGeometry(1, 1, 0.01), material);
//     scene.current.add(card.current);
    
//     camera.current.position.z = 2;

//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Render the scene
//       renderer.current.render(scene.current, camera.current);
//     };

//     animate();
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <GLView
//         ref={glView}
//         style={{ flex: 1 }}
//         onContextCreate={onContextCreate}
//       />
//       <TouchableOpacity onPress={flipCard}>
//         <View
//           style={{
//             position: 'absolute',
//             bottom: 20,
//             alignSelf: 'center',
//             backgroundColor: 'blue',
//             padding: 10,
//             borderRadius: 5,
//           }}
//         >
//           <Text style={{ color: 'white' }}>Flip</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default FlippedCard;
