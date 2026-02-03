import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "heart" | "sparkle" | "double";
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const types: Heart["type"][] = ["heart", "double"]; // Red and green (matcha) hearts
    const initialHearts: Heart[] = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 12 + 28, // Very slow: 28-40 seconds
      delay: Math.random() * 15,
      opacity: Math.random() * 0.2 + 0.15, // More subtle: 0.15-0.35
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setHearts(initialHearts);
  }, []);

  const getHeartContent = (type: Heart["type"]) => {
    // Red hearts and green (matcha) hearts
    if (type === "double") {
      return { emoji: "💚", color: "text-green-500" }; // Matcha green
    }
    return { emoji: "❤️", color: "text-red-500" }; // Classic red
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => {
        const { emoji, color } = getHeartContent(heart.type);
        return (
          <div
            key={heart.id}
            className="absolute animate-float-up"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
              opacity: heart.opacity,
            }}
          >
            <span className={color}>{emoji}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
