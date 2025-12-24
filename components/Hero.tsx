import Image from "next/image";
import rock_lee from "@/images/rock.png";
import { Flame, Zap, Star, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-lime-600 opacity-10 blur-3xl"></div>

      <div className="absolute top-20 left-10 animate-pulse">
        <Zap className="w-12 h-12 text-lime-600" />
      </div>
      <div className="absolute bottom-32 right-20">
        <Flame className="w-16 h-16 text-lime-600" />
      </div>
      <div className="absolute top-40 right-32">
        <Sparkles className="w-10 h-10 text-lime-600" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse">
        <Star className="w-10 h-10 text-lime-600" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-lime-600 tracking-tight">
            Anime <span className="text-lime-700">FX</span>
            <br />
            <span className="text-4xl md:text-6xl text-lime-600">
              {`Animelar To'plami`}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl font-medium">
            AnimeFX orqali o'zbek tilidagi
            <span className="text-lime-600 font-bold"> Sifatli </span>animelarni
            <span className="text-lime-600 font-bold"> Birinchilardan </span>
            bo'lib ko'rishingiz mumkun
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-lime-600 hover:bg-lime-700 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 flex items-center gap-3 shadow-xl">
              <Flame className="w-6 h-6" />
              {`Ro'yxatdan O'tish`}
            </button>
            <button className="px-8 py-4 border-2 border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white font-bold text-lg rounded-full transition-all">
              {`Obuna Olish`}
            </button>
          </div>

          <div className="flex gap-8 justify-center lg:justify-start pt-8">
            <div className="text-center">
              <h3 className="text-4xl font-black text-lime-600">1k</h3>
              <p className="text-gray-600">Animelar</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-lime-600">3k</h3>
              <p className="text-gray-600">Foydalanuvchilar</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-black text-lime-600">12.000</h3>
              <p className="text-gray-600">Obuna Narxi</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="">
            <Image
              src={rock_lee}
              alt="Rock Lee - The Green Beast of Konoha"
              width={600}
              height={800}
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-lime-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl flex items-center gap-2">
            <Zap className="w-6 h-6" />
            AnimeFx
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
