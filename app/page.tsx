'use client';

import { GridBackground } from '@/components/grid-background';
import SpotifyTracks from '@/components/spotify-tracks';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Calendar, Download, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  // Refs for animation targets
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const spotifyRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo('.hero-heading', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo('.hero-subheading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo('.hero-buttons > *', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }, '-=0.4');

    // About section animations
    gsap.fromTo(
      '.about-content',
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
      }
    );

    // Spotify section animation
    gsap.fromTo(
      '.spotify-section',
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.spotify-section',
          start: 'top 75%',
        },
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      }
    );

    // Project card animations
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 70%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
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

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-20 md:py-32 min-h-[400px]" ref={heroRef}>
          <GridBackground />
          <div className="relative z-10">
            {/* Available button positioned above heading */}
            <div className="mb-6 hero-buttons">
              <Button className="font-outfit bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-500 dark:hover:bg-emerald-500/20 rounded-full px-4 py-2 text-base flex items-center gap-2 group border border-emerald-600/20 dark:border-emerald-500/20">
                <span className="relative">
                  Available for Projects
                  <span className="absolute -right-3 -top-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                </span>
                <Calendar className="w-4 h-4" />
              </Button>
            </div>

            {/* Main heading */}
            <h1 className="font-outfit text-5xl md:text-7xl font-bold tracking-tight mb-6 hero-heading">
              Building digital <span className="text-purple-500">experiences</span> that make a difference
            </h1>
            <p className="text-xl md:text-2xl font-outfit text-zinc-600 dark:text-zinc-400 max-w-3xl mb-10 hero-subheading">Full-stack Web Developer at Morfotech</p>

            {/* Original buttons without the availability button */}
            <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
              <Button className="font-outfit bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-6 text-lg flex items-center gap-2 group">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="font-outfit rounded-full px-6 py-6 text-lg border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
          {/* Add gradient effect */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 h-96 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full opacity-50 z-0"></div>
        </div>

        {/* About Section */}
        <div className="py-16 border-t border-zinc-200 dark:border-zinc-800 about-section" ref={aboutRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="about-content">
              <h2 className="text-3xl font-bold mb-4">Gian Akbar</h2>
              <div className="flex items-center gap-4 mb-6">
                <Link href="https://github.com" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 about-content">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                I'm Gian, Web developer, tech enthusiast, cat lover, and a coffee lover. I'm passionate about web development. I am excited to bring my knowledge and experience to a dynamic and
                fast-paced work environment, where I can continue to grow and learn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="about-content">
                  <h3 className="text-zinc-500 dark:text-zinc-500 text-sm mb-2">EXPERTISE</h3>
                  <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                    <li>Responsive Design</li>
                    <li>API Integration</li>
                  </ul>
                </div>
                <div className="about-content">
                  <h3 className="text-zinc-500 dark:text-zinc-500 text-sm mb-2">TECHNOLOGIES</h3>
                  <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                    <li>React / Next.js</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spotify Section */}
        <div className="py-16 border-t border-zinc-200 dark:border-zinc-800 spotify-section" ref={spotifyRef}>
          <h2 className="text-3xl font-bold mb-10">My Music</h2>
          <SpotifyTracks />
        </div>

        {/* Projects Section */}
        <div className="py-16 border-t border-zinc-200 dark:border-zinc-800 projects-section" ref={projectsRef}>
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white flex items-center gap-2 group">
              <span>View All</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group project-card">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-700">
                  <span className="text-lg">Project Image</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-purple-500 transition-colors">Project Title</h3>
              <p className="text-zinc-600 dark:text-zinc-400">A short description of the project and technologies used.</p>
            </div>

            {/* Project Card 2 */}
            <div className="group project-card">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-700">
                  <span className="text-lg">Project Image</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-purple-500 transition-colors">Project Title</h3>
              <p className="text-zinc-600 dark:text-zinc-400">A short description of the project and technologies used.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white dark:bg-zinc-900/20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">Gian Akbar</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Full-stack Web Developer</p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">Building modern web experiences with a focus on performance, accessibility, and beautiful design.</p>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm">© {new Date().getFullYear()} Gian Akbar. All rights reserved.</p>
            </div>

            {/* Spacer for medium screens */}
            <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/shorts" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Shorts
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Gear
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-white uppercase tracking-wider mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/giankbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/gianakbar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/gianakbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:gian@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section with divider and crafted message */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-zinc-500 dark:text-zinc-500 text-sm mb-4 sm:mb-0">
              <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-zinc-500 dark:text-zinc-500 text-sm flex items-center">
              <span>Crafted with</span>
              <svg className="w-4 h-4 mx-1 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>in Jakarta</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
