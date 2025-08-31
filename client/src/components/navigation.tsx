import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Play, User, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2" data-testid="logo-yaadflix">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Play className="text-white h-5 w-5" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                YaadFlix
              </span>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#" 
                className="text-foreground hover:text-accent transition-colors duration-300"
                data-testid="link-home"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="link-movies"
              >
                Movies
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="link-shows"
              >
                TV Shows
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="link-genres"
              >
                Genres
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid="link-mylist"
              >
                My List
              </a>
            </div>
          </div>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Search movies..."
                className="bg-muted border-border rounded-lg pr-10 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                data-testid="input-search"
              />
              <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              data-testid="button-search-mobile"
            >
              <Search className="h-5 w-5 text-muted-foreground hover:text-accent" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full"
              data-testid="button-profile"
            >
              <User className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-morphism rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-accent transition-colors" data-testid="link-home-mobile">
                Home
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-movies-mobile">
                Movies
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-shows-mobile">
                TV Shows
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-genres-mobile">
                Genres
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-mylist-mobile">
                My List
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
