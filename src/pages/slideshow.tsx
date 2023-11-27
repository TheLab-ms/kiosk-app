// import React from "react";

// export default function App() {
//   return (
//     <div>
//       <a href="https://example.com/path/to/external/image.jpg" target="_blank" rel="noopener noreferrer">
//         <img
//           src="https://example.com/path/to/external/image.jpg"
//           alt="External Image"
//           width={300}
//           height={200}
//         />
//       </a>
//     </div>
//   );
// }


import React from "react";

export default function App() {
  return (
    <div>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQIVSUaGvNw2cjEoAhuo71u1K2aGYYKePMBgSHbxbl-NnAPxjAF3IzhrK4p0J0Qgd_A6otsJ79-lG_6/embed?start=true&loop=true&delayms=3000"
        width="1600"
        height="750"
        //allowFullScreen // Allow full screen is a boolean attribute
      />
    </div>
  );
}
