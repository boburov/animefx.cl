"use client";

import Image from "next/image";
import Link from "next/link";
import chopper from "@/images/chopper.png";
import { Flame, Zap, Heart, Home, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const [isSad, setIsSad] = useState(true);

  // Chopperni "sad" dan "happy" ga o'tkazish uchun animation
  useEffect(() => {
    const timer = setTimeout(() => setIsSad(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Effects - AnimeFX style */}
      <div className="absolute inset-0 bg-lime-600 opacity-10 blur-3xl" />
      <div className="absolute top-10 left-10 animate-pulse">
        <Zap className="w-16 h-16 text-lime-600" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce">
        <Heart className="w-14 h-14 text-pink-500" />
      </div>
      <div className="absolute top-32 right-20">
        <Flame className="w-12 h-12 text-lime-600 animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 404 Title - Epik style */}
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-800 drop-shadow-2xl mb-8">
          404
        </h1>

        <p className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Oops! Sahifa topilmadi bro 😭
        </p>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Chopper ham juda xafa bo'ldi... U senga eng yaxshi animelarni
          ko'rsatmoqchi edi, lekin bu yerda hech nima yo'q 💔
          <br />
          <span className="text-lime-600 font-bold">
            Siz zoro kabi adashib qoldingiz bro 🔥
          </span>
        </p>

        {/* Chopper Image - Animated & Interactive */}
        <div className="relative inline-block">
          <Image
            src={chopper}
            alt="Tony Tony Chopper - AnimeFX do'sti"
            width={300}
            height={600}
            priority
            className={`scale-150 transition-all  ${
              isSad
                ? "scale-100 opacity-80 grayscale"
                : "scale-100 opacity-100 drop-shadow-2xl border-2"
            }`}
          />

          {/* Speech Bubble */}
          <div
            className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-3xl shadow-2xl border-4 border-lime-600 whitespace-nowrap transition-all duration-1000 ${
              isSad ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg font-bold text-gray-800">
              Doktaaa... bu yerda hech kim yo'q... 😢
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
          </div>

          {/* Happy Bubble */}
          <div
            className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-8 py-4 rounded-3xl shadow-2xl whitespace-nowrap transition-all duration-1000 ${
              isSad ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-lg font-bold">Yaaay! Endi uyga qaytamiz! 🎉</p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-pink-500" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 px-10 py-5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xl rounded-full transition-all transform hover:scale-110 shadow-2xl"
          >
            <Home className="w-7 h-7" />
            Bosh Sahifaga Qaytish
            <Flame className="w-6 h-6 group-hover:animate-pulse" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 px-8 py-5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xl rounded-full transition-all transform hover:scale-105 shadow-xl"
          >
            <ArrowLeft className="w-6 h-6" />
            Orqaga
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-gray-500 text-lg">
          AnimeFX bilan har doim to'g'ri yo'lda bo'lasan 💚
        </p>
      </div>
    </section>
  );
}
