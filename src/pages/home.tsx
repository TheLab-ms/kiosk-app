
// import React from 'react';
// import Link from 'next/link';

// const Home: React.FC = () => {
//   return (
//     <div>
//       <header>
//         <h1>Welcome to Your Lab.ms Signed in Page</h1>
//       </header>
//       <main>
//         <p>This is the content of your signed in page.</p>
//         <div>
//           <button>
//             <Link href="/help">Help</Link>
//           </button>
//           <button>
//             <Link href="/reserve-machine">Reserve a Machine</Link>
//           </button>
//           <button>
//             <Link href="/tour">Tour</Link>
//           </button>
//           <button>
//             <Link href="/registration">Registration</Link>
//           </button>
//           <button>
//             <Link href="/signout">Sign Out</Link>
//           </button>
//         </div>
//       </main>
//       <footer>
//         &copy; {new Date().getFullYear()} Your Website
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import {Button} from "@nextui-org/react";

import styles from '@/styles/Home.module.css';

export default function App() {
  return (
    <div>
          <header>
            <h1>Welcome to Your Lab.ms Signed in Page</h1>
          </header>
          <main  className={`${styles.main}`}>
            <p>This is the content of your signed in page.</p>
    <div className="flex flex-wrap gap-4 items-center">
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Default
      </Button>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" color="primary">
        Tour
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"  color="primary">
        Reserve a Machine
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" color="primary">
        Help
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" color="primary">
        Events 
      </Button>  
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"size="lg" color="primary" >
        Sign Out
      </Button>  
      </div>
      </main>
    </div>

  );
}

