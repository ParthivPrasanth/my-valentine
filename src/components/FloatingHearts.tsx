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
    const types: Heart["type"][] = ["heart", "sparkle", "double"];
    const initialHearts: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 18 + 14,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.2,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setHearts(initialHearts);
  }, []);

  const getHeartEmoji = (type: Heart["type"]) => {
    switch (type) {
      case "sparkle":
        return "💖";
      case "double":
        return "💕";
      default:
        return "♥";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
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
          <span className={heart.type === "heart" ? "text-primary" : ""}>
            {getHeartEmoji(heart.type)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
