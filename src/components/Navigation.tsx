import { Avatar, Image } from "@radix-ui/react-avatar";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-background-primary backdrop-blur-sm z-50 border-b-1 border-gray-200 dark:border-0">
      <div className=" px-6 mx-auto py-4">
        <div className="flex justify-between items-center">
          <div>
            <a href="./" className="flex items-center gap-2">
              <Avatar aria-label="profile-image">
                <Image
                  src="./hero-placeholder.webp"
                  width={50}
                  height={50}
                  alt="Kingstondoesit"
                  className="rounded-full"
                />
              </Avatar>
              <div>
                <span className="text-brand-primary dark:text-foreground text-lg font-bold">Kingstondoesit</span>
                <p className="text-sm text-primary-foreground font-medium">Web Developer</p>
              </div>
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} border-t-1 border-gray-200 dark:border-gray-50/20 md:border-0 navwrapper md:block absolute md:relative text-right bg-white dark:bg-background-nav top-16 md:top-0 left-0 right-0 my-4 md:my-0 px-5 py-2 md:p-0`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-2 md:space-x-2 lg:space-x-7 text-primary-foreground md:px-6 md:py-2 md:pb-4 md:items-baseline">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#articles" className="nav-link">Articles</a></li>
              <li><a href="#Work" className="nav-link">Work</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#socials" className="nav-link">Socials</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:space-x-2">
            <div className="hidden lg:flex"> </div> {/* replace with github icon */}
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <div className="hidden lg:flex"> </div>
            <ModeToggle className="hidden md:flex" />
          </div>
        </div>
      </div>
    </nav>
  );
};