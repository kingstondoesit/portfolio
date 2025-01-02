import { Code, Layout, Palette } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <Code className="h-8 w-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
            <p className="text-muted-foreground">
              Writing maintainable, scalable, and efficient code is my passion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <Layout className="h-8 w-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
            <p className="text-muted-foreground">
              Creating layouts that work seamlessly across all devices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <Palette className="h-8 w-8 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Crafting beautiful and intuitive user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};