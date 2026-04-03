"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FreelancePortfolio({
  primaryColor = "#3b82f6",
  animationSpeed = 0.8,
  showCursorEffects = true
}) {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [cursorExpanded, setCursorExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    if (showCursorEffects) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (showCursorEffects) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [showCursorEffects]);

  const handleMouseEnter = () => {
    setCursorExpanded(true);
  };

  const handleMouseLeave = () => {
    setCursorExpanded(false);
  };

  return (
    <div className="relative bg-[#0d0d12] text-white font-sans overflow-x-hidden">
      {/* Custom cursor effect */}
      {showCursorEffects && (
        <motion.div
          className="fixed w-4 h-4 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-screen"
          animate={{
            x: cursorPosition.x - 8,
            y: cursorPosition.y - 8,
            scale: cursorExpanded ? 2.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
          style={{
            boxShadow: `0 0 20px ${primaryColor}`,
          }}
        />
      )}

      {/* Background gradient */}
      <div
        className="fixed inset-0 w-full h-full opacity-30 -z-10"
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)`,
          backgroundSize: "400% 400%",
          animation: "gradientAnimation 20s ease infinite",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 w-full h-full -z-5">
        <div
          className="absolute w-64 h-64 rounded-full border border-blue-500/10"
          style={{
            top: "10%",
            left: "5%",
            transform: `translateY(${scrollY * 0.05}px)`,
            opacity: 0.1,
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full border border-purple-500/10"
          style={{
            top: "30%",
            right: "10%",
            transform: `translateY(${scrollY * -0.03}px)`,
            opacity: 0.1,
          }}
        />
        <div
          className="absolute w-48 h-48 border border-blue-500/10"
          style={{
            bottom: "15%",
            left: "15%",
            transform: `translateY(${scrollY * 0.02}px) rotate(45deg)`,
            opacity: 0.1,
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Text Content - Left Side */}
            <div className="order-2 lg:order-1">
              <motion.span
                className="inline-block text-xs uppercase tracking-[2px] text-blue-500 font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationSpeed, delay: 0.2 }}
                style={{ textShadow: `0 0 10px ${primaryColor}` }}
              >
                Web Developer & Designer
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationSpeed, delay: 0.4 }}
              >
                I Build Websites That <span className="relative inline-block">
                  <span
                    className="relative z-10"
                    style={{
                      color: primaryColor,
                      textShadow: `0 0 10px ${primaryColor}`,
                      animation: "pulse 2s infinite"
                    }}
                  >
                    Drive
                  </span>
                </span> Real Business Results
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-[640px] mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationSpeed, delay: 0.6 }}
              >
              From landing pages and SaaS platforms to e-commerce stores — I design and develop web experiences that convert visitors into customers.
              </motion.p>

              <motion.p
                className="text-sm text-gray-400 max-w-[640px] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationSpeed, delay: 0.7 }}
              >
              Based in Kazakhstan & China • Open to collaboration worldwide
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationSpeed, delay: 0.8 }}
              >
                <motion.a
                  href="mailto:mansurperzadayev@gmail.com"
                  className="px-8 py-4 rounded-lg text-white font-medium transition-all inline-block text-center"
                  style={{
                    background: `linear-gradient(to right, ${primaryColor}, #2563eb)`,
                    boxShadow: `0 4px 16px rgba(59, 130, 246, 0.3)`
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 8px 32px rgba(59, 130, 246, 0.4)`
                  }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Get in Touch
                </motion.a>

                <motion.a
                  href="#portfolio"
                  className="px-8 py-4 rounded-lg text-white font-medium border-2 border-blue-500 bg-transparent transition-all inline-block text-center"
                  whileHover={{
                    borderColor: primaryColor,
                    boxShadow: `0 0 16px rgba(59, 130, 246, 0.3)`
                  }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  View Portfolio
                </motion.a>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: animationSpeed, delay: 1 }}
              >
                <span className="text-sm text-gray-400">Working with startups, brands & businesses worldwide</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Photo - Right Side */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: animationSpeed, delay: 0.3 }}
            >
              <div className="relative w-80 h-96 md:w-96 md:h-[520px] lg:w-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: `0 25px 50px rgba(0, 0, 0, 0.6), 0 0 60px rgba(59, 130, 246, 0.25)`,
                }}
              >
              <img
                src="/hero.jpg"
                alt="Mansur - Web Developer & Designer"
                className="w-full h-full object-cover"
              />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${primaryColor}15 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-xs uppercase tracking-[3px] text-blue-500 font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed }}
            >
              What I Deliver
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.2 }}
            >
              Services Built for Conversion
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚀",
                title: "High-Converting Landing Pages",
                description: "Purpose-built pages that capture leads and drive sales. Every element is designed to guide visitors toward taking action.",
                benefits: [
                  "Clear call-to-actions",
                  "Fast loading speed",
                  "Mobile-optimized",
                  "A/B test ready"
                ]
              },
              {
                icon: "🎨",
                title: "User Experience Design",
                description: "Intuitive interfaces that keep users engaged. I focus on reducing friction and creating seamless journeys from landing to conversion.",
                benefits: [
                  "Research-driven layouts",
                  "Conversion-focused flows",
                  "Modern aesthetics",
                  "Accessibility standards"
                ]
              },
              {
                icon: "🛒",
                title: "E-commerce Solutions",
                description: "Online stores designed to sell. Optimized checkout flows, product showcases, and trust signals that turn browsers into buyers.",
                benefits: [
                  "Streamlined checkout",
                  "Product page optimization",
                  "Trust badge integration",
                  "Payment flexibility"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-12 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -8,
                  borderColor: primaryColor,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  boxShadow: `0 8px 32px rgba(0,0,0,0.2), 0 0 16px ${primaryColor}30`
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center text-3xl mb-6 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}10)`,
                    boxShadow: `0 0 20px ${primaryColor}30`
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-blue-500">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section
        ref={featuresRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-xs uppercase tracking-[3px] text-blue-500 font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed }}
            >
              Why Work With Me
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.2 }}
            >
              Business-First Approach
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Execution",
                description: "I move quickly without cutting corners. Clear communication and consistent progress every step of the way."
              },
              {
                icon: "✨",
                title: "Modern, Premium Design",
                description: "I study top brands and apply their design principles. The result looks and feels premium."
              },
              {
                icon: "📱",
                title: "Mobile-Optimized by Default",
                description: "Over 70% of users browse on mobile. Every design starts mobile-first, then scales up beautifully."
              },
              {
                icon: "🔍",
                title: "Built for Google",
                description: "Clean code, fast load times, and proper structure. Your site will rank and perform from day one."
              },
              {
                icon: "💎",
                title: "End-to-End Execution",
                description: "From concept to deployment — I handle design, development, and optimization so you get a complete solution."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}80)`,
                    boxShadow: `0 0 20px ${primaryColor}40`
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xl">{feature.icon}</span>
                </motion.div>

                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <motion.span
                className="inline-block text-xs uppercase tracking-[3px] text-blue-500 font-medium mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed }}
              >
                About Me
              </motion.span>

              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed, delay: 0.2 }}
              >
                What I Bring to the Table
              </motion.h2>

              <motion.div
                className="space-y-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed, delay: 0.3 }}
              >
                <p>I'm Mansur — a web developer and designer with a strong focus on building websites that actually work for businesses. I combine clean frontend development with conversion-driven design.</p>

                <p>My approach is simple: design should drive revenue, not just look pretty. I've seen too many websites that look great but fail to generate real results.</p>

                <p>Here's what I can do for your business:</p>
                <ul className="space-y-2 pl-5">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Design & develop websites that convert visitors into customers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Build landing pages, SaaS platforms, and e-commerce stores
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    Deliver fast, mobile-optimized, SEO-ready products
                  </li>
                </ul>

                <p>Every project I take on is built with one goal: help your business grow. Whether it's more leads, more sales, or stronger brand presence — I focus on measurable outcomes.</p>
              </motion.div>

              <motion.div
                className="mt-8 space-y-2 text-sm text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed, delay: 0.35 }}
              >
                <p>→ Discovery & goals alignment</p>
                <p>→ Design & conversion structure</p>
                <p>→ Development & optimization</p>
                <p>→ Launch & performance check</p>
              </motion.div>

              <motion.a
                href="mailto:mansurperzadayev@gmail.com"
                className="mt-8 px-8 py-4 rounded-lg text-white font-medium transition-all inline-block text-center"
                style={{
                  background: `linear-gradient(to right, ${primaryColor}, #2563eb)`,
                  boxShadow: `0 4px 16px rgba(59, 130, 246, 0.3)`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 8px 32px rgba(59, 130, 246, 0.4)`
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Let's Talk
              </motion.a>
            </div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 gap-6">
                {[
                  { label: "Focus", value: "Web Development" },
                  { label: "Strength", value: "Conversion Design" },
                  { label: "Available For", value: "Full-time & Projects" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center"
                    whileHover={{
                      y: -4,
                      borderColor: primaryColor,
                      boxShadow: `0 8px 32px rgba(0,0,0,0.2), 0 0 16px ${primaryColor}30`
                    }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: primaryColor }}>
                      {stat.value}
                    </h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={portfolioRef}
        id="portfolio"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-xs uppercase tracking-[3px] text-blue-500 font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed }}
            >
              Selected Work
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.2 }}
            >
              Projects That Deliver Results
            </motion.h2>

            <motion.p
              className="text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.3 }}
            >
              Real businesses. Real impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                tag: "Concept — SaaS Landing Page",
                title: "SaaS Startup Landing Page",
                goal: "Increase trial signups by 40%",
                description: "Designed a conversion-focused landing page for a project management SaaS. Clear value proposition, benefit-driven copy, and strategic CTA placement resulted in improved signup rates.",
                metric: "Improved signup clarity and conversion flow"
              },
              {
                image: "https://images.unsplash.com/photo-1629118177510-8f61a5eb575e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                tag: "Concept — E-commerce UX",
                title: "High-Converting E-commerce Store",
                goal: "Reduce cart abandonment rate",
                description: "Redesigned checkout flow and product pages for an online fashion store. Simplified navigation, added trust signals, and optimized for mobile shoppers.",
                metric: "Reduced checkout friction and drop-offs"
              },
              {
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                tag: "Concept — Agency Website",
                title: "Digital Agency Website",
                goal: "Attract premium clients",
                description: "Created a premium, modern website for a digital marketing agency. Focus on showcasing results, building credibility, and positioning them as industry leaders.",
                metric: "Better lead quality and inbound engagement"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: animationSpeed, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -12,
                  borderColor: primaryColor,
                  boxShadow: `0 24px 64px rgba(0,0,0,0.4), 0 0 16px ${primaryColor}30`
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#16161f] z-10 flex items-center px-3 gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>

                  <motion.div
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  </motion.div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                      style={{
                        backgroundColor: `${primaryColor}20`,
                        color: primaryColor
                      }}
                    >
                      {project.tag}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p
                      className="text-sm italic mb-4"
                      style={{ color: primaryColor }}
                    >
                      {project.goal}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div
                      className="text-sm font-medium mb-4"
                      style={{ color: primaryColor }}
                    >
                      {project.metric}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Project</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-16 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(13,13,18,0.8) 0%, rgba(26,26,36,0.8) 100%)`,
            boxShadow: `0 16px 80px rgba(0,0,0,0.4), 0 0 32px ${primaryColor}20`
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: animationSpeed }}
        >
          {/* Background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20"
            style={{
              background: `radial-gradient(circle, ${primaryColor} 0%, rgba(13,13,18,0) 70%)`,
            }}
          />

          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.2 }}
            >
              Let's Build Something <span style={{ color: primaryColor, textShadow: `0 0 10px ${primaryColor}` }}>Together</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.3 }}
            >
              Whether you need a website, a landing page, or an e-commerce platform — I'm ready to make it happen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.a
                href="mailto:mansurperzadayev@gmail.com"
                className="px-12 py-5 text-lg rounded-lg text-white font-medium transition-all inline-block text-center"
                style={{
                  background: `linear-gradient(to right, ${primaryColor}, #2563eb)`,
                  boxShadow: `0 4px 16px rgba(59, 130, 246, 0.3)`
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 8px 32px rgba(59, 130, 246, 0.4)`
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    `0 4px 16px rgba(59, 130, 246, 0.3)`,
                    `0 8px 32px rgba(59, 130, 246, 0.4)`,
                    `0 4px 16px rgba(59, 130, 246, 0.3)`
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: animationSpeed, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: primaryColor }}>✓</span>
                Direct communication
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: primaryColor }}>✓</span>
                Fast turnaround
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: primaryColor }}>✓</span>
                Available worldwide
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Mansur</h3>
              <p className="text-gray-400 mb-4">Web Developer & Designer</p>
              <p className="text-sm text-gray-500">
                Open to full-time roles, project collaborations, and partnerships. Let's talk about how I can help your business grow.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[3px] text-blue-500 font-medium mb-4">Get In Touch</h4>
              <a
                href="mailto:mansurperzadayev@gmail.com"
                className="text-xl font-bold hover:text-blue-500 transition-colors inline-block mb-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                mansurperzadayev@gmail.com
              </a>

              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="text-gray-500">KZ</span>{" "}
                  <a href="tel:+77019998280" className="hover:text-blue-500 transition-colors">+7 701 999 8280</a>
                </p>
                <p>
                  <span className="text-gray-500">CN</span>{" "}
                  <a href="tel:+8618210926863" className="hover:text-blue-500 transition-colors">+86 182 1092 6863</a>
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm">
                <a
                  href="https://www.instagram.com/mperzadayev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 pt-8 border-t border-white/5">
            © 2025 Mansur · All rights reserved
          </div>
        </div>
      </footer>

      {/* Global styles */}
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
