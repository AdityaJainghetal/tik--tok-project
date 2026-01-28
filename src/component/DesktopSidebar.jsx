// src/components/DesktopSidebar.jsx
import {
  Home,
  Search,
  PlusSquare,
  Film,
  Heart,
  UserCircle,
  Menu,
  MessageCircleMore,
  Bell,
} from "lucide-react";

function DesktopSidebar() {
  return (
    <aside
      className="
      hidden md:flex md:flex-col 
      fixed left-0 top-0 bottom-0 z-40
      w-20 lg:w-64 
      bg-white dark:bg-black 
      border-r border-gray-200 dark:border-gray-800
      transition-all duration-300
    "
    >
      {/* Logo / bitzo text */}
      <div className="p-4 lg:p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="hidden lg:block text-2xl font-bold tracking-tight">
          bitzo
        </h1>
        <div className="lg:hidden text-3xl  font-black">bitzo</div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 lg:px-6 py-8 space-y-2 lg:space-y-1">
        <a
          href="/"
          className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <Home size={28} />
          <span className="hidden lg:inline font-medium">Home</span>
        </a>

        <a
          href="/"
          className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <Search size={28} />
          <span className="hidden lg:inline font-medium">Search</span>
        </a>

        {/* <a href="#" className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition">
          <Film size={28} />
          <span className="hidden lg:inline font-medium">Reels</span>
        </a> */}

        <a
          href="/reels"
          className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <Film size={28} />
          <span className="hidden lg:inline font-medium">Reels</span>
        </a>

        {/* <a
          href="#"
          className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <MessageCircleMore size={28} />
          <span className="hidden lg:inline font-medium">Messages</span>
        </a> */}

        <a
          href="#"
          className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition relative"
        >
          <Heart size={28} />
          <span className="hidden lg:inline font-medium">Notifications</span>
          <span className="absolute left-6 top-3 lg:left-52 w-2 h-2 bg-red-500 rounded-full"></span>
        </a>

        <a
          href="/"
          className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <PlusSquare size={28} />
          <span className="hidden lg:inline font-medium">Create</span>
        </a>

        <a
          href="/profile"
          className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition"
        >
          <UserCircle size={28} />
          <span className="hidden lg:inline font-medium">Profile</span>
        </a>
      </nav>

      {/* More / Settings at bottom */}
      <div className="p-4 lg:p-6 border-t border-gray-200 dark:border-gray-800">
        <button className="flex items-center gap-4 p-3 lg:p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition w-full">
          <Menu size={28} />
          <span className="hidden lg:inline font-medium">More</span>
        </button>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
