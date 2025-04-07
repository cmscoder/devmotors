'use client';
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import styles from './styles.module.scss';
import { X, Menu } from 'lucide-react';

export function Submenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Services
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}
        <li>
          <Link href="/post/page-1">Page 1</Link>
        </li>
        <li>
          <Link href="/post/page-2">Page 2</Link>
        </li>
      </ul>
    </section>
  );
}
