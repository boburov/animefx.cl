"use client";

import Image from "next/image";
import Link from "next/link";
import { Flame, Zap, Heart, ArrowLeft, Home } from "lucide-react";
import { useState, useEffect } from "react";
import gojoSrc from "@/images/gojo.jpg";

export default function FunnyMoralPage() {
  const [isJudging, setIsJudging] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsJudging(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-screen flex flex-col justify-between bg-white overflow-hidden">
      {/* Background Vibes */}
      <div
        className="absolute inset-0 bg-lime-600 opacity-10 blur-3xl"
        aria-hidden="true"
      />
      <Zap
        className="absolute top-6 left-6 w-12 h-12 md:w-16 md:h-16 text-lime-600 animate-pulse"
        aria-hidden="true"
      />
      <Heart
        className="absolute bottom-16 right-6 w-10 h-10 md:w-14 md:h-14 text-pink-500 animate-bounce"
        aria-hidden="true"
      />
      <Flame
        className="absolute top-24 right-8 w-8 h-8 md:w-12 md:h-12 text-lime-600 animate-pulse"
        aria-hidden="true"
      />

      {/* Top Content - Responsive Text */}
      <div className="relative z-10 text-center pt-8 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-800 drop-shadow-2xl">
          Bro... 😔
        </h1>
        <p className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Hentai ko'rish yaxshi emas!
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Gojo sensei seni ko'rib turibdi... Mewing qilib judging qilmoqda 👀💢
          <span className="block mt-2 text-lime-600 font-bold text-lg sm:text-xl">
            Real anime bilan qayt, domain expansion qilamiz bro 🔥
          </span>
        </p>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="relative inline-block">
          <Image
            src={gojoSrc}
            alt="Gojo Satoru judging yoki forgiving"
            priority
            className={`object-contain rounded-2xl shadow-2xl transition-all duration-1000 w-full max-w-[80vw] sm:max-w-md md:max-w-lg max-h-[35vh] sm:max-h-[40vh] md:max-h-[50vh] ${
              isJudging
                ? "grayscale opacity-90"
                : "drop-shadow-2xl"
            }`}
          />

          {/* Judging Bubble - Mobile uchun yuqoriga ko'tarildi */}
          <div
            className={`absolute -top-20 sm:-top-24 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-4 sm:px-8 sm:py-5 rounded-3xl shadow-2xl border-4 border-purple-600 whitespace-nowrap transition-all duration-1000 pointer-events-none ${
              isJudging ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg sm:text-xl font-bold">
              Hentai Ko'rmoqchimisiz ???
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black" />
          </div>

         
        </div>
      </div>

      {/* Bottom Buttons + Footer */}
      <div className="relative z-10 text-center pb-8 px-4 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-lg sm:text-xl rounded-full transition-all transform hover:scale-110 shadow-2xl"
          >
            <Home className="w-6 h-6 sm:w-7 sm:h-7" />
            Bosh Sahifaga (Real Anime)
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-lg sm:text-xl rounded-full transition-all transform hover:scale-105 shadow-2xl"
          >
            <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            Orqaga (xato qildim)
          </button>
        </div>

        <footer className="text-gray-500 text-sm sm:text-base">
          AnimeFX – Faqat sifatli va halol anime 💚 | Gojo approved ✓
        </footer>
      </div>
    </main>
  );
}
