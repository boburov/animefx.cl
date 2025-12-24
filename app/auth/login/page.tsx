"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import zoroImage from "@/images/zoro.png";
import googleIcon from "@/public/google.svg";

import { Flame, Zap, Star, Sparkles, Mail, Lock, User } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Decorative Effects */}
      <div
        className="absolute inset-0 bg-lime-600 opacity-10 blur-3xl"
        aria-hidden="true"
      />

      <Zap
        className="absolute top-20 left-10 w-12 h-12 text-lime-600 animate-pulse"
        aria-hidden="true"
      />
      <Flame
        className="absolute bottom-32 right-20 w-16 h-16 text-lime-600"
        aria-hidden="true"
      />
      <Sparkles
        className="absolute top-40 right-32 w-10 h-10 text-lime-600"
        aria-hidden="true"
      />
      <Star
        className="absolute bottom-40 left-20 w-10 h-10 text-lime-600 animate-pulse"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Auth Form Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-10">
            {/* Hero Title */}
            <header className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-lime-600 tracking-tight">
                Anime <span className="text-lime-700">FX</span>
              </h1>
              <p className="text-4xl md:text-6xl font-bold text-lime-600">
                {isLogin ? "Xush Kelibsiz!" : "Ro'yxatdan O'ting"}
              </p>
            </header>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-lg mx-auto lg:mx-0">
              {isLogin
                ? "Anime dunyosiga qaytib kirish vaqti keldi 🔥"
                : "AnimeFX oilasiga qo'shiling va sifatli animelarni birinchilardan bo'lib ko'ring!"}
            </p>

            {/* Auth Form */}
            <form className="max-w-md mx-auto lg:mx-0 space-y-6">
              {/* Username Field - Only for Signup */}
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-lime-600" />
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:border-lime-600 focus:outline-none transition-all"
                    aria-label="Username"
                  />
                </div>
              )}

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-lime-600" />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:border-lime-600 focus:outline-none transition-all"
                  aria-label="Email address"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-lime-600" />
                <input
                  type="password"
                  placeholder="Parol"
                  required
                  className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:border-lime-600 focus:outline-none transition-all"
                  aria-label="Password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-lime-600 hover:bg-lime-700 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
              >
                <Flame className="w-6 h-6" />
                {isLogin ? "Kirish" : "Ro'yxatdan O'tish"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <hr className="flex-1 border-gray-300" />
                <span className="text-gray-500 text-sm">yoki</span>
                <hr className="flex-1 border-gray-300" />
              </div>

              {/* Google Sign In */}
              <Link
                href="http://localhost:5000/auth/google" // o'zingizning Google auth route'ingizga o'zgartiring
                className="flex items-center justify-center gap-3 w-full py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-full transition-all"
              >
                <Image src={googleIcon} alt="" width={24} height={24} />
                Google bilan davom etish
              </Link>

              {/* Toggle Login/Signup */}
              <p className="text-gray-600 text-center">
                {isLogin
                  ? "Akkauntingiz yo'qmi? "
                  : "Allaqachon akkauntingiz bormi? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-lime-600 font-bold hover:underline focus:outline-none"
                >
                  {isLogin ? "Ro'yxatdan o'ting" : "Kirish"}
                </button>
              </p>
            </form>
          </div>

          {/* Right Side: Hero Image (Desktop Only) */}
          <div className="hidden lg:block relative">
            <Image
              src={zoroImage}
              alt="Roronoa Zoro - AnimeFX maskoti"
              width={600}
              height={800}
              priority
              className="object-cover"
            />

            {/* Brand Badge */}
            <div className="absolute -bottom-6 -left-6 bg-lime-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl flex items-center gap-2">
              <Zap className="w-6 h-6" />
              AnimeFX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
