import { Injectable } from '@angular/core';
export interface Movie {
  title: string;
  poster: string;
  genre: string;
  rating: number;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class Services {
  private movies: Movie[] = [
    {
      title: 'Inception',
      poster: 'path/to/inception-poster.jpg',
      genre: 'Sci-Fi',
      rating: 5,
      description: 'A mind-bending thriller by Christopher Nolan.'
    },
    {
      title: '3 Idiots',
      poster: 'path/to/3idiots-poster.jpg',
      genre: 'Comedy',
      rating: 4,
      description: 'A comedic tale about three friends navigating engineering school.'
    },
    {
      title: 'The Dark Knight',
      poster: 'path/to/darkknight-poster.jpg',
      genre: 'Action',
      rating: 5,
      description: 'Batman faces the Joker in this iconic movie.'
    },
    {
      title: 'Interstellar',
      poster: 'path/to/interstellar-poster.jpg',
      genre: 'Sci-Fi',
      rating: 5,
      description: 'A space journey through wormholes and time.'
    }
  ];
  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  
}
