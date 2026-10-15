import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import assets from "../../assets/asset";

const Hero = () => {
  // Text animation
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <section className="bg-red-50 px-4 py-4 sm:px-6 lg:px-12 lg:py-6">
      <div className="mx-auto grid min-h-[60vh] max-w-7xl overflow-hidden rounded-2xl bg-[#faf7f2] md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12"
        >
          <motion.div
            variants={textVariants}
            className="mb-4 flex items-center gap-2 text-sm tracking-[0.2em] text-primary uppercase"
          >
            <Sparkles size={17} />
            <span>Timeless Elegance</span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-3xl font-serif leading-tight text-primary sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Made to be
            <br />
            <span className="italic">cherished.</span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mt-4 max-w-md text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
          >
            Timeless fine jewellery, meticulously handcrafted
            for life's most unforgettable and luminous moments.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-3 bg-primary px-6 py-3 text-sm text-white transition duration-300 hover:bg-[#603337] sm:px-8"
            >
              Explore Collection
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>

            <a
              href="#about"
              className="border-b border-primary pb-1 text-sm text-primary transition hover:opacity-70"
            >
              Our Story
            </a>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="mt-8 border-t border-primary/15 pt-4"
          >
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              Crafted with love · Designed to last
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative min-h-64 overflow-hidden sm:min-h-80 md:min-h-full"
        >
          <motion.img
            src={assets.bgimage}
            alt="Elegant gold jewellery collection"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

          {/* Image Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute bottom-5 left-5 text-white sm:bottom-8 sm:left-8"
          >
            <p className="text-xs tracking-[0.25em] uppercase">
              The Signature Collection
            </p>
            <p className="mt-2 font-serif text-xl sm:text-2xl">
              Beauty in every detail
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;