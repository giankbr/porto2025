'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import GiscusComments from './GiscusComments';

export default function ContactPage() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate contact sections
    gsap.fromTo(
      '.contact-section',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // Animate contact methods
    gsap.fromTo(
      '.contact-method',
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: '.contact-methods',
          start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      }
    );

    // Footer animation
    gsap.fromTo(
      '.footer-content',
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 contact-section">Get in Touch</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mb-16 contact-section">
          I'm always open to new opportunities and collaborations. Feel free to leave a comment below or reach out directly through my contact information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Giscus Comments Section */}
          <div className="md:col-span-2 contact-section">
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Leave a Comment</h2>
              <GiscusComments />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 contact-section">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 contact-methods">
                <div className="flex items-start gap-4 contact-method">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">EMAIL</h3>
                    <a href="mailto:gian@example.com" className="text-lg hover:text-purple-600 dark:hover:text-purple-500 transition-colors">
                      gian@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 contact-method">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                    <Phone className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">PHONE</h3>
                    <a href="tel:+6281234567890" className="text-lg hover:text-purple-600 dark:hover:text-purple-500 transition-colors">
                      +62 812 3456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 contact-method">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                    <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">LOCATION</h3>
                    <p className="text-lg">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {/* Social media links */}
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-zinc-700 dark:text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </Link>
                {/* Other social links remain the same */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer remains unchanged */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-white dark:bg-black mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 footer-content">
            <div>
              <div className="mb-6">
                <p className="text-2xl font-bold text-zinc-800 dark:text-white">Gian Akbar</p>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">Full-stack Web Developer</p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Gian Akbar. All rights reserved.</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/gear" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Gear
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/giankbr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/gianakbar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/gianakbr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="mailto:gian@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12 text-center">
            <p className="text-zinc-500 dark:text-zinc-500 text-sm">Crafted with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
