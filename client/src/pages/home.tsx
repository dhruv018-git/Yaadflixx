import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSlider from "@/components/hero-slider";
import CategoryPills from "@/components/category-pills";
import MovieCard from "@/components/movie-card";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "@shared/schema";

export default function Home() {
  const { data: movies = [], isLoading } = useQuery<Movie[]>({
    queryKey: ["/api/movies"],
  });

  const { data: featuredMovie } = useQuery<Movie>({
    queryKey: ["/api/movies/featured"],
  });

  const { data: trendingMovies = [] } = useQuery<Movie[]>({
    queryKey: ["/api/movies/trending"],
  });

  const { data: popularSeries = [] } = useQuery<Movie[]>({
    queryKey: ["/api/movies/series"],
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-fade').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSlider featuredMovie={featuredMovie} />
      
      <CategoryPills />
      
      {/* Trending Movies Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="scroll-fade">
            <h2 className="text-3xl font-bold mb-8" data-testid="heading-trending">Trending Now</h2>
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="glass-morphism rounded-lg overflow-hidden animate-pulse">
                    <div className="w-full h-80 bg-muted"></div>
                    <div className="p-4">
                      <div className="h-4 bg-muted rounded mb-2"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {trendingMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular TV Series Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="scroll-fade">
            <h2 className="text-3xl font-bold mb-8" data-testid="heading-series">Popular TV Series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularSeries.map((series) => (
                <div key={series.id} className="movie-card glass-morphism rounded-lg overflow-hidden" data-testid={`card-series-${series.id}`}>
                  <img 
                    src={series.backdropUrl || series.posterUrl} 
                    alt={`${series.title} series`} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" data-testid={`text-title-${series.id}`}>{series.title}</h3>
                    <p className="text-muted-foreground mb-4" data-testid={`text-description-${series.id}`}>{series.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-green-500 text-black px-2 py-1 rounded text-sm font-bold" data-testid={`text-rating-${series.id}`}>
                        {series.rating}
                      </span>
                      <span className="text-muted-foreground text-sm" data-testid={`text-seasons-${series.id}`}>
                        {series.seasons} Season{series.seasons !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
