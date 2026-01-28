
import { Heart, MessageCircle, Send, Bookmark, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ReelPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Close / Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-10 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
      >
        <X size={28} />
      </button>

      {/* Main Reel Content - Full screen vertical */}
      <div className="flex-1 relative flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Video Player - Cricket Reel */}
        <div className="w-full max-w-[500px] aspect-[9/16] relative overflow-hidden rounded-xl shadow-2xl">
          <video
            src="https://videos.pexels.com/video-files/854203/854203-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log("Video load failed, fallback use kar");
            }}
          />

          {/* Play overlay (hover pe dikhe) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition">
            <div className="bg-black/50 rounded-full p-6">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Top Text - Reel Title */}
          <div className="absolute top-8 left-0 right-0 text-center px-6">
            <div className="inline-block bg-black/60 backdrop-blur-md px-6 py-2 rounded-full">
              <p className="text-white text-xl md:text-2xl font-bold">
                Sixer on First Ball 🔥
              </p>
            </div>
          </div>

          {/* Funny Labels */}
          <div className="absolute bottom-32 left-6 right-6 flex justify-between">
            <div className="bg-black/70 px-5 py-2 rounded-full">
              <p className="text-white font-bold text-lg">Bowler</p>
            </div>
            <div className="bg-black/70 px-5 py-2 rounded-full">
              <p className="text-white font-bold text-lg">Le: Me 😎</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-t from-black via-black/80 to-transparent pb-20 pt-10 px-4">
        <div className="max-w-[500px] mx-auto">
          {/* Username + Follow */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-black p-0.5">
                  <img
                    src="https://media.easy-peasy.ai/a43d171a-45ce-45cf-b422-649eecc4ffb4/090134e9-c882-491b-922b-4b50b057f0e6.png"  // Professional confident young Indian man (Virat vibe)
                    alt="virat.kohli"
                    className="w-full h-full rounded-full object-cover border border-gray-300"
                  />
                </div>
              </div>
              <div>
                <p className="text-white font-semibold">virat.kohli</p>
                <p className="text-gray-300 text-sm">kingofcricket</p>
              </div>
            </div>
            <button className="bg-white text-black px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
              Follow
            </button>
          </div>

          <p className="text-white text-base mb-6">
            Yorker ko sixer bana diya 😂🔥 King mode on! #ViratKohli #CricketReels #IPL
          </p>

          {/* Right Floating Actions */}
          <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6">
            <button className="text-white flex flex-col items-center">
              <Heart size={32} className="mb-1" />
              <span className="text-sm">45.2K</span>
            </button>

            <button className="text-white flex flex-col items-center">
              <MessageCircle size={32} className="mb-1" />
              <span className="text-sm">1.2K</span>
            </button>

            <button className="text-white flex flex-col items-center">
              <Send size={32} className="mb-1 rotate-[-30deg]" />
              <span className="text-sm">Share</span>
            </button>

            <button className="text-white flex flex-col items-center">
              <Bookmark size={32} className="mb-1" />
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Audio Indicator */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-white text-sm bg-black/50 inline-block px-4 py-1 rounded-full">
          Original Audio • Stadium Roar + Bumrah Yorker 😂
        </p>
      </div>
    </div>
  );
}