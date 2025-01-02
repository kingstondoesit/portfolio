import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Articles } from "@/components/Articles";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Articles />
      </main>
    </div>
  );
};

export default Index;