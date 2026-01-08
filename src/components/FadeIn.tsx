"use client";

import { motion, type Variants } from "framer-motion";
import { Children, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

const easeApple = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeApple },
  },
};

export function FadeIn({ children, className, stagger }: FadeInProps) {
  if (typeof stagger === "number" && stagger > 0) {
    const container: Variants = {
      hidden: {},
      show: {
        transition: { staggerChildren: stagger, delayChildren: stagger * 0.25 },
      },
    };

    return (
      <motion.div
        className={cn(className)}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Children.toArray(children).map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
