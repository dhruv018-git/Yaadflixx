import { Button } from "@/components/ui/button";
import { Play, Plus, ChevronDown } from "lucide-react";
import type { Movie } from "@shared/schema";

interface HeroSliderProps {
  featuredMovie?: Movie;
}

export default function HeroSlider({ featuredMovie }: HeroSliderProps) {
  const defaultMovie = {
    title: "The Dark Knight",
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    year: 2008,
    duration: 152,
    genre: "Action, Crime, Drama",
    rating: 9.0,
    backdropUrl: "https://images.unsplash.com/photo-1489599856615-8d7b81fbf6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
  };

  const movie = featuredMovie || defaultMovie;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Featured Movie Background */}
      <div 
        className="absolute inset-0 hero-slider bg-cover bg-center"
        style={{ backgroundImage: `url('${movie.backdropUrl}')` }}
      />
      
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="scroll-fade">
            <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4" data-testid="badge-featured">
              Featured
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
              {movie.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-description">
              {movie.description}
            </p>
            <div className="flex items-center space-x-4 mb-8" data-testid="hero-metadata">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
                IMDb {movie.rating}
              </span>
              <span className="text-muted-foreground">{movie.year}</span>
              <span className="text-muted-foreground">{movie.duration} min</span>
              <span className="text-muted-foreground">{movie.genre}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="gradient-button px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg" data-testid="button-watch-now">
                <Play className="w-5 h-5 mr-2" fill="currentColor" />
                Watch Now
              </Button>
              <Button 
                variant="outline" 
                className="glass-morphism px-8 py-4 rounded-lg text-white font-semibold border-white/20 hover:bg-white/10"
                data-testid="button-add-to-list"
              >
                <Plus className="w-5 h-5 mr-2" />
                My List
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating">
        <ChevronDown className="text-white/60 h-8 w-8" />
      </div>
    </section>
  );
}
