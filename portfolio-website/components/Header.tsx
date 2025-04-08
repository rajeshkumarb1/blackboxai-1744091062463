import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-accent/10"
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              <i className="fas fa-home mr-2"></i> Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent transition-colors font-medium">
              <i className="fas fa-user mr-2"></i> About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-accent transition-colors font-medium">
              <i className="fas fa-briefcase mr-2"></i> Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent transition-colors font-medium">
              <i className="fas fa-envelope mr-2"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}