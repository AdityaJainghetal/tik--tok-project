// // src/components/RightSuggestions.jsx
// export default function RightSuggestions() {
//   // Yeh data static hai, real app mein state ya API se aayega
//   const currentUser = {
//     username: "aadi",
//     fullName: "Aditya Jain",
//     avatar: "https://i.pravatar.cc/150?u=aadi",
//   };

//   const suggestions = [
//     { username: "shivamguptaa", desc: "Shivam Gupta • Suggested for you" },
//     { username: "vin_diesel", desc: "Vin Diesel • Followed by mohinish..." },
//     {
//       username: "akanshajain",
//       desc: "Akansha Jain • Followed by apoorvajain44",
//     },
//     { username: "reena_kurrey", desc: "REENA KURREY • Followed by 513radha" },
//     { username: "er_abhishek", desc: "Er Abhishek Sonkar • Suggested for you" },
//   ];

//   return (
//     <aside className="hidden lg:block w-80 py-6 px-4 sticky top-0 h-screen overflow-y-auto">
//       {/* Current User Card */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <img
//             src={currentUser.avatar}
//             alt={currentUser.username}
//             className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-700"
//           />
//           <div>
//             <p className="font-semibold">{currentUser.username}</p>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {currentUser.fullName}
//             </p>
//           </div>
//         </div>
//         <button className="text-blue-500 font-semibold text-sm hover:text-blue-700">
//           Switch
//         </button>
//       </div>

//       {/* Suggested Header */}
//       <div className="flex items-center justify-between mb-4">
//         <p className="font-semibold text-gray-600 dark:text-gray-300">
//           Suggested for you
//         </p>
//         <button className="text-sm font-semibold hover:text-gray-800 dark:hover:text-gray-200">
//           See All
//         </button>
//       </div>

//       {/* Suggestion List */}
//       <div className="space-y-4">
//         {suggestions.map((user, index) => (
//           <div key={index} className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <img
//                 src={`https://i.pravatar.cc/150?u=${user.username}`}
//                 alt={user.username}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-semibold text-sm">{user.username}</p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
//                   {user.desc}
//                 </p>
//               </div>
//             </div>
//             <button className="text-blue-500 font-semibold text-sm hover:text-blue-700">
//               Follow
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Footer Links */}
//       <div className="mt-10 text-xs text-gray-500 dark:text-gray-400 space-y-1">
//         <div className="flex flex-wrap gap-2">
//           <span>About</span> • <span>Help</span> • <span>Press</span> •{" "}
//           <span>API</span> • <span>Jobs</span>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           <span>Privacy</span> • <span>Terms</span> • <span>Locations</span> •{" "}
//           <span>Language</span>
//         </div>
//         <p className="mt-4">© 2026 Tik-tok FROM META</p>
//       </div>
//     </aside>
//   );
// }


// src/components/RightSuggestions.jsx
export default function RightSuggestions() {
  const currentUser = {
    username: "aadi",
    fullName: "Aditya Jain",
    avatar: "https://media.easy-peasy.ai/fb97cb03-6b72-4b00-ac27-f2c1ecd44e98/6b08a27f-eaf9-4524-82dc-aec4f2126161.png", // Ultra-realistic young Indian man (clean front-facing portrait)
  };

  const suggestions = [
    {
      username: "shivamguptaa",
      desc: "Shivam Gupta • Suggested for you",
      avatar: "https://p1.hippopx.com/preview/990/336/955/rishi-gangoly-man-indian-professional-male-thinking.jpg", // Professional Indian man thinking pose
    },
    {
      username: "vin_diesel",
      desc: "Vin Diesel • Followed by mohinish...",
      avatar: "https://images.pexels.com/photos/4307713/pexels-photo-4307713.jpeg", // Cheerful Indian man smiling
    },
    {
      username: "akanshajain",
      desc: "Akansha Jain • Followed by apoorvajain44",
      avatar: "https://images.pexels.com/photos/2362887/pexels-photo-2362887.jpeg", // Smiling woman portrait
    },
    {
      username: "reena_kurrey",
      desc: "REENA KURREY • Followed by 513radha",
      avatar: "https://media.easy-peasy.ai/045a086d-d6df-40f9-854b-4834fd826df4/adcf461e-8171-4c3a-a256-0e1b15dabaaf.png", // Elegant young woman (modern-traditional mix)
    },
    {
      username: "er_abhishek",
      desc: "Er Abhishek Sonkar • Suggested for you",
      avatar: "https://images.pexels.com/photos/981104/pexels-photo-981104.jpeg", // Young man smiling outdoors
    },
  ];

  return (
    <aside className="hidden lg:block w-80 py-6 px-4 sticky top-0 h-screen overflow-y-auto">
      {/* Current User Card */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.username}
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm"
          />
          <div>
            <p className="font-semibold">{currentUser.username}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {currentUser.fullName}
            </p>
          </div>
        </div>
        <button className="text-blue-500 font-semibold text-sm hover:text-blue-700 transition">
          Switch
        </button>
      </div>

      {/* Suggested Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-gray-600 dark:text-gray-300">
          Suggested for you
        </p>
        <button className="text-sm font-semibold hover:text-gray-800 dark:hover:text-gray-200 transition">
          See All
        </button>
      </div>

      {/* Suggestion List */}
      <div className="space-y-5">
        {suggestions.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-11 h-11 rounded-full object-cover border border-gray-200 dark:border-gray-700 shadow-sm"
              />
              <div>
                <p className="font-semibold text-sm">{user.username}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
                  {user.desc}
                </p>
              </div>
            </div>
            <button className="text-blue-500 font-semibold text-sm hover:text-blue-700 transition">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-10 text-xs text-gray-500 dark:text-gray-400 space-y-1">
        <div className="flex flex-wrap gap-2">
          <span>About</span> • <span>Help</span> • <span>Press</span> •{" "}
          <span>API</span> • <span>Jobs</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span>Privacy</span> • <span>Terms</span> • <span>Locations</span> •{" "}
          <span>Language</span>
        </div>
        <p className="mt-4">© 2026 Tik-tok FROM META</p>
      </div>
    </aside>
  );
}