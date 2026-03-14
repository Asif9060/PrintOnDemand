"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, DollarSign, Package, Heart, Globe, Palette, ChevronDown } from "lucide-react";
import type { Metadata } from "next";

const steps = [
  {
    icon: Palette,
    step: "01",
    title: "Create Your Account",
    desc: "Sign up for free as an artist. Add your name, bio, style tags, and link your social profiles.",
    color: "#E85D04",
  },
  {
    icon: Upload,
    step: "02",
    title: "Upload Your Design",
    desc: "Upload high-resolution art (PNG, SVG, etc.). Our live mockup tool shows your design on 100+ products instantly.",
    color: "#7209B7",
  },
  {
    icon: DollarSign,
    step: "03",
    title: "Set Your Royalty",
    desc: "Choose your base profit margin on each product type. We handle the base costs — you earn on top of that.",
    color: "#F48C06",
  },
  {
    icon: Globe,
    step: "04",
    title: "Your Shop Goes Live",
    desc: "Your designs are instantly available to buyers worldwide. Share your artist page link on social media.",
    color: "#06A77D",
  },
  {
    icon: Package,
    step: "05",
    title: "We Print & Ship",
    desc: "When an order comes in, our print partners handle everything — printing, quality checks, packaging, shipping.",
    color: "#E85D04",
  },
  {
    icon: Heart,
    step: "06",
    title: "You Earn Royalties",
    desc: "Royalties hit your account monthly. No limits, no minimums. The more you upload, the more you can earn.",
    color: "#7209B7",
  },
];

const faqs = [
  {
    q: "Is it free to start selling on ArtWear Co.?",
    a: "Yes! Creating an account, uploading designs, and listing products is completely free. We only earn a cut when you make a sale — no monthly fees, no hidden costs.",
  },
  {
    q: "What products can I sell?",
    a: "We offer 100+ print-on-demand products including T-shirts, hoodies, long sleeves, tank tops, mugs, phone cases, stickers, art prints, tote bags, posters, and more. New product types are added regularly.",
  },
  {
    q: "How much will I earn per sale?",
    a: "You set your own royalty on top of our base production cost. Most artists earn between 15–35% of the product sale price. For example, if a T-shirt sells for $32 and your royalty is 25%, you earn $8 from that sale.",
  },
  {
    q: "What file formats do you accept for designs?",
    a: "We accept PNG (preferred) with transparent backgrounds at 150+ DPI, SVG vector files, and high-resolution JPG/TIFF. Our upload tool will flag if the resolution is too low for print quality.",
  },
  {
    q: "Do I retain copyright to my designs?",
    a: "Absolutely. You own your art. By uploading to ArtWear Co., you grant us a license to reproduce it on products for sale. You can remove your designs at any time.",
  },
  {
    q: "How and when do I get paid?",
    a: "Royalties are paid monthly via PayPal or bank transfer. The minimum payout threshold is $20. Payments are processed on the 15th of each month for the previous month's sales.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Hero */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FFF3E8 0%, #FFF8F0 60%, #F3E8FF 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#3D2B1F 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <h1
            className="text-5xl md:text-6xl font-black text-[#3D2B1F] leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Art Should{" "}
            <span className="text-gradient-warm">Live</span>
            <br />
            Beyond the Studio
          </h1>
          <p className="text-xl text-[#8B6F5E] leading-relaxed max-w-2xl mx-auto">
            ArtWear Co. connects independent artists with people who love original art. We make it
            effortless for creators to earn from their work — and for fans to wear it.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#3D2B1F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Independent Artists" },
              { value: "50,000+", label: "Unique Designs" },
              { value: "100+", label: "Product Types" },
              { value: "140+", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl font-black text-[#F48C06] mb-1"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#C4A882]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* How it works */}
        <section>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-3">
              For Artists
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              How It Works
            </h2>
            <div className="brush-stroke w-32 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-white rounded-3xl p-8 border border-[#F0DCC8] hover:shadow-lg transition-shadow"
              >
                <div
                  className="text-7xl font-black absolute top-4 right-5 select-none opacity-[0.06]"
                  style={{ color: step.color, fontFamily: "var(--font-playfair, serif)" }}
                >
                  {step.step}
                </div>
                <div
                  className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon size={24} style={{ color: step.color }} />
                </div>
                <h3
                  className="text-xl font-bold text-[#3D2B1F] mb-3"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#8B6F5E] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#FFF3E8] rounded-3xl p-12 border border-[#F0DCC8]">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                emoji: "🎨",
                title: "Artists First",
                desc: "Every decision we make starts with how it affects our artist community. You are the heart of ArtWear.",
              },
              {
                emoji: "🌍",
                title: "Global Reach",
                desc: "We print and ship worldwide, giving your art access to customers in 140+ countries with no effort on your part.",
              },
              {
                emoji: "♻️",
                title: "Sustainable Printing",
                desc: "We use water-based inks and partner with printers who prioritize sustainable practices and waste reduction.",
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="space-y-4">
                <div className="text-5xl">{emoji}</div>
                <h3
                  className="text-xl font-bold text-[#3D2B1F]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {title}
                </h3>
                <p className="text-[#8B6F5E] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2
              className="text-4xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#F0DCC8] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#FFF3E8] transition-colors"
                >
                  <span className="font-semibold text-[#3D2B1F] text-sm md:text-base">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-[#8B6F5E]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[#8B6F5E] text-sm leading-relaxed border-t border-[#F0DCC8] pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-8">
          <h2
            className="text-4xl md:text-5xl font-black text-[#3D2B1F] mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Ready to Start?
          </h2>
          <p className="text-[#8B6F5E] mb-8 max-w-lg mx-auto">
            Join thousands of artists and start sharing your designs with the world. It only takes
            a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#E85D04] text-white font-bold text-lg rounded-2xl hover:bg-[#C94D02] transition-colors shadow-lg">
              Create Artist Account
            </button>
            <a
              href="/shop"
              className="px-8 py-4 bg-white text-[#3D2B1F] font-bold text-lg rounded-2xl hover:bg-[#FFF3E8] transition-colors border-2 border-[#F0DCC8]"
            >
              Browse Designs
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
