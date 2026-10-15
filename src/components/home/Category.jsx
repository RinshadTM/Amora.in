
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import assets from "../../assets/asset";

const categories = [
  { name: "Chains", image: assets.chain },
  { name: "Rings", image: assets.ring },
  { name: "Watches", image: assets.watches },
  { name: "Bracelet", image: assets.Bracelet },
  { name: "Earrings", image: assets.Earrings },
  { name: "Accessories", image: assets.accessories },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Category = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#faf7f2] px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl text-center">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[#8b6560] sm:text-sm">
            CURATED ESSENTIALS
          </p>

          <h2 className="mt-4 font-serif text-3xl text-[#451D20] sm:mt-5 sm:text-4xl lg:text-5xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Thoughtfully crafted pieces for everyday refinement
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:mt-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-6 lg:gap-x-5"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              type="button"
              variants={shouldReduceMotion ? {} : itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="group flex w-full max-w-40 flex-col items-center gap-3 rounded-2xl p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#451D20] sm:gap-4"
              aria-label={`Explore ${category.name}`}
            >
              {/* Category Image */}
              <motion.div
                className="relative aspect-square w-full max-w-28 overflow-hidden rounded-full bg-[#efe4d7] shadow-md ring-1 ring-[#451D20]/10 transition-shadow duration-500 group-hover:shadow-xl sm:max-w-32 lg:max-w-36"
              >
                <motion.img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />

                {/* Subtle Image Overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 transition-colors duration-300 group-hover:bg-[#451D20]/5" />
              </motion.div>

              {/* Category Name */}
              <span className="text-sm font-medium capitalize text-[#451D20]/80 transition-colors duration-300 group-hover:text-[#8b6560] sm:text-base">
                {category.name}
              </span>

              {/* Animated Underline */}
              <span className="h-px w-0 bg-[#451D20] transition-all duration-300 group-hover:w-1/2" />
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Category;
