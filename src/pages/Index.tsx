import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import couplePhoto from "@/assets/couple-photo.png";

const Index = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <FloatingHearts />
      <main className="relative z-10 py-8">
        <ValentineCard imageUrl={couplePhoto} />
      </main>
    </div>
  );
};

export default Index;
