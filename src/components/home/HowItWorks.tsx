"use client";

import { motion } from "framer-motion";
import { Upload, DollarSign, Package, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Design",
    description:
      "Create an account and upload your original artwork. We accept PNG, SVG, and high-res JPG. Our tools show you exactly how your design looks on every product.",
    color: "#E85D04",
    bg: "#FFF3E8",
  },
  {
    icon: DollarSign,
    number: "02",
    title: "Set Your Royalty",
    description:
      "Choose your base royalty on every sale. You keep between 15–30% of each order. No hidden fees, no monthly subscription — just pure creative income.",
    color: "#7209B7",
    bg: "#F3E8FF",
  },
  {
    icon: Package,
    number: "03",
    title: "We Print & Ship",
    description:
      "When a customer orders, we handle printing, quality checking, packing, and worldwide shipping. You just keep creating. It's that simple.",
    color: "#F48C06",
    bg: "#FFF8E8",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#7209B7]/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#E85D04]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-3">
            For Artists & Creators
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#3D2B1F] mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Turn Your Art Into Income
          </h2>
          <p className="text-[#8B6F5E] max-w-xl mx-auto leading-relaxed">
            Join thousands of artists already earning royalties from their designs.
            It{`'`}s free to start and takes less than 5 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#E85D04] via-[#7209B7] to-[#F48C06] opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-white rounded-3xl p-8 border border-[#F0DCC8] hover:shadow-lg transition-shadow"
            >
              {/* Step number */}
              <div
                className="text-8xl font-black absolute top-4 right-6 select-none"
                style={{
                  color: step.color,
                  opacity: 0.07,
                  fontFamily: "var(--font-playfair, serif)",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: step.bg }}
              >
                <step.icon size={26} style={{ color: step.color }} />
              </div>

              <h3
                className="text-xl font-bold text-[#3D2B1F] mb-3"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                {step.title}
              </h3>
              <p className="text-[#8B6F5E] text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/artists">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#3D2B1F] text-white font-bold text-lg rounded-2xl hover:bg-[#E85D04] transition-colors shadow-lg hover:shadow-xl active:scale-95 transition-all">
              Start Creating for Free <ArrowRight size={20} />
            </button>
          </Link>
          <p className="text-xs text-[#8B6F5E] mt-4">No credit card required · Free forever plan</p>
        </div>
      </div>
    </section>
  );
}
