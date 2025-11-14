import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Section = ({ children, className = "", delay = 0 }: SectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

interface CardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
}

export const Card = ({ children, className = "", hover3D = true }: CardProps) => {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-all ${
        hover3D ? "tilt-card" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
