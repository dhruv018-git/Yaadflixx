import { type User, type InsertUser, type Movie, type InsertMovie } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getMovies(): Promise<Movie[]>;
  getMovie(id: string): Promise<Movie | undefined>;
  getTrendingMovies(): Promise<Movie[]>;
  getFeaturedMovie(): Promise<Movie | undefined>;
  getMoviesByType(type: string): Promise<Movie[]>;
  createMovie(movie: InsertMovie): Promise<Movie>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private movies: Map<string, Movie>;

  constructor() {
    this.users = new Map();
    this.movies = new Map();
    this.initializeMovies();
  }

  private initializeMovies() {
    const sampleMovies: Movie[] = [
      {
        id: "1",
        title: "The Dark Knight",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        year: 2008,
        duration: 152,
        genre: "Action, Crime, Drama",
        rating: 9.0,
        posterUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        backdropUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        type: "movie",
        seasons: 1,
        featured: 1,
        trending: 1,
        createdAt: new Date(),
      },
      {
        id: "2",
        title: "Inception",
        description: "A thief who enters the dreams of others to steal secrets from their subconscious is given the task of planting an idea into the mind of a C.E.O.",
        year: 2010,
        duration: 148,
        genre: "Sci-Fi, Thriller",
        rating: 8.8,
        posterUrl: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        backdropUrl: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        type: "movie",
        seasons: 1,
        featured: 0,
        trending: 1,
        createdAt: new Date(),
      },
      {
        id: "3",
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        year: 2014,
        duration: 169,
        genre: "Drama, Sci-Fi",
        rating: 8.6,
        posterUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        backdropUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        type: "movie",
        seasons: 1,
        featured: 0,
        trending: 1,
        createdAt: new Date(),
      },
      {
        id: "4",
        title: "The Matrix",
        description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
        year: 1999,
        duration: 136,
        genre: "Action, Sci-Fi",
        rating: 8.7,
        posterUrl: "https://images.unsplash.com/photo-1478720568477-b0829c5c6dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        backdropUrl: "https://images.unsplash.com/photo-1478720568477-b0829c5c6dd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        type: "movie",
        seasons: 1,
        featured: 0,
        trending: 1,
        createdAt: new Date(),
      },
      {
        id: "5",
        title: "Breaking Bad",
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
        year: 2008,
        duration: 49,
        genre: "Crime, Drama, Thriller",
        rating: 9.5,
        posterUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        backdropUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        type: "series",
        seasons: 5,
        featured: 0,
        trending: 0,
        createdAt: new Date(),
      },
      {
        id: "6",
        title: "Stranger Things",
        description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.",
        year: 2016,
        duration: 51,
        genre: "Drama, Fantasy, Horror",
        rating: 8.7,
        posterUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
        backdropUrl: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
        type: "series",
        seasons: 4,
        featured: 0,
        trending: 0,
        createdAt: new Date(),
      },
    ];

    sampleMovies.forEach(movie => {
      this.movies.set(movie.id, movie);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMovies(): Promise<Movie[]> {
    return Array.from(this.movies.values());
  }

  async getMovie(id: string): Promise<Movie | undefined> {
    return this.movies.get(id);
  }

  async getTrendingMovies(): Promise<Movie[]> {
    return Array.from(this.movies.values()).filter(movie => movie.trending === 1);
  }

  async getFeaturedMovie(): Promise<Movie | undefined> {
    return Array.from(this.movies.values()).find(movie => movie.featured === 1);
  }

  async getMoviesByType(type: string): Promise<Movie[]> {
    return Array.from(this.movies.values()).filter(movie => movie.type === type);
  }

  async createMovie(insertMovie: InsertMovie): Promise<Movie> {
    const id = randomUUID();
    const movie: Movie = { 
      ...insertMovie, 
      id, 
      createdAt: new Date() 
    };
    this.movies.set(id, movie);
    return movie;
  }
}

export const storage = new MemStorage();
