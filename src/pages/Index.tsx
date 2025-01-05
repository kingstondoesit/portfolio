import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Articles } from "@/components/Articles";
import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <main className="bg-background-primary">
        <Navigation />
        <Hero />
        <About />
        <Articles />
      </main>
    </div>
  );
};

export default Index;