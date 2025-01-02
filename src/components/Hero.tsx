import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-4xl md:text-6xl mb-6 leading-tight gap-2">
          <h1>Frontend Developer</h1>
          <h1>Engineer</h1>
          <h1>Writer.</h1> 
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          I build performant, accessible, responsive web applications and write extensively about them. My ideology towards great web technology borders on inclusivity, functionality, visual appeal, and accessibility.
        </p>
        <a
          href="#articles"
          className="inline-flex items-center space-x-2 bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
        >
          <span>Read My Articles</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};