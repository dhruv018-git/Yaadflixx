import type { Movie } from "@shared/schema";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card glass-morphism rounded-lg overflow-hidden" data-testid={`card-movie-${movie.id}`}>
      <img 
        src={movie.posterUrl} 
        alt={`${movie.title} poster`} 
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold mb-2" data-testid={`text-title-${movie.id}`}>{movie.title}</h3>
        <p className="text-muted-foreground text-sm" data-testid={`text-metadata-${movie.id}`}>
          {movie.year} • {movie.genre}
        </p>
      </div>
    </div>
  );
}
