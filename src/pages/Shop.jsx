
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ArrowUpRight,
  SlidersHorizontal,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import assets from "../assets/asset";

const products = [
  {
    id: 1,
    name: "Golden Elegance Ring",
    category: "Rings",
    price: 2499,
    oldPrice: 3299,
    image: assets.ring,
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Classic Gold Chain",
    category: "Necklaces",
    price: 4599,
    oldPrice: 5999,
    image: assets.chain,
    badge: "POPULAR",
  },
  {
    id: 3,
    name: "Timeless Gold Watch",
    category: "Watches",
    price: 3899,
    oldPrice: 4999,
    image: assets.watches,
    badge: "NEW",
  },
  {
    id: 4,
    name: "Golden Charm Bracelet",
    category: "Bracelets",
    price: 1999,
    oldPrice: 2599,
    image: assets.Bracelet,
    badge: "",
  },
  {
    id: 5,
    name: "Signature Gold Ring",
    category: "Rings",
    price: 2899,
    oldPrice: 3599,
    image: assets.ring,
    badge: "",
  },
  {
    id: 6,
    name: "Everyday Gold Necklace",
    category: "Necklaces",
    price: 3299,
    oldPrice: 4199,
    image: assets.chain,
    badge: "TRENDING",
  },
  {
    id: 7,
    name: "Minimal Gold Watch",
    category: "Watches",
    price: 4299,
    oldPrice: 5499,
    image: assets.watches,
    badge: "",
  },
  {
    id: 8,
    name: "Forever Bracelet",
    category: "Bracelets",
    price: 1799,
    oldPrice: 2299,
    image: assets.Bracelet,
    badge: "",
  },
];

const categories = [
  "All Jewellery",
  "Rings",
  "Necklaces",
  "Bracelets",
  "Watches",
];

const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN")}`;

const Shop = () => {
  const [activeCategory, setActiveCategory] =
    useState("All Jewellery");
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Jewellery" ||
        product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [activeCategory, searchTerm, sortBy]);

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const addToCart = (product) => {
    setCart((previous) => [...previous, product]);
  };

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#451D20]">

      {/* Hero Banner */}
      <section className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-12 lg:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[24px] bg-[#efe4d7] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12"
        >
          <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full border border-[#451D20]/10 sm:h-72 sm:w-72" />
          <div className="pointer-events-none absolute -right-4 -top-12 h-40 w-40 rounded-full border border-[#451D20]/10 sm:h-56 sm:w-56" />

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-3 flex items-center gap-2 text-xs tracking-[0.25em] uppercase"
            >
              <Sparkles size={15} />
              <span>The Art of Elegance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl"
            >
              Jewellery that
              <br />
              <span className="italic">tells your story.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-3 max-w-lg text-xs leading-6 text-[#451D20]/70 sm:text-sm sm:leading-7"
            >
              Discover timeless pieces crafted to celebrate
              your individuality, beauty, and unforgettable moments.
            </motion.p>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-flex items-center gap-2.5 bg-[#451D20] px-5 py-2.5 text-xs sm:text-sm text-white transition hover:bg-[#603337]"
            >
              Discover the collection
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[35%] lg:block">
            <div className="absolute -bottom-20 right-10 h-72 w-72 rounded-full border border-[#451D20]/10" />
            <div className="absolute -bottom-10 right-20 h-56 w-56 rounded-full border border-[#451D20]/10" />
          </div>
        </motion.div>
      </section>

      {/* Shop Heading */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-[#8b6560] uppercase">
              Curated for you
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Explore our collection
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Find the perfect piece for every moment.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ShoppingBag size={17} />
            <span>{cart.length} items in bag</span>
          </div>
        </motion.div>

        {/* Search and Sort */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jewellery..."
              className="w-full rounded-full border border-[#451D20]/10 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#451D20]/50"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-full border border-[#451D20]/15 px-4 py-3 text-sm transition hover:bg-[#efe4d7]"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="min-w-0 flex-1 rounded-full border border-[#451D20]/15 bg-transparent px-3 py-3 text-sm outline-none sm:flex-none"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <AnimatePresence>
          {(showFilters || true) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-xs transition duration-300 sm:text-sm ${
                      activeCategory === category
                        ? "bg-[#451D20] text-white"
                        : "border border-[#451D20]/15 bg-white/50 hover:bg-[#efe4d7]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} products
          </p>

          {wishlist.length > 0 && (
            <p className="flex items-center gap-1 text-sm text-[#8b343b]">
              <Heart size={15} fill="currentColor" />
              {wishlist.length} saved
            </p>
          )}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.article
                layout
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  layout: { duration: 0.3 },
                }}
                className="group min-w-0"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#efe8df] sm:rounded-3xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full object-cover"
                  />

                  {product.badge && (
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1.5 text-[9px] tracking-wider text-[#451D20] sm:left-3 sm:top-3 sm:text-[10px]">
                      {product.badge}
                    </span>
                  )}

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={
                      wishlist.includes(product.id)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                    className={`absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition sm:right-3 sm:top-3 ${
                      wishlist.includes(product.id)
                        ? "bg-[#451D20] text-white"
                        : "bg-white/90 text-[#451D20] hover:bg-white"
                    }`}
                  >
                    <Heart
                      size={17}
                      fill={
                        wishlist.includes(product.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>

                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    onClick={() => addToCart(product)}
                    className="absolute bottom-3 left-3 right-3 hidden items-center justify-center gap-2 bg-[#451D20] py-3 text-xs text-white transition hover:bg-[#603337] sm:flex"
                  >
                    <ShoppingBag size={15} />
                    Add to bag
                  </motion.button>
                </div>

                {/* Product Details */}
                <div className="pt-4">
                  <p className="mb-1 text-[10px] tracking-wider text-gray-400 uppercase sm:text-xs">
                    {product.category}
                  </p>

                  <h3 className="line-clamp-2 text-sm font-medium sm:text-base">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-sm font-semibold sm:text-base">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 flex w-full items-center justify-center gap-2 border border-[#451D20]/20 py-2.5 text-xs transition hover:bg-[#451D20] hover:text-white sm:hidden"
                  >
                    <ShoppingBag size={14} />
                    Add to bag
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <Search size={32} className="mx-auto mb-4 text-gray-400" />
            <h3 className="font-serif text-2xl">No jewellery found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Jewellery");
              }}
              className="mt-5 bg-[#451D20] px-5 py-3 text-sm text-white"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-[#451D20] px-6 py-10 text-center text-white sm:mt-24 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-12 -top-24 h-56 w-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-12 h-64 w-64 rounded-full border border-white/10" />

          <Sparkles size={24} className="mx-auto mb-4 text-[#e5c6a2]" />

          <h2 className="relative font-serif text-3xl sm:text-4xl">
            Made for your special moments
          </h2>

          <p className="relative mx-auto mt-3 max-w-lg text-sm leading-7 text-white/70">
            Find a little something that makes every moment
            feel extraordinary.
          </p>

          <a
            href="#products"
            className="relative mt-6 inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm transition hover:bg-white hover:text-[#451D20]"
          >
            Shop your favourites
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Shop;
