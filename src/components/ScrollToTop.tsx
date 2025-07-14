"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black/70 shadow-xl border border-white/30 transition-all duration-300 hover:scale-110 hover:bg-blue-700 focus:outline-none flex items-center justify-center ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={24} className="text-white" strokeWidth={2.2} />
    </button>
  );
} 