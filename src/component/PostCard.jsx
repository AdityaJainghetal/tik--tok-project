
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

export default function PostCard({ post }) {
  // 2 high-quality Virat Kohli batting images (aap yahan aur add kar sakte ho)
  const defaultImages = [
    "https://wallpapercat.com/w/full/e/9/1/150106-2880x1620-desktop-hd-virat-kohli-background-photo.jpg",
    "https://media.easy-peasy.ai/b79774a1-09db-4007-a410-8cbfb170c642/9822cfb9-c821-4b44-96ce-0733a505def0.png",
    // Extra backup agar chahiye:
    // "https://wallpapercat.com/w/full/8/8/d/150637-3840x2160-desktop-4k-virat-kohli-wallpaper-image.jpg",
  ];

  // Randomly ek image choose karo
  const randomImage = defaultImages[Math.floor(Math.random() * defaultImages.length)];

  const defaultPost = {
    username: "cricketworld",
    avatar: "https://i.pravatar.cc/150?u=cricket",
    time: "45m",
    image: randomImage,
    likes: "1.8M",
    caption: "King Kohli in full flow 👑 What a cover drive! #ViratKohli #IPL",
  };

  const data = post || defaultPost;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden mb-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={data.avatar}
            alt={data.username}
            className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
          />
          <div>
            <p className="font-semibold text-sm">{data.username}</p>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">• {data.time}</span>
        </div>

        <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <MoreHorizontal className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {/* Post Image */}
      <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-800">
        <img
          src={data.image}
          alt="Virat Kohli batting action"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/500x625?text=Virat+Kohli";
          }}
        />
      </div>

      

      {/* Actions */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex gap-6">
          <Heart className="w-7 h-7 cursor-pointer hover:text-red-500 transition" />
          <MessageCircle className="w-7 h-7 cursor-pointer hover:text-blue-500 transition" />
          <Send className="w-7 h-7 cursor-pointer hover:text-green-500 transition" />
        </div>
        <Bookmark className="w-7 h-7 cursor-pointer hover:text-yellow-500 transition" />
      </div>

      {/* Likes & Caption */}
      <div className="px-4 pb-5">
        <p className="font-semibold text-sm">{data.likes} likes</p>
        <p className="mt-1 text-sm leading-snug">
          <span className="font-semibold">{data.username}</span> {data.caption}
        </p>
        <button className="mt-2 text-gray-500 dark:text-gray-400 text-sm hover:underline">
          View all comments
        </button>
      </div>
    </div>
  );
}