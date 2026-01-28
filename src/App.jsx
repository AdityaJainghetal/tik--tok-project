// import DesktopSidebar from './component/DesktopSidebar';
// import MobileTopHeader from './component/MobileTopHeader';
// import MobileBottomNav from './component/MobileBottomNav';
// import StoriesRow from './component/StoriesRow';
// import RightSuggestions from './component/RightSuggestions';
// import PostCard from './component/PostCard';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white flex">

//       {/* Left Sidebar - Desktop only */}
//       <DesktopSidebar />

//       {/* Main wrapper (shifted right on desktop) */}
//       <div className="flex-1 md:ml-20 lg:ml-64 flex flex-col">

//         {/* Mobile-only top header */}
//         <MobileTopHeader />

//         {/* Main content area */}
//         <main className="flex-1 pt-14 md:pt-0 pb-16 md:pb-0 overflow-y-auto">

//           {/* Stories horizontal scroll */}
//           <StoriesRow />

//           {/* Feed + Right suggestions container */}
//           <div className="flex max-w-5xl mx-auto gap-8 px-4 md:px-0">

//             {/* Center feed - posts */}
//             <div className="flex-1 py-6 max-w-xl">
//               {/* You can map real posts array here later */}
//               <PostCard />
//               <PostCard />
//               <PostCard />
//               {/* Example: <PostCard post={somePostData} /> */}
//             </div>

//             {/* Right sidebar - Suggested for you (lg screens and up) */}
//             <RightSuggestions />
//           </div>
//         </main>

//         {/* Mobile bottom navigation */}
//         <MobileBottomNav />
//       </div>
//     </div>
//   );
// }

// export default App;

// App.jsx
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layoutoutlet.jsx";
import ReelPage from "./component/ReelPage.jsx";
import PostCard from "./component/PostCard.jsx";
import ProfilePage from "./component/ProfilePage.jsx";
// import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostCard />} />
          <Route path="/reels" element={<ReelPage />} />
          <Route path="/profile" element={<ProfilePage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
