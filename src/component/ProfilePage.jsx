

// ProfilePage.jsx
import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-4xl bg-white md:border md:border-gray-300 md:rounded my-4 md:my-8">

        {/* Top Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start px-4 pt-6 pb-4 md:px-12 md:pt-10 md:pb-8 border-b">
          
          {/* Profile Picture */}
          <div className="w-20 h-20 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
            <img
              src="https://picsum.photos/300"
              alt="Jacob West"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Stats + Name + Bio */}
          <div className="mt-6 md:mt-0 md:ml-12 flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
              <h1 className="text-2xl font-light">jacob_w</h1>
              <button className="px-6 py-1.5 bg-gray-200 text-sm font-semibold rounded-lg hover:bg-gray-300 transition">
                Edit Profile
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-between md:justify-start gap-12 mt-5 text-sm font-medium">
              <div><span className="font-bold">54</span> posts</div>
              <div><span className="font-bold">834</span> followers</div>
              <div><span className="font-bold">162</span> following</div>
            </div>

            {/* Name + Bio */}
            <div className="mt-5">
              <p className="font-semibold">Jacob West</p>
              <p>
                Digital goodies designer{" "}
                <span className="text-blue-500">@pixsellz</span>
              </p>
              <p>Everything is designed.</p>
            </div>
          </div>
        </div>

        {/* Story Highlights */}
        <div className="flex justify-center gap-4 md:gap-10 py-6 px-4 overflow-x-auto">
          {["New", "Friends", "Sport", "Design"].map((label, i) => (
            <div key={i} className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-pink-500 overflow-hidden">
                <img
                  src={`https://picsum.photos/200?random=${i}`}
                  alt={label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-1.5 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-t">
          <div className="flex gap-16 text-xs font-semibold uppercase tracking-widest py-3">
            <button className="border-t-2 border-black pt-3">POSTS</button>
            <button className="text-gray-500">SAVED</button>
            <button className="text-gray-500">TAGGED</button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1 pb-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={`https://picsum.photos/400/400?random=${i + 10}`}
                alt={`Post ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
