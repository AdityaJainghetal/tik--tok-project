// // src/components/MobileBottomNav.jsx
// import { 
//   Home, 
//   Search, 
//   PlusSquare, 
//   Film,        // Reels ke liye (Compass bhi chalega)
//   Heart, 
//   UserCircle 
// } from 'lucide-react';

// function MobileBottomNav() {
//   return (
//     <nav className="
//       fixed bottom-0 inset-x-0 z-50
//       bg-white dark:bg-black 
//       border-t border-gray-200 dark:border-gray-800
//       md:hidden           // desktop pe hide kar denge
//     ">
//       <div className="flex items-center justify-around py-2 px-4">
        
//         <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">
//           <Home size={28} strokeWidth={2} />
//         </button>

//         <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">
//           <Search size={28} strokeWidth={2} />
//         </button>

//         <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">
//           <PlusSquare size={28} strokeWidth={2} />
//         </button>

//         <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">
//           <Film size={28} strokeWidth={2} />
//         </button>

//         <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition relative">
//           <Heart size={28} strokeWidth={2} />
//           {/* notification badge example */}
//           <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
//         </button>

//         <button className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition">
//           <UserCircle size={28} strokeWidth={2} />
//         </button>

//       </div>
//     </nav>
//   );
// }

// export default MobileBottomNav;
// src/components/MobileBottomNav.jsx
import { 
  Home, 
  Search, 
  PlusSquare, 
  Film, 
  Heart, 
  UserCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ← Yeh import karna zaroori hai

function MobileBottomNav() {
  const navigate = useNavigate(); // ← Hook use karo

  return (
    <nav className="
      fixed bottom-0 inset-x-0 z-50
      bg-white dark:bg-black 
      border-t border-gray-200 dark:border-gray-800
      md:hidden
    ">
      <div className="flex items-center justify-around py-2 px-4">
        
        <button 
          onClick={() => navigate('/')} // Home
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <Home size={28} strokeWidth={2} />
        </button>

        <button 
          onClick={() => navigate('/search')} // Search page (agar bana hai to)
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <Search size={28} strokeWidth={2} />
        </button>

        {/* PlusSquare → Reels pe navigate */}
        <button 
          onClick={() => navigate('/reels')}
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition text-blue-500" // blue color se highlight kiya
        >
          <PlusSquare size={28} strokeWidth={2} />
        </button>

        <button 
          onClick={() => navigate('/reels')} // Ya agar alag reels tab chahiye to alag route
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <Film size={28} strokeWidth={2} />
        </button>

        <button 
          onClick={() => navigate('/notifications')} // Notifications (agar bana hai)
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition relative"
        >
          <Heart size={28} strokeWidth={2} />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-black"></span>
        </button>

        <button 
          onClick={() => navigate('/profile')} // Profile page
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <UserCircle size={28} strokeWidth={2} />
        </button>

      </div>
    </nav>
  );
}

export default MobileBottomNav;