import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Sou", href: "#quem-sou" },
  { label: "Psicologia", href: "#psicologia" },
  { label: "Neuropsicologia", href: "#neuropsicologia" },
  { label: "Consultoria de Carreira", href: "#consultoria" },
  { label: "Palestras", href: "#palestras" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-20 lg:h-24">
        <a href="#inicio" onClick={() => handleClick("#inicio")}>
          <img src={logo} alt="Regiane Colodo" className="h-14 lg:h-16 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="font-sans-body text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-background/98 backdrop-blur-lg border-t border-border/30">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="font-sans-body text-base text-foreground/80 hover:text-primary transition-colors text-left py-2 border-b border-border/20 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
