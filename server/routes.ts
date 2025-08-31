import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMovieSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all movies
  app.get("/api/movies", async (_req, res) => {
    try {
      const movies = await storage.getMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movies" });
    }
  });

  // Get featured movie
  app.get("/api/movies/featured", async (_req, res) => {
    try {
      const movie = await storage.getFeaturedMovie();
      if (!movie) {
        return res.status(404).json({ error: "No featured movie found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured movie" });
    }
  });

  // Get trending movies
  app.get("/api/movies/trending", async (_req, res) => {
    try {
      const movies = await storage.getTrendingMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trending movies" });
    }
  });

  // Get series
  app.get("/api/movies/series", async (_req, res) => {
    try {
      const series = await storage.getMoviesByType("series");
      res.json(series);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch series" });
    }
  });

  // Get single movie
  app.get("/api/movies/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await storage.getMovie(id);
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movie" });
    }
  });

  // Create new movie
  app.post("/api/movies", async (req, res) => {
    try {
      const movieData = insertMovieSchema.parse(req.body);
      const movie = await storage.createMovie(movieData);
      res.status(201).json(movie);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid movie data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create movie" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
