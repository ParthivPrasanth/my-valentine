import { useState } from "react";
import confetti from "canvas-confetti";
interface ValentineCardProps {
  imageUrl?: string;
}
const ValentineCard = ({
  imageUrl
}: ValentineCardProps) => {
  const [answered, setAnswered] = useState(false);
  const [noButtonText, setNoButtonText] = useState("no 💔");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const fireConfetti = () => {
    const heart = confetti.shapeFromPath({
      path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    });
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0.4,
      decay: 0.94,
      startVelocity: 20,
      shapes: [heart],
      colors: ["#e8758f", "#f4a5b8", "#ff6b8a", "#ffc0cb", "#ff85a2"]
    };
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2
    });
    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3
    });
    confetti({
      ...defaults,
      particleCount: 15,
      scalar: 4
    });
  };
  const handleYesClick = () => {
    fireConfetti();
    setAnswered(true);
  };
  const handleNoClick = () => {
    // Playfully change the "no" button to "Yes 😈😈" immediately
    setNoButtonText("Yes 😈😈");
    setIsTransitioning(true);

    // Wait 1.2 seconds to let the user see the playful change, then trigger the result
    setTimeout(() => {
      fireConfetti();
      setAnswered(true);
    }, 1200);
  };
  if (answered) {
    return <div className="flex flex-col items-center justify-center text-center px-6 animate-fade-in-up">
        <div className="text-6xl mb-6 animate-pulse-glow">💕</div>
        <h1 className="font-romantic text-3xl md:text-4xl text-foreground leading-relaxed mb-4">
          Good. I already knew the answer 💕
        </h1>
        
      </div>;
  }
  return <div className="flex flex-col items-center justify-center text-center px-6 max-w-md mx-auto">
      <p className="font-romantic text-xl md:text-2xl text-foreground mb-6 animate-fade-in-up" style={{
      animationDelay: "0.1s"
    }}>
        For the girl who became my favorite person ❤️
      </p>

      <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg mb-6 bg-secondary flex items-center justify-center animate-fade-in-up border-4 border-rose-light" style={{
      animationDelay: "0.2s"
    }}>
        {imageUrl ? <img src={imageUrl} alt="Us" className="w-full h-full object-cover" /> : <div className="text-muted-foreground text-sm font-body p-4">
            <span className="text-4xl block mb-2">📷</span>
            Upload your photo
          </div>}
      </div>

      <p className="font-body text-base md:text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{
      animationDelay: "0.3s"
    }}>I know you have been asking me this for a long time. I am sorry for not doing this sooner as I wanted to go out of my way and do something special instead of just simply asking

      <br />
        ​ 
      </p>

      <h1 className="font-romantic md:text-4xl text-foreground mb-8 animate-fade-in-up text-5xl" style={{
      animationDelay: "0.4s"
    }}>
        Will you be my Valentine?
      </h1>

      <div className="flex gap-4 animate-fade-in-up" style={{
      animationDelay: "0.5s"
    }}>
        <button onClick={handleYesClick} className="px-8 py-4 text-lg font-body font-semibold rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
          YES ❤️
        </button>
        <button onClick={handleNoClick} disabled={isTransitioning} className={`px-8 py-4 text-lg font-body font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${isTransitioning ? "bg-primary text-primary-foreground shadow-lg animate-pulse" : "bg-secondary text-secondary-foreground border border-border hover:bg-muted"}`}>
          {noButtonText}
        </button>
      </div>
    </div>;
};
export default ValentineCard;