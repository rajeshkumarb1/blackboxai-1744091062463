import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-dark/80 border-t border-accent/10 py-8 mt-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-light/60">
              © {new Date().getFullYear()} Creative Technologist Portfolio
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm hover:text-accent transition-colors">
                <i className="fas fa-shield-alt mr-1"></i> Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-accent transition-colors">
                <i className="fas fa-file-contract mr-1"></i> Terms
              </Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-lg hover:text-accent transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-lg hover:text-accent transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-lg hover:text-accent transition-colors" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-lg hover:text-accent transition-colors" aria-label="Dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}