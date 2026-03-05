// import React, { useEffect, useRef } from "react";
// import TOPOLOGY from "vanta/dist/vanta.topology.min";
// import * as THREE from "three";

// const VantaBackground = ({ children }) => {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect.current && vantaRef.current) {
//       vantaEffect.current = TOPOLOGY({
//         el: vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         color: 0x00ffff,
//         backgroundColor: 0x0f172a
//       });
//     }

//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//         vantaEffect.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       style={{
//         width: "100%",
//         minHeight: "100vh",
//         position: "relative"
//       }}
//     >
//       <div style={{ position: "relative", zIndex: 1 }}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default VantaBackground;