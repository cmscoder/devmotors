'use client';

import Link from 'next/link';
import styles from './error.module.scss';

export default function Error() {
  return (
    <div className={styles.error}>
      <h1>Ops this page doesn't exist!</h1>
      <Link href="/">Back to home</Link>
    </div>
  );
}
