import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import assets from "../../assets/asset";

const Hero = () => {
  return (
    <section className="min-h-screen bg-red-100 px-4 py-6 sm:px-6 lg:px-12 lg:py-10">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl overflow-hidden rounded-2xl bg-[#faf7f2] md:grid-cols-2">

        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          <div className="mb-6 flex items-center gap-2 text-sm tracking-[0.2em] text-primary uppercase">
            <Sparkles size={17} />
            <span>Timeless Elegance</span>
          </div>

          <h1 className="text-4xl font-serif leading-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            Made to be
            <br />
            <span className="italic">cherished.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Timeless fine jewellery, meticulously handcrafted
            for life's most unforgettable and luminous moments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group flex items-center gap-3 bg-primary px-6 py-3.5 text-sm text-white transition duration-300 hover:bg-[#603337] sm:px-8">
              Explore Collection
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <a
              href="#about"
              className="border-b border-primary pb-1 text-sm text-primary transition hover:opacity-70"
            >
              Our Story
            </a>
          </div>

          <div className="mt-12 border-t border-primary/15 pt-6">
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Crafted with love · Designed to last
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-80 overflow-hidden sm:min-h-112.5 md:min-h-full">
          <img
            src={assets.bgimage}
            alt="Elegant gold jewellery collection"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

          {/* Image Caption */}
          <div className="absolute bottom-6 left-6 text-white sm:bottom-10 sm:left-10">
            <p className="text-xs tracking-[0.25em] uppercase">
              The Signature Collection
            </p>
            <p className="mt-2 font-serif text-2xl sm:text-3xl">
              Beauty in every detail
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;