
// import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useState } from 'react';

// function PostCard({ post }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-3">
//         <div className="flex items-center gap-3">
//           <img
//             src={post.avatar}
//             alt={post.username}
//             className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
//           />
//           <div>
//             <p className="font-semibold text-sm">{post.username}</p>
//             <span className="text-gray-500 dark:text-gray-400 text-xs">{post.time}</span>
//           </div>
//         </div>
//         <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//           <MoreHorizontal className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//         </button>
//       </div>

//       {/* Carousel Images */}
//       <div className="relative aspect-square bg-black">
//         <img
//           src={post.images[currentIndex]}
//           alt={`${post.username}'s post ${currentIndex + 1}`}
//           className="w-full h-full object-cover"
//           onError={(e) => {
//             e.currentTarget.src = "https://via.placeholder.com/500x500?text=Image+Not+Found";
//           }}
//         />

//         {/* Navigation Arrows */}
//         {post.images.length > 1 && (
//           <>
//             <button
//               onClick={prevSlide}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </>
//         )}

//         {/* Dots Indicator */}
//         {post.images.length > 1 && (
//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//             {post.images.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-1.5 rounded-full transition-all ${
//                   idx === currentIndex ? "bg-white w-6" : "bg-white/60 w-1.5"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Actions */}
//       <div className="px-4 py-3 flex justify-between items-center">
//         <div className="flex gap-6">
//           <button onClick={() => setIsLiked(!isLiked)}>
//             <Heart 
//               className={`w-7 h-7 cursor-pointer transition ${
//                 isLiked ? 'fill-red-500 text-red-500' : 'hover:text-red-500'
//               }`} 
//             />
//           </button>
//           <MessageCircle className="w-7 h-7 cursor-pointer hover:text-blue-500 transition" />
//           <Send className="w-7 h-7 cursor-pointer hover:text-green-500 transition" />
//         </div>
//         <Bookmark className="w-7 h-7 cursor-pointer hover:text-yellow-500 transition" />
//       </div>

//       {/* Likes & Caption */}
//       <div className="px-4 pb-4">
//         <p className="font-semibold text-sm">{post.likes} likes</p>
//         <p className="mt-1 text-sm leading-snug">
//           <span className="font-semibold mr-2">{post.username}</span>
//           {post.caption}
//         </p>
//         <button className="mt-2 text-gray-500 dark:text-gray-400 text-sm hover:underline">
//           View all {post.comments} comments
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function PhotoFeed() {
//   const posts = [
//     {
//       username: "cricketworld",
//       avatar: "https://i.pravatar.cc/150?u=cricket1",
//       time: "45m",
//       images: [
//         "https://wallpapercat.com/w/full/e/9/1/150106-2880x1620-desktop-hd-virat-kohli-background-photo.jpg",
//         "https://wallpapercat.com/w/full/8/8/d/150637-3840x2160-desktop-4k-virat-kohli-wallpaper-image.jpg",
//         "https://wallpapercat.com/w/full/9/5/0/150872-1920x1080-desktop-1080p-virat-kohli-wallpaper-image.jpg",
//       ],
//       likes: "1.8M",
//       comments: 12453,
//       caption: "King Kohli in full flow 👑 What a cover drive! #ViratKohli #IPL",
//     },
//     {
//       username: "nature_clicks",
//       avatar: "https://i.pravatar.cc/150?u=nature",
//       time: "2h",
//       images: [
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
//         "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
//       ],
//       likes: "892K",
//       comments: 3421,
//       caption: "Mountain mornings hit different ⛰️🌅 #NaturePhotography #Mountains",
//     },
//     {
//       username: "foodie_paradise",
//       avatar: "https://i.pravatar.cc/150?u=food",
//       time: "5h",
//       images: [
//         "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
//         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
//         "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
//       ],
//       likes: "654K",
//       comments: 2109,
//       caption: "Pizza perfection 🍕✨ Who else is hungry now? #FoodPorn #Pizza",
//     },
//     {
//       username: "travel_diaries",
//       avatar: "https://i.pravatar.cc/150?u=travel",
//       time: "8h",
//       images: [
//         "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
//       ],
//       likes: "1.2M",
//       comments: 5678,
//       caption: "Paris never disappoints 🗼💫 #EiffelTower #ParisVibes #Travel",
//     },
//     {
//       username: "fitness_goals",
//       avatar: "https://i.pravatar.cc/150?u=fitness",
//       time: "12h",
//       images: [
//         "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
//         "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
//       ],
//       likes: "423K",
//       comments: 1876,
//       caption: "Consistency is key 💪 Day 180 of my fitness journey! #Fitness #Motivation",
//     },
//     {
//       username: "sunset_lovers",
//       avatar: "https://i.pravatar.cc/150?u=sunset",
//       time: "1d",
//       images: [
//         "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800",
//       ],
//       likes: "789K",
//       comments: 2341,
//       caption: "Golden hour magic 🌅✨ #Sunset #GoldenHour #Nature",
//     },
//     {
//       username: "coffee_addict",
//       avatar: "https://i.pravatar.cc/150?u=coffee",
//       time: "1d",
//       images: [
//         "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
//         "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
//       ],
//       likes: "234K",
//       comments: 987,
//       caption: "But first, coffee ☕️ Perfect latte art to start the day! #Coffee #LatteArt",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
//       {/* Header */}
//       <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
//         <div className="max-w-2xl mx-auto px-4 py-3">
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//             PhotoFeed
//           </h1>
//         </div>
//       </div>

//       {/* Feed */}
//       <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
//         {posts.map((post, index) => (
//           <PostCard key={index} post={post} />
//         ))}
//       </div>

//       {/* Bottom Padding */}
//       <div className="h-20"></div>
//     </div>
//   );
// }

import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function PostCard({ post }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-lg mb-6">
      {/* Header - TikTok style slim */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-9 h-9 rounded-full object-cover border-2 border-purple-500/70"
          />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
            <span className="text-gray-500 dark:text-gray-400 text-xs">{post.time}</span>
          </div>
        </div>
        <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <MoreHorizontal className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Carousel - TikTok style tall vertical */}
      <div className="relative aspect-[9/16] bg-black">  {/* ← Yeh line change ki: super tall like TikTok */}
        <img
          src={post.images[currentIndex]}
          alt={`${post.username}'s post ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/1080x1920?text=Image+Not+Found";
          }}
        />

        {/* Navigation Arrows - smaller & subtle */}
        {post.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator - TikTok style */}
        {post.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {post.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-white w-6" : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Actions - bigger icons for mobile feel */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex gap-7">
          <button onClick={() => setIsLiked(!isLiked)}>
            <Heart 
              className={`w-8 h-8 cursor-pointer transition ${
                isLiked ? 'fill-red-500 text-red-500 scale-110' : 'hover:text-red-500 hover:scale-110'
              }`} 
            />
          </button>
          <MessageCircle className="w-8 h-8 cursor-pointer hover:text-blue-500 transition hover:scale-110" />
          <Send className="w-8 h-8 cursor-pointer hover:text-green-500 transition hover:scale-110" />
        </div>
        <Bookmark className="w-8 h-8 cursor-pointer hover:text-yellow-500 transition hover:scale-110" />
      </div>

      {/* Likes & Caption */}
      <div className="px-4 pb-5">
        <p className="font-bold text-base">{post.likes} likes</p>
        <p className="mt-1 text-sm leading-tight">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </p>
        <button className="mt-2 text-gray-500 dark:text-gray-400 text-sm hover:underline">
          View all {post.comments.toLocaleString()} comments
        </button>
      </div>
    </div>
  );
}

export default function PhotoFeed() {
  const posts = [
    {
      username: "cricketworld",
      avatar: "https://i.pravatar.cc/150?u=cricket1",
      time: "45m",
      images: [
        "https://images.unsplash.com/photo-1622297840892-794f1d92828e?w=1080",  // vertical friendly
        "https://wallpapercave.com/wp/wp6412315.jpg",
        "https://c1.wallpaperflare.com/preview/72/871/745/cricket-shot-sport-competition-batsman-cricketer-match.jpg",
      ],
      likes: "1.8M",
      comments: 12453,
      caption: "King Kohli in full flow 👑 What a cover drive! #ViratKohli #IPL",
    },
    {
      username: "nature_clicks",
      avatar: "https://i.pravatar.cc/150?u=nature",
      time: "2h",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&ar=9:16&fit=crop",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1080&ar=9:16&fit=crop",
      ],
      likes: "892K",
      comments: 3421,
      caption: "Mountain mornings hit different ⛰️🌅 #NaturePhotography #Mountains",
    },
    {
      username: "foodie_paradise",
      avatar: "https://i.pravatar.cc/150?u=food",
      time: "5h",
      images: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1080&ar=9:16&fit=crop",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1080&ar=9:16&fit=crop",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1080&ar=9:16&fit=crop",
      ],
      likes: "654K",
      comments: 2109,
      caption: "Pizza perfection 🍕✨ Who else is hungry now? #FoodPorn #Pizza",
    },
    // ... baaki posts same, but images ko vertical-friendly URLs se replace kar sakte ho
    // Add more if needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-950">
      {/* Header - slim like TikTok */}
      <div className="sticky top-0 z-20 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            PhotoFeed
          </h1>
          <button className="text-gray-700 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Feed - narrower for mobile/TikTok feel */}
      <div className="max-w-md mx-auto px-2 py-4 space-y-8">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>

      {/* Bottom safe area padding for mobile */}
      <div className="h-24"></div>
    </div>
  );
}