import { Calendar } from "lucide-react";

const articles = [
  {
    title: "CSS Grid: A Game Changer in Web Layout",
    excerpt: "Learn how CSS Grid revolutionizes the way we create web layouts with its two-dimensional system.",
    date: "Mar 15, 2024",
    category: "CSS"
  },
  {
    title: "Understanding CSS Logical Properties",
    excerpt: "Dive deep into CSS logical properties and how they improve international layouts.",
    date: "Mar 10, 2024",
    category: "CSS"
  },
  {
    title: "Mastering Flexbox Layout",
    excerpt: "A comprehensive guide to using Flexbox for modern web layouts.",
    date: "Mar 5, 2024",
    category: "CSS"
  }
];

export const Articles = () => {
  return (
    <section id="articles" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="article-card bg-white rounded-lg border border-gray-100 p-6"
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <span className="bg-muted px-2 py-1 rounded">{article.category}</span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </span>
              </div>
              <h3 className="text-xl mb-3 font-semibold">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <a href="#" className="text-secondary font-medium hover:underline">
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};