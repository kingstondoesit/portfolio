import { ArrowRight } from "lucide-react";
import '../styles/Custom.css'
import { Avatar, Image } from "@radix-ui/react-avatar";

export const Hero = () => {
  return (
    <section className="pt-32 md:pt-0 pb-10 animate-fade-up">
      <div className="container-2xl mx-auto px-4 md:px-0">
        <div className="wrapper md:min-h-[75vh] md:justify-center md:flex-row gap-7 md:gap-24">
          <div>
            <div className="flex flex-col text-4xl md:text-6xl mb-6 leading-tight text-primary">
              <h1>Frontend Developer</h1>
              <h1>Engineer</h1>
              <h1>Writer.</h1>
            </div>
            <div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
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
          </div>
          <div className="-mt-28 md:mt-3 flex-shrink-0 flex-grow md:flex-grow-0">
              <Avatar aria-label="hero-image">
                <Image
                  src="./hero-placeholder.webp"
                  alt="Portfolio picture"
                  className="rounded-2xl w-full md:w-auto"
                />
              </Avatar>
            </div>
        </div>
      </div>
    </section>
  );
};