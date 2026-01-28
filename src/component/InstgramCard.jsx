// // InstagramLayout.jsx
// import React from 'react';
// import { 
//   Home, 
//   Search, 
//   PlayCircle, 
//   Heart, 
//   UserCircle2, 
//   PlusSquare, 
//   MessageCircle, 
//   Menu 
// } from 'lucide-react';

// // Reusing the Post Card from before
// const InstagramPostCard = () => {
//   return (
//     <div className="w-full max-w-[470px] mx-auto bg-black text-white border border-gray-800 rounded-xl overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3">
//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] p-[2.5px]">
//               <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
//                 <img
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
//                   alt="profile"
//                   className="w-8 h-8 rounded-full object-cover border border-black"
//                 />
//               </div>
//             </div>
//           </div>
//           <div>
//             <p className="font-semibold text-sm">joshua_l</p>
//             <p className="text-xs text-gray-400">Tokyo, Japan</p>
//           </div>
//         </div>
//         <Menu size={20} />
//       </div>

//       {/* Image */}
//       <img
//         src="https://images.unsplash.com/photo-1540959733332-eab4deab8b29?w=800"
//         alt="Tokyo night"
//         className="w-full aspect-[4/5] object-cover"
//       />

//       {/* Actions */}
//       <div className="flex justify-between px-4 py-3">
//         <div className="flex gap-5">
//           <Heart size={28} className="hover:text-red-500 cursor-pointer" />
//           <MessageCircle size={28} />
//           <PlayCircle size={28} />
//         </div>
//         <Heart size={28} className="text-gray-400" />
//       </div>

//       {/* Likes & caption */}
//       <div className="px-4 pb-4 text-sm">
//         <p>
//           Liked by <span className="font-bold">craig_love</span> and{' '}
//           <span className="font-bold">44,686 others</span>
//         </p>
//         <p className="mt-1">
//           <span className="font-semibold">joshua_l</span> The game in Japan is amazing...
//         </p>
//       </div>
//     </div>
//   );
// };

// // Main Layout Component
// const InstagramLayout = () => {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">

//       {/* Top Navbar */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
//         <div className="max-w-[470px] mx-auto px-4 py-3 flex items-center justify-between">
//           <div className="text-2xl font-bold tracking-wider">Instagram</div>
          
//           <div className="flex items-center gap-5">
//             <PlusSquare size={26} className="cursor-pointer" />
//             <div className="relative">
//               <MessageCircle size={26} className="cursor-pointer" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 5
//               </span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Stories (horizontal scroll) */}
//       <div className="fixed top-[60px] left-0 right-0 z-40 bg-black border-b border-gray-800">
//         <div className="max-w-[470px] mx-auto px-2 py-3 flex gap-4 overflow-x-auto scrollbar-hide">
//           {Array.from({ length: 8 }).map((_, i) => (
//             <div key={i} className="flex flex-col items-center">
//               <div className="relative">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-[2px]">
//                   <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
//                     <img
//                       src={`https://i.pravatar.cc/150?img=${i + 10}`}
//                       alt="story"
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <p className="text-xs mt-1 text-gray-300">
//                 {["your", "karen", "zack", "kiera", "craig", "mia", "alex", "sara"][i]}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 pt-[110px] pb-20">
//         <div className="max-w-[470px] mx-auto space-y-6 px-2">
//           <InstagramPostCard />
//           <InstagramPostCard />
//           <InstagramPostCard />
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800">
//         <div className="max-w-[470px] mx-auto px-6 py-3 flex justify-between items-center">
//           <Home size={28} className="cursor-pointer" />
//           <Search size={28} className="cursor-pointer text-gray-400" />
//           <PlayCircle size={28} className="cursor-pointer text-gray-400" />
//           <div className="relative">
//             <Heart size={28} className="cursor-pointer text-gray-400" />
//             <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full"></span>
//           </div>
//           <UserCircle2 size={28} className="cursor-pointer text-gray-400" />
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default InstagramLayout;

// InstagramLayout.jsx
import React, { useState } from "react";
import {
  Home,
  Search,
  PlayCircle,
  Heart,
  UserCircle2,
  PlusSquare,
  MessageCircle,
  Menu,
} from "lucide-react";

/* ================= POST CARD ================= */
const InstagramPostCard = () => {
  const images = [
    "https://images.unsplash.com/photo-1540959733332-eab4deab8b29?w=800",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  ];

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full max-w-[470px] mx-auto bg-black text-white border border-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] p-[2.5px]">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover border border-black"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm">joshua_l</p>
            <p className="text-xs text-gray-400">Tokyo, Japan</p>
          </div>
        </div>
        <Menu size={20} />
      </div>

      {/* IMAGE CAROUSEL */}
      <div className="relative w-full aspect-[4/5]">
        <img
          src={images[current]}
          alt="post"
          onClick={nextImage}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between px-4 py-3">
        <div className="flex gap-5">
          <Heart size={28} className="hover:text-red-500 cursor-pointer" />
          <MessageCircle size={28} />
          <PlayCircle size={28} />
        </div>
        <Heart size={28} className="text-gray-400" />
      </div>

      {/* Likes & Caption */}
      <div className="px-4 pb-4 text-sm">
        <p>
          Liked by <span className="font-bold">craig_love</span> and{" "}
          <span className="font-bold">44,686 others</span>
        </p>
        <p className="mt-1">
          <span className="font-semibold">joshua_l</span> Tokyo vibes 🇯🇵✨
        </p>
      </div>
    </div>
  );
};

/* ================= MAIN LAYOUT ================= */
const InstagramLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
        <div className="max-w-[470px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">Instagram</div>
          <div className="flex items-center gap-5">
            <PlusSquare size={26} className="cursor-pointer" />
            <div className="relative">
              <MessageCircle size={26} className="cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Stories */}
      <div className="fixed top-[60px] left-0 right-0 z-40 bg-black border-b border-gray-800">
        <div className="max-w-[470px] mx-auto px-2 py-3 flex gap-4 overflow-x-auto scrollbar-hide">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt="story"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
              </div>
              <p className="text-xs mt-1 text-gray-300">
                {["your", "karen", "zack", "kiera", "craig", "mia", "alex", "sara"][i]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <main className="flex-1 pt-[110px] pb-20">
        <div className="max-w-[470px] mx-auto space-y-6 px-2">
          <InstagramPostCard />
          <InstagramPostCard />
          <InstagramPostCard />
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800">
        <div className="max-w-[470px] mx-auto px-6 py-3 flex justify-between items-center">
          <Home size={28} className="cursor-pointer" />
          <Search size={28} className="cursor-pointer text-gray-400" />
          <PlayCircle size={28} className="cursor-pointer text-gray-400" />
          <Heart size={28} className="cursor-pointer text-gray-400" />
          <UserCircle2 size={28} className="cursor-pointer text-gray-400" />
        </div>
      </footer>
    </div>
  );
};

export default InstagramLayout;
