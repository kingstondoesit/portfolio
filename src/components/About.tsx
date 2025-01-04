import { Code, Layout, Palette } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-4 scroll-mt-36">
      <div className="container max-w-4xl mx-auto px-4">
        <div className=" min-h-screen">
          <h2 className="text-3xl md:text-4xl place-self-auto mb-3">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable, and efficient code is my passion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <Layout className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-muted-foreground">
                Creating layouts that work seamlessly across all devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <Palette className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Crafting beautiful and intuitive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};