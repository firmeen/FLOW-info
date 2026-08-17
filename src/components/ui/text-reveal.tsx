"use client";

import { useRef, type ComponentPropsWithoutRef, type FC, type ReactNode } from "react";
import { motion, type MotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  heightClassName?: string;
  stickyTopClassName?: string;
  textClassName?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  heightClassName = "h-[180vh]",
  stickyTopClassName = "top-[72px]",
  textClassName,
  ...props
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 80%", "end 45%"] });
  const words = children.split(" ");

  if (reduceMotion) {
    return (
      <div className={cn("py-16", className)} {...props}>
        <p className={cn("text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl", textClassName)}>
          {children}
        </p>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className={cn("relative z-0", heightClassName, className)} {...props}>
      <div className={cn("sticky mx-auto flex h-[calc(100svh-72px)] max-w-5xl items-center", stickyTopClassName)}>
        <span className={cn("flex flex-wrap text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground/18 sm:text-5xl lg:text-6xl", textClassName)}>
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={`${word}-${index}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

function Word({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <span className="relative mr-[0.22em]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className="text-foreground">
        {children}
      </motion.span>
    </span>
  );
}
