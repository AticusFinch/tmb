"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading after page is fully loaded
    const handleLoad = () => {
      // Add delay before starting curtain animation
      setTimeout(() => {
        setIsLoading(false);
        // Add a small delay before removing from DOM for fade-out animation
        setTimeout(() => {
          setIsVisible(false);
        }, 800);
      }, 800);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      // Defer state update to avoid synchronous setState in effect
      queueMicrotask(() => {
        // Add delay before starting curtain animation
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setIsVisible(false);
          }, 800);
        }, 800);
      });
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback: hide after a minimum time to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    }, 1500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: isLoading ? 0 : "-100%",
          }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: isLoading ? 1 : 0.8,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Image
              src="/load/load.png"
              alt="Logo"
              width={468}
              height={468}
              style={{
                width: "clamp(15.625rem, 13.393rem + 11.16vw, 31.25rem)",
                height: "auto",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
