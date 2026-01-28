

// // import { useState, useRef, useEffect } from "react";
// // import {
// //   Heart,
// //   MessageCircle,
// //   Send,
// //   Bookmark,
// //   X,
// //   ThumbsDown,
// // } from "lucide-react";
// // import { useNavigate } from "react-router-dom";

// // const dummyReels = [
// //   {
// //     id: 1,
// //     videoSrc:
// //       "https://videos.pexels.com/video-files/854380/854380-hd_1920_1080_30fps.mp4",
// //     title: "Helicopter Shot 💥",
// //     caption: "Dhoni style magic 😂 #Legend",
// //     username: "rohitsharma",
// //     handle: "hitman",
// //     likes: 125000,
// //     commentsCount: 8900,
// //     audio: "Wind + Crowd",
// //   },
// //     {
// //     id: 2,
// //     videoSrc:
// //       "https://videos.pexels.com/video-files/854380/854380-hd_1920_1080_30fps.mp4",
// //     title: "Helicopter Shot 💥",
// //     caption: "Dhoni style magic 😂 #Legend",
// //     username: "rohitsharma",
// //     handle: "hitman",
// //     likes: 125000,
// //     commentsCount: 8900,
// //     audio: "Wind + Crowd",
// //   },
// //   {
// //     id: 3,
// //     videoSrc:
// //       "https://videos.pexels.com/video-files/11755921/11755921-uhd_2732_1440_60fps.mp4",
// //     title: "Night Sixer Under Lights 🌃",
// //     caption: "Pure fire at night 🔥 #IPL2025",
// //     username: "msdhoni",
// //     handle: "captaincool",
// //     likes: 67800,
// //     commentsCount: 3400,
// //     audio: "Night Stadium Roar",
// //   },
// //   {
// //     id: 4,
// //     videoSrc:
// //       "https://videos.pexels.com/video-files/854380/854380-hd_1920_1080_30fps.mp4",
// //     title: "Helicopter Shot 💥",
// //     caption: "Dhoni style magic 😂 #Legend",
// //     username: "rohitsharma",
// //     handle: "hitman",
// //     likes: 125000,
// //     commentsCount: 8900,
// //     audio: "Wind + Crowd",
// //   },
// // ];

// // export default function ReelPage() {
// //   const navigate = useNavigate();
// //   const videoRefs = useRef([]);

// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [reelsData, setReelsData] = useState(
// //     dummyReels.map((reel) => ({
// //       ...reel,
// //       isLiked: false,
// //       isDisliked: false,
// //       likesCount: reel.likes,
// //       comments: [
// //         { id: 1, user: "fanboy", text: "Kya shot tha bhai 🔥" },
// //         { id: 2, user: "cricketfan", text: "GOAT move!" },
// //       ],
// //       showCommentInput: false,
// //       newComment: "",
// //     }))
// //   );

// //   const currentReel = reelsData[currentIndex];

// //   /* 🔥 HANDLE SCROLL (REEL CHANGE) */
// //   const handleScroll = (e) => {
// //     const scrollTop = e.target.scrollTop;
// //     const screenHeight = window.innerHeight;
// //     const index = Math.round(scrollTop / screenHeight);
// //     setCurrentIndex(index);
// //   };

// //   /* ▶️ PLAY ACTIVE VIDEO ONLY */
// //   useEffect(() => {
// //     videoRefs.current.forEach((video, i) => {
// //       if (!video) return;
// //       if (i === currentIndex) {
// //         video.play().catch(() => {});
// //       } else {
// //         video.pause();
// //         video.currentTime = 0;
// //       }
// //     });
// //   }, [currentIndex]);

// //   const handleLike = () => {
// //     setReelsData((prev) =>
// //       prev.map((r, i) =>
// //         i === currentIndex
// //           ? {
// //               ...r,
// //               isLiked: !r.isLiked,
// //               isDisliked: false,
// //               likesCount: r.isLiked
// //                 ? r.likesCount - 1
// //                 : r.likesCount + 1,
// //             }
// //           : r
// //       )
// //     );
// //   };

// //   const handleDislike = () => {
// //     setReelsData((prev) =>
// //       prev.map((r, i) =>
// //         i === currentIndex
// //           ? {
// //               ...r,
// //               isDisliked: !r.isDisliked,
// //               isLiked: false,
// //             }
// //           : r
// //       )
// //     );
// //   };

// //   const handleCommentSubmit = (e) => {
// //     e.preventDefault();
// //     if (!currentReel.newComment.trim()) return;

// //     setReelsData((prev) =>
// //       prev.map((r, i) =>
// //         i === currentIndex
// //           ? {
// //               ...r,
// //               comments: [
// //                 ...r.comments,
// //                 {
// //                   id: Date.now(),
// //                   user: "you",
// //                   text: r.newComment,
// //                 },
// //               ],
// //               newComment: "",
// //               showCommentInput: false,
// //             }
// //           : r
// //       )
// //     );
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black z-50 overflow-hidden">
// //       {/* ❌ BACK BUTTON */}
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="absolute top-4 left-4 z-20 text-white bg-black/50 p-2 rounded-full"
// //       >
// //         <X size={28} />
// //       </button>

// //       {/* 📱 REELS CONTAINER */}
// //       <div
// //         className="h-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
// //         onScroll={handleScroll}
// //       >
// //         {reelsData.map((reel, index) => (
// //           <div
// //             key={reel.id}
// //             className="h-screen w-full snap-start flex justify-center items-center"
// //           >
// //             <div className="relative w-full max-w-[500px] h-full">
// //               <video
// //                 ref={(el) => (videoRefs.current[index] = el)}
// //                 src={reel.videoSrc}
// //                 muted
// //                 loop
// //                 playsInline
// //                 className="w-full h-full object-cover"
// //               />

// //               {/* RIGHT ACTIONS */}
// //               <div className="absolute right-4 bottom-40 flex flex-col gap-6 text-white">
// //                 <button onClick={handleLike}>
// //                   <Heart
// //                     size={32}
// //                     className={
// //                       currentReel?.isLiked && index === currentIndex
// //                         ? "fill-red-500 text-red-500"
// //                         : ""
// //                     }
// //                   />
// //                   <p className="text-xs">
// //                     {(reel.likesCount / 1000).toFixed(1)}K
// //                   </p>
// //                 </button>

// //                 <button onClick={handleDislike}>
// //                   <ThumbsDown size={30} />
// //                 </button>

// //                 <button
// //                   onClick={() =>
// //                     setReelsData((prev) =>
// //                       prev.map((r, i) =>
// //                         i === currentIndex
// //                           ? { ...r, showCommentInput: !r.showCommentInput }
// //                           : r
// //                       )
// //                     )
// //                   }
// //                 >
// //                   <MessageCircle size={32} />
// //                 </button>

// //                 <Send size={32} />
// //                 <Bookmark size={32} />
// //               </div>

// //               {/* BOTTOM INFO */}
// //               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
// //                 <p className="font-semibold">{reel.username}</p>
// //                 <p className="text-sm">{reel.caption}</p>
// //                 <p className="text-xs opacity-70 mt-1">{reel.audio}</p>
// //               </div>

// //               {/* 💬 COMMENTS */}
// //               {reel.showCommentInput && index === currentIndex && (
// //                 <div className="absolute bottom-0 left-0 right-0 bg-black p-4">
// //                   <div className="max-h-40 overflow-y-auto mb-3">
// //                     {reel.comments.map((c) => (
// //                       <div key={c.id} className="mb-2">
// //                         <p className="text-white text-sm font-semibold">
// //                           {c.user}
// //                         </p>
// //                         <p className="text-gray-300 text-sm">{c.text}</p>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   <form onSubmit={handleCommentSubmit} className="flex gap-2">
// //                     <input
// //                       value={reel.newComment}
// //                       onChange={(e) =>
// //                         setReelsData((prev) =>
// //                           prev.map((r, i) =>
// //                             i === currentIndex
// //                               ? { ...r, newComment: e.target.value }
// //                               : r
// //                           )
// //                         )
// //                       }
// //                       placeholder="Add a comment..."
// //                       className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full"
// //                     />
// //                     <button className="bg-blue-600 px-4 rounded-full">
// //                       Post
// //                     </button>
// //                   </form>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import { useState, useRef, useEffect } from "react";
// import {
//   Heart,
//   MessageCircle,
//   Send,
//   Bookmark,
//   X,
//   ThumbsDown,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const dummyReels = [
//   {
//     id: 1,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     title: "Amazing Nature 🌿",
//     caption: "Beautiful scenery captured! #Nature #Vibes",
//     username: "rohitsharma",
//     handle: "hitman",
//     likes: 125000,
//     commentsCount: 8900,
//     audio: "Nature Sounds",
//   },
//   {
//     id: 2,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//     title: "Creative Vibes 🎨",
//     caption: "Art in motion 🔥 #Creative",
//     username: "viratkholi",
//     handle: "kingkohli",
//     likes: 98000,
//     commentsCount: 5600,
//     audio: "Chill Beats",
//   },
//   {
//     id: 3,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     title: "Epic Moments 🌟",
//     caption: "Pure fire at night 🔥 #Epic",
//     username: "msdhoni",
//     handle: "captaincool",
//     likes: 67800,
//     commentsCount: 3400,
//     audio: "Stadium Roar",
//   },
//   {
//     id: 4,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     title: "Adventure Time 🏔️",
//     caption: "Travel goals right here! #Adventure #Travel",
//     username: "traveler_raj",
//     handle: "wanderlust",
//     likes: 84000,
//     commentsCount: 4200,
//     audio: "Adventure Theme",
//   },
//   {
//     id: 5,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//     title: "Fun Vibes 🎉",
//     caption: "Living the moment! #Fun #Enjoy",
//     username: "party_king",
//     handle: "funlover",
//     likes: 72000,
//     commentsCount: 3900,
//     audio: "Party Music",
//   },
//   {
//     id: 6,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//     title: "Speed Thrills 🏎️",
//     caption: "Life in the fast lane! #Speed #Adrenaline",
//     username: "speed_demon",
//     handle: "raceking",
//     likes: 91000,
//     commentsCount: 5100,
//     audio: "Engine Roar",
//   },
//   {
//     id: 7,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
//     title: "Chill Vibes ❄️",
//     caption: "Cool moments captured! #Chill #Relaxed",
//     username: "chill_master",
//     handle: "relaxmode",
//     likes: 56000,
//     commentsCount: 2800,
//     audio: "Lo-fi Beats",
//   },
//   {
//     id: 8,
//     videoSrc:
//       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
//     title: "Epic Story 🎬",
//     caption: "Cinema at its finest! #Movies #Epic",
//     username: "movie_buff",
//     handle: "cinephile",
//     likes: 103000,
//     commentsCount: 6700,
//     audio: "Epic Score",
//   },
// ];

// export default function ReelPage() {
//   const navigate = useNavigate();
//   const videoRefs = useRef([]);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [reelsData, setReelsData] = useState(
//     dummyReels.map((reel) => ({
//       ...reel,
//       isLiked: false,
//       isDisliked: false,
//       likesCount: reel.likes,
//       comments: [
//         { id: 1, user: "fanboy", text: "Kya shot tha bhai 🔥" },
//         { id: 2, user: "cricketfan", text: "GOAT move!" },
//       ],
//       showCommentInput: false,
//       newComment: "",
//     }))
//   );

//   const currentReel = reelsData[currentIndex];

//   /* 🔥 HANDLE SCROLL (REEL CHANGE) */
//   const handleScroll = (e) => {
//     const scrollTop = e.target.scrollTop;
//     const screenHeight = window.innerHeight;
//     const index = Math.round(scrollTop / screenHeight);
//     setCurrentIndex(index);
//   };

//   /* ▶️ PLAY ACTIVE VIDEO ONLY */
//   useEffect(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;
//       if (i === currentIndex) {
//         video.play().catch(() => {});
//       } else {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
//   }, [currentIndex]);

//   const handleLike = () => {
//     setReelsData((prev) =>
//       prev.map((r, i) =>
//         i === currentIndex
//           ? {
//               ...r,
//               isLiked: !r.isLiked,
//               isDisliked: false,
//               likesCount: r.isLiked
//                 ? r.likesCount - 1
//                 : r.likesCount + 1,
//             }
//           : r
//       )
//     );
//   };

//   const handleDislike = () => {
//     setReelsData((prev) =>
//       prev.map((r, i) =>
//         i === currentIndex
//           ? {
//               ...r,
//               isDisliked: !r.isDisliked,
//               isLiked: false,
//             }
//           : r
//       )
//     );
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (!currentReel.newComment.trim()) return;

//     setReelsData((prev) =>
//       prev.map((r, i) =>
//         i === currentIndex
//           ? {
//               ...r,
//               comments: [
//                 ...r.comments,
//                 {
//                   id: Date.now(),
//                   user: "you",
//                   text: r.newComment,
//                 },
//               ],
//               newComment: "",
//               showCommentInput: false,
//             }
//           : r
//       )
//     );
//   };

//   return (
//     <div className="fixed inset-0 bg-black z-50 overflow-hidden">
//       {/* ❌ BACK BUTTON */}
//       <button
//         onClick={() => navigate(-1)}
//         className="absolute top-4 left-4 z-20 text-white bg-black/50 p-2 rounded-full"
//       >
//         <X size={28} />
//       </button>

//       {/* 📱 REELS CONTAINER */}
//       <div
//         className="h-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
//         onScroll={handleScroll}
//       >
//         {reelsData.map((reel, index) => (
//           <div
//             key={reel.id}
//             className="h-screen w-full snap-start flex justify-center items-center"
//           >
//             <div className="relative w-full max-w-[500px] h-full">
//               <video
//                 ref={(el) => (videoRefs.current[index] = el)}
//                 src={reel.videoSrc}
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//               />

//               {/* RIGHT ACTIONS */}
//               <div className="absolute right-4 bottom-40 flex flex-col gap-6 text-white">
//                 <button onClick={handleLike}>
//                   <Heart
//                     size={32}
//                     className={
//                       currentReel?.isLiked && index === currentIndex
//                         ? "fill-red-500 text-red-500"
//                         : ""
//                     }
//                   />
//                   <p className="text-xs">
//                     {(reel.likesCount / 1000).toFixed(1)}K
//                   </p>
//                 </button>

//                 <button onClick={handleDislike}>
//                   <ThumbsDown size={30} />
//                 </button>

//                 <button
//                   onClick={() =>
//                     setReelsData((prev) =>
//                       prev.map((r, i) =>
//                         i === currentIndex
//                           ? { ...r, showCommentInput: !r.showCommentInput }
//                           : r
//                       )
//                     )
//                   }
//                 >
//                   <MessageCircle size={32} />
//                 </button>

//                 <Send size={32} />
//                 <Bookmark size={32} />
//               </div>

//               {/* BOTTOM INFO */}
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
//                 <p className="font-semibold">{reel.username}</p>
//                 <p className="text-sm">{reel.caption}</p>
//                 <p className="text-xs opacity-70 mt-1">{reel.audio}</p>
//               </div>

//               {/* 💬 COMMENTS */}
//               {reel.showCommentInput && index === currentIndex && (
//                 <div className="absolute bottom-0 left-0 right-0 bg-black p-4">
//                   <div className="max-h-40 overflow-y-auto mb-3">
//                     {reel.comments.map((c) => (
//                       <div key={c.id} className="mb-2">
//                         <p className="text-white text-sm font-semibold">
//                           {c.user}
//                         </p>
//                         <p className="text-gray-300 text-sm">{c.text}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <form onSubmit={handleCommentSubmit} className="flex gap-2">
//                     <input
//                       value={reel.newComment}
//                       onChange={(e) =>
//                         setReelsData((prev) =>
//                           prev.map((r, i) =>
//                             i === currentIndex
//                               ? { ...r, newComment: e.target.value }
//                               : r
//                           )
//                         )
//                       }
//                       placeholder="Add a comment..."
//                       className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full"
//                     />
//                     <button className="bg-blue-600 px-4 rounded-full">
//                       Post
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  X,
  ThumbsDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyReels = [
  {
    id: 1,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Amazing Nature 🌿",
    caption: "Beautiful scenery captured! #Nature #Vibes",
    username: "rohitsharma",
    handle: "hitman",
    likes: 125000,
    commentsCount: 8900,
    audio: "Nature Sounds",
  },
  {
    id: 2,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Creative Vibes 🎨",
    caption: "Art in motion 🔥 #Creative",
    username: "viratkholi",
    handle: "kingkohli",
    likes: 98000,
    commentsCount: 5600,
    audio: "Chill Beats",
  },
  {
    id: 3,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "Epic Moments 🌟",
    caption: "Pure fire at night 🔥 #Epic",
    username: "msdhoni",
    handle: "captaincool",
    likes: 67800,
    commentsCount: 3400,
    audio: "Stadium Roar",
  },
  {
    id: 4,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    title: "Adventure Time 🏔️",
    caption: "Travel goals right here! #Adventure #Travel",
    username: "traveler_raj",
    handle: "wanderlust",
    likes: 84000,
    commentsCount: 4200,
    audio: "Adventure Theme",
  },
  {
    id: 5,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "Fun Vibes 🎉",
    caption: "Living the moment! #Fun #Enjoy",
    username: "party_king",
    handle: "funlover",
    likes: 72000,
    commentsCount: 3900,
    audio: "Party Music",
  },
  {
    id: 6,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    title: "Speed Thrills 🏎️",
    caption: "Life in the fast lane! #Speed #Adrenaline",
    username: "speed_demon",
    handle: "raceking",
    likes: 91000,
    commentsCount: 5100,
    audio: "Engine Roar",
  },
  {
    id: 7,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    title: "Chill Vibes ❄️",
    caption: "Cool moments captured! #Chill #Relaxed",
    username: "chill_master",
    handle: "relaxmode",
    likes: 56000,
    commentsCount: 2800,
    audio: "Lo-fi Beats",
  },
  {
    id: 8,
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    title: "Epic Story 🎬",
    caption: "Cinema at its finest! #Movies #Epic",
    username: "movie_buff",
    handle: "cinephile",
    likes: 103000,
    commentsCount: 6700,
    audio: "Epic Score",
  },
];

export default function ReelPage() {
  const navigate = useNavigate();
  const videoRefs = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reelsData, setReelsData] = useState(
    dummyReels.map((reel) => ({
      ...reel,
      isLiked: false,
      isDisliked: false,
      likesCount: reel.likes,
      comments: [
        { id: 1, user: "fanboy", text: "Kya shot tha bhai 🔥" },
        { id: 2, user: "cricketfan", text: "GOAT move!" },
      ],
      showCommentInput: false,
      newComment: "",
    }))
  );

  const currentReel = reelsData[currentIndex];

  /* 🔥 HANDLE SCROLL (REEL CHANGE) */
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const screenHeight = window.innerHeight;
    const index = Math.round(scrollTop / screenHeight);
    setCurrentIndex(index);
  };

  /* ▶️ PLAY ACTIVE VIDEO ONLY */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

  const handleLike = () => {
    setReelsData((prev) =>
      prev.map((r, i) =>
        i === currentIndex
          ? {
              ...r,
              isLiked: !r.isLiked,
              isDisliked: false,
              likesCount: r.isLiked
                ? r.likesCount - 1
                : r.likesCount + 1,
            }
          : r
      )
    );
  };

  const handleDislike = () => {
    setReelsData((prev) =>
      prev.map((r, i) =>
        i === currentIndex
          ? {
              ...r,
              isDisliked: !r.isDisliked,
              isLiked: false,
            }
          : r
      )
    );
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!currentReel.newComment.trim()) return;

    setReelsData((prev) =>
      prev.map((r, i) =>
        i === currentIndex
          ? {
              ...r,
              comments: [
                ...r.comments,
                {
                  id: Date.now(),
                  user: "you",
                  text: r.newComment,
                },
              ],
              newComment: "",
              showCommentInput: false,
            }
          : r
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* ❌ BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 text-white bg-black/50 p-2 rounded-full"
      >
        <X size={28} />
      </button>

      {/* 📱 REELS CONTAINER */}
      <div
        className="h-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {reelsData.map((reel, index) => (
          <div
            key={reel.id}
            className="h-screen w-full snap-start flex justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] h-full">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.videoSrc}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* RIGHT ACTIONS */}
              <div className="absolute right-4 bottom-40 flex flex-col gap-6 text-white">
                <button onClick={handleLike}>
                  <Heart
                    size={32}
                    className={
                      currentReel?.isLiked && index === currentIndex
                        ? "fill-red-500 text-red-500"
                        : ""
                    }
                  />
                  <p className="text-xs">
                    {(reel.likesCount / 1000).toFixed(1)}K
                  </p>
                </button>

                <button onClick={handleDislike}>
                  <ThumbsDown size={30} />
                </button>

                <button
                  onClick={() =>
                    setReelsData((prev) =>
                      prev.map((r, i) =>
                        i === currentIndex
                          ? { ...r, showCommentInput: !r.showCommentInput }
                          : r
                      )
                    )
                  }
                >
                  <MessageCircle size={32} />
                </button>

                <Send size={32} />
                <Bookmark size={32} />
              </div>

              {/* BOTTOM INFO */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <p className="font-semibold">{reel.username}</p>
                <p className="text-sm">{reel.caption}</p>
                <p className="text-xs opacity-70 mt-1">{reel.audio}</p>
              </div>

              {/* 💬 COMMENTS */}
              {reel.showCommentInput && index === currentIndex && (
                <div className="absolute bottom-0 left-0 right-0 bg-black p-4">
                  <div className="max-h-40 overflow-y-auto mb-3">
                    {reel.comments.map((c) => (
                      <div key={c.id} className="mb-2">
                        <p className="text-white text-sm font-semibold">
                          {c.user}
                        </p>
                        <p className="text-gray-300 text-sm">{c.text}</p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleCommentSubmit} className="flex gap-2">
                    <input
                      value={reel.newComment}
                      onChange={(e) =>
                        setReelsData((prev) =>
                          prev.map((r, i) =>
                            i === currentIndex
                              ? { ...r, newComment: e.target.value }
                              : r
                          )
                        )
                      }
                      placeholder="Add a comment..."
                      className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full"
                    />
                    <button className="bg-blue-600 px-4 rounded-full">
                      Post
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}