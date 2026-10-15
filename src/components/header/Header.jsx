import React, { useState } from "react";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Gifts", path: "/gift" },
  ];

  const headerVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 z-50 w-full border-b border-[#451D20]/10 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <motion.h1
            whileHover={{ scale: 1.04 }}
            className="font-serif text-2xl font-bold tracking-wide text-[#451D20] sm:text-3xl"
          >
            Lumara<span className="text-[#9a6b55]">.</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 font-medium text-[#451D20] md:flex lg:gap-9">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08, duration: 0.35 }}
            >
              <Link
                to={link.path}
                className="group relative flex items-center gap-1 py-2 text-sm transition-colors duration-300 hover:text-[#9a6b55]"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#451D20] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 text-[#451D20] sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Search"
            className="transition hover:text-[#9a6b55]"
          >
            <Search size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Account"
            className="hidden transition hover:text-[#9a6b55] sm:block"
          >
            <UserRound size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Wishlist"
            className="hidden transition hover:text-[#9a6b55] sm:block"
          >
            <Heart size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Shopping bag"
            className="transition hover:text-[#9a6b55]"
          >
            <ShoppingBag size={20} />
          </motion.button>

          {/* Desktop Shop Button */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:block"
          >
            <Link
              to="/shop"
              className="flex items-center gap-2 rounded-lg bg-[#451D20] px-4 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#603337] lg:px-5"
            >
              Shop Now
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Animated Mobile Navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-[#451D20]/10 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.25 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-[#451D20] transition hover:bg-[#faf7f2] hover:pl-5 hover:text-[#9a6b55]"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              <li className="pt-2">
                <Link
                  to="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#451D20] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#603337]"
                >
                  Shop Collection
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;