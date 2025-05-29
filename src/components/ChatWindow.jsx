import React, { useState, useEffect } from 'react';
import styles from './ChatWindow.module.css';

const Layout = ({ leftContent, topRightContent, bottomRightContent }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 600;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Page Header</h2>
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={styles.menuButton}
          >
            ☰
          </button>
        )}
      </div>
      <div className={styles.body}>
        <div
          className={
            isMobile
              ? `${styles.leftContent} ${styles.leftContentMobile}`
              : styles.leftContent
          }
        >
          {leftContent}
        </div>

        {(menuOpen || !isMobile) && (
          <div
            className={
              isMobile
                ? `${styles.rightContent} ${styles.rightContentMobile}`
                : styles.rightContent
            }
          >
            <div className={styles.topRightContent}>{topRightContent}</div>
            <div className={styles.bottomRightContent}>{bottomRightContent}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;