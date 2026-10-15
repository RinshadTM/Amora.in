import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    e.target.reset();
  };

  return (
    <section className="bg-[#fcf8f6] px-4 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-[#8b6b60]">
            Get in Touch
          </p>

          <h1 className="font-serif text-3xl text-[#451D20] sm:text-4xl md:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Have a question about our jewellery or need help with an order?
            We're here to help you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-8 overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-[#451D20] p-7 text-white sm:p-10">
            <h2 className="font-serif text-2xl sm:text-3xl">
              Contact Information
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Feel free to reach out to us. We'll be happy to assist you.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-1 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold">Phone</h3>
                  <p className="mt-1 text-sm text-white/70">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-1 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold">Email</h3>
                  <p className="mt-1 break-all text-sm text-white/70">
                    hello@lumara.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold">Our Location</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-5">
              <p className="text-sm text-white/70">
                Your perfect piece of jewellery is just a message away.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-7 sm:p-10">
            <h2 className="font-serif text-2xl text-[#451D20]">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#451D20]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#451D20]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#451D20]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#451D20]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#451D20] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#603036]"
              >
                Send Message
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
