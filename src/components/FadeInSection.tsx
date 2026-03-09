import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInSection({ children, className = "", delay = 0 }: Props) {
  const { ref, isInView } = useInView(0.1);
  return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
