// Layout.jsx
import { Outlet } from "react-router-dom";

import DesktopSidebar from "./DesktopSidebar";
import MobileTopHeader from "./MobileTopHeader";
import MobileBottomNav from "./MobileBottomNav";
import StoriesRow from "./StoriesRow";
import RightSuggestions from "./RightSuggestions";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white flex">

      {/* Left Sidebar - Desktop */}
      <DesktopSidebar />

      {/* Main wrapper */}
      <div className="flex-1 md:ml-20 lg:ml-64 flex flex-col">

        {/* Mobile Header */}
        <MobileTopHeader />

        {/* Main Content */}
        <main className="flex-1 pt-14 md:pt-0 pb-16 md:pb-0 overflow-y-auto">

          {/* Stories */}
          <StoriesRow />

          {/* Feed + Right sidebar */}
          <div className="flex max-w-5xl mx-auto gap-8 px-4 md:px-0">

            {/* Center content (Outlet yahin render hoga) */}
            <div className="flex-1 py-6 max-w-xl">
              <Outlet />
            </div>

            {/* Right Suggestions */}
            <RightSuggestions />
          </div>
        </main>

        {/* Mobile Bottom Nav */}
        <MobileBottomNav />
      </div>
    </div>
  );
};

export default Layout;
