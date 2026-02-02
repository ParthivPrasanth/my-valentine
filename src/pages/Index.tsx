import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";

const Index = () => {
  // Replace this with your uploaded photo URL
  const couplePhoto = undefined;

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
