import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigationItems = [
    { key: "about", label: t("nav.about") },
    { key: "terms", label: t("nav.terms") },
    { key: "privacy", label: t("nav.privacy") },
    { key: "help", label: t("nav.help") },
    { key: "cookies", label: t("nav.cookies") },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Loopie Logo" className="h-10" />
            <button
              onClick={() => onNavigate("about")}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              Loopie
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.key}
                variant={currentPage === item.key ? "default" : "ghost"}
                onClick={() => onNavigate(item.key)}
                className={`
                  relative px-4 py-2 rounded-full transition-all duration-300
                  ${
                    currentPage === item.key
                      ? "bg-golden text-background shadow-lg shadow-golden/30"
                      : "hover:bg-surface-light text-foreground hover:scale-105"
                  }
                `}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-surface rounded-full p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`
                  px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    language === "en"
                      ? "bg-golden text-background shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("vn")}
                className={`
                  px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    language === "vn"
                      ? "bg-golden text-background shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                VN
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full hover:bg-surface-light"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.key}
                variant={currentPage === item.key ? "default" : "ghost"}
                onClick={() => {
                  onNavigate(item.key);
                  setIsMenuOpen(false);
                }}
                className={`
                  w-full justify-start rounded-full transition-all duration-300
                  ${
                    currentPage === item.key
                      ? "bg-golden text-background shadow-lg shadow-golden/30"
                      : "hover:bg-surface-light"
                  }
                `}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
