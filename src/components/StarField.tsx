import { motion } from "framer-motion";

const random = () => Math.random();

export const StarField = () => {
  const stars = Array.from({ length: 160 }, (_, i) => ({
    id: i,
    x: random() * 100,
    y: random() * 100,
    size: random() * 2.5 + 0.5,
    duration: random() * 4 + 2,
    delay: random() * 5,
    opacity: random() * 0.7 + 0.3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.2, star.opacity],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Nebula glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-6"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
};
