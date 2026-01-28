// src/components/MobileTopHeader.jsx
import { Heart, MessageCircle } from "lucide-react";

export default function MobileTopHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b dark:border-gray-800 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold tracking-tighter">Tik-tok</h1>
        <div className="flex gap-5">
          <Heart className="w-6 h-6" />
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
