import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ArrowRight,
  Star,
  Gift as GiftIcon,
  PackageCheck,
} from "lucide-react";

const Gift = () => {
  const categories = [
    {
      title: "For Her",
      subtitle: "A little luxury, just for her",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "For Him",
      subtitle: "Timeless gifts for him",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Everyday Love",
      subtitle: "Small things, lasting memories",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80",
    },
  ];

  const gifts = [
    {
      name: "Golden Elegance Necklace",
      category: "NECKLACES",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Classic Gold Bracelet",
      category: "BRACELETS",
      price: "₹1,899",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Everyday Gold Hoops",
      category: "EARRINGS",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Timeless Statement Ring",
      category: "RINGS",
      price: "₹1,699",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const occasions = [
    { title: "Birthdays", icon: "🎂" },
    { title: "Anniversaries", icon: "💝" },
    { title: "Weddings", icon: "💍" },
    { title: "Just Because", icon: "🌷" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="overflow-hidden bg-white text-[#451D20]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fcf8f6] px-5 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-36 lg:px-16 lg:pt-40">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#ead8cf]/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#f0e1d7]/60 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center justify-center gap-2 text-xs tracking-[0.25em] text-[#a17b70] sm:text-sm"
          >
            <Sparkles size={16} />
            THE ART OF GIFTING
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl font-serif text-4xl font-light leading-tight sm:text-6xl lg:text-7xl"
          >
            Gifts That Speak
            <span className="mt-2 block italic">From the Heart</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#806b66] sm:text-base"
          >
            Celebrate life's beautiful moments with thoughtfully crafted
            jewellery made to be treasured forever.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/shop"
              className="group inline-flex items-center justify-center gap-3 bg-[#451D20] px-7 py-4 text-xs tracking-[0.15em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#633036] hover:shadow-xl"
            >
              EXPLORE GIFTS
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border border-[#451D20]/25 px-7 py-4 text-xs tracking-[0.15em] transition duration-300 hover:border-[#451D20] hover:bg-white"
            >
              VIEW COLLECTION
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-[#806b66] sm:gap-x-12"
          >
            <span className="flex items-center gap-2">
              <Heart size={16} />
              Made with love
            </span>
            <span className="flex items-center gap-2">
              <PackageCheck size={16} />
              Beautifully packaged
            </span>
            <span className="flex items-center gap-2">
              <GiftIcon size={16} />
              Perfect for every occasion
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="border-y border-[#451D20]/10 bg-white px-5 py-5 sm:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {[
            {
              title: "Thoughtful Gifting",
              text: "Every piece tells a story.",
            },
            {
              title: "Timeless Designs",
              text: "Made for moments that matter.",
            },
            {
              title: "A Beautiful Surprise",
              text: "Little luxuries, lasting memories.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-3 py-2 text-center"
            >
              <Sparkles
                size={18}
                strokeWidth={1.5}
                className="shrink-0 text-[#a17b70]"
              />
              <div className="text-left">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-1 text-xs text-gray-500">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Recipient */}
      <section className="bg-[#fcf8f6] px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center sm:mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-[#a17b70]">
              SOMETHING SPECIAL
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Gifts for every heart
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500">
              Find a thoughtful treasure for someone who means the world
              to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <Link
                  to="/shop"
                  className="group relative block h-[360px] overflow-hidden rounded-2xl bg-[#f1e5e1] sm:h-[420px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <p className="text-xs tracking-widest text-white/80">
                      THOUGHTFULLY SELECTED
                    </p>

                    <h3 className="mt-2 font-serif text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      {item.subtitle}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm">
                      Discover gifts
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Collection */}
      <section
        id="gift-collection"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#a17b70]">
              THE GIFT EDIT
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Little treasures, big feelings
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Pieces they will remember long after the moment.
            </p>
          </div>

          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            View all
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {gifts.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                to="/shop"
                className="relative block overflow-hidden rounded-xl bg-[#f8f2ef]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold tracking-wider sm:left-3 sm:top-3 sm:text-[10px]">
                  GIFT PICK
                </span>

                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#451D20] shadow-sm transition-all duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <ArrowRight size={17} />
                </span>
              </Link>

              <div className="pt-4">
                <p className="text-[9px] tracking-[0.18em] text-[#a17b70] sm:text-[10px]">
                  {item.category}
                </p>

                <h3 className="mt-2 font-serif text-sm sm:text-base">
                  {item.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{item.price}</p>

                  <div className="flex items-center gap-1 text-[10px] text-[#98744c]">
                    <Star size={12} fill="currentColor" />
                    <span>Gift pick</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 border border-[#451D20] px-7 py-4 text-xs tracking-[0.15em] transition duration-300 hover:bg-[#451D20] hover:text-white"
          >
            SHOP ALL JEWELLERY
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* Shop by Occasion */}
      <section className="bg-[#f8efed] px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-[#a17b70]">
              MAKE IT MEMORABLE
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Every occasion deserves a little sparkle
            </h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/shop"
                  className="group block h-full rounded-2xl border border-[#e7d4d0] bg-white/70 px-3 py-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#451D20] hover:bg-white hover:shadow-lg sm:px-5 sm:py-10"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f8efed] text-2xl transition-transform duration-300 group-hover:scale-110">
                    {occasion.icon}
                  </span>

                  <h3 className="mt-4 font-serif text-base sm:text-lg">
                    {occasion.title}
                  </h3>

                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-[#8b625e]">
                    Explore
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#451D20] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Sparkles
              className="mx-auto mb-5 text-[#e8c9a7]"
              size={30}
            />

            <p className="text-xs tracking-[0.25em] text-[#e8c9a7]">
              WRAPPED WITH LOVE
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl lg:text-6xl">
              Make their moment unforgettable.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
              The most beautiful gifts are the ones that say what words
              sometimes cannot.
            </p>

            <Link
              to="/shop"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#451D20] transition duration-300 hover:-translate-y-1 hover:bg-[#f8efed] hover:shadow-xl"
            >
              Find the perfect gift
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Gift;