'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1B2714]">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFE600] rounded-lg flex items-center justify-center text-[#1B2714]">
              BE
            </div>
            BusinessEvolution.ai
          </Link>
          <div className="ml-4 text-xs px-2 py-1 bg-[#F5F5F5] rounded text-[#666666]">
            POWERED BY<br />ADVANCED AI
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/solutions" className="text-sm hover:text-[#1B2714]/80">Solutions</Link>
          <Link href="/pricing" className="text-sm hover:text-[#1B2714]/80">Pricing</Link>
          <Link href="/case-studies" className="text-sm hover:text-[#1B2714]/80">Case Studies</Link>
          <Link href="/contact" className="text-sm hover:text-[#1B2714]/80">Contact</Link>
          <Button variant="outline" size="sm" className="text-[#1B2714]" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm" className="bg-[#1B2714] text-white hover:bg-[#1B2714]/90" asChild>
            <Link href="/signup">Start Free Trial →</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 text-sm bg-[#1B2714] text-[#FFE600] mb-8 rounded-full fade-in">
              <span>transforming businesses through artificial intelligence</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight fade-in delay-1">
              Evolve Your Business XX<br />with AI-Powered Solutions
            </h1>
            <p className="text-xl text-[#1B2714]/70 mb-8 max-w-3xl mx-auto fade-in delay-2">
              Transform your business operations with our AI-driven platform. Automate workflows, 
              enhance decision-making, and boost productivity across your organization. Experience 
              the future of business evolution today.
            </p>
            <div className="flex items-center justify-center gap-4 fade-in delay-3">
              <Button size="lg" className="bg-[#1B2714] text-white hover:bg-[#1B2714]/90 rounded-md px-8">
                Start Free Trial →
              </Button>
              <Button variant="outline" size="lg" className="rounded-md px-8">
                Schedule Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-[#1B2714]/60 fade-in delay-3">
              14-day free trial • No credit card required
            </p>
            <div className="mt-12 flex items-center justify-center gap-8 fade-in delay-3">
              <span className="text-sm text-[#1B2714]/60">Trusted by leading companies:</span>
              <div className="flex items-center gap-8">
                <div className="h-8 opacity-70">Fortune 500</div>
                <div className="h-8 opacity-70">Tech Leaders</div>
                <div className="h-8 opacity-70">Global Enterprises</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-[#F8F8F8]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 scroll-animation">
              Transform Your Business with AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm scroll-animation scroll-delay-1">
                <div className="w-12 h-12 bg-[#FFE600] rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Workflows</h3>
                <p className="text-[#1B2714]/70">Streamline operations and eliminate repetitive tasks with AI-powered automation</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm scroll-animation scroll-delay-2">
                <div className="w-12 h-12 bg-[#FFE600] rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Analytics</h3>
                <p className="text-[#1B2714]/70">Make data-driven decisions with advanced AI analytics and insights</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm scroll-animation scroll-delay-3">
                <div className="w-12 h-12 bg-[#FFE600] rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Productivity Boost</h3>
                <p className="text-[#1B2714]/70">Increase team efficiency and output with AI-optimized processes</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}