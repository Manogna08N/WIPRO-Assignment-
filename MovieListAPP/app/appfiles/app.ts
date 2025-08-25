import { RouterOutlet } from '@angular/router';
import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Movie {
  title: string;
  poster: string;
  genre: string;
  rating: number;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  selectedGenre: string = 'All';
  cols: number = 4;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  
  movies: Movie[] = [
  
  {
    title: 'They Call Him OG',
    poster:'c:\Users\nmano\Downloads\OG-1.jpg',
    genre: 'Action',
    rating: 5,
    description: 'A vanished mob boss returns from a decade of exile to reclaim his empire .'
  },
  {
    title: 'HIT: The Third Case',
    poster: 'c:\Users\nmano\Downloads\hit-3_b_2304250847.jpg',
    genre: 'Thriller',
    rating: 4.5,
    description: 'A ruthless police officer is sent by the Homicide Intervention Team (HIT) to find a group of killers.'
  },
  {
    title: 'Hi Nanna',
    poster:'c:\Users\nmano\Downloads\hi-nanna-et00364503-1701678655.avif',   
    genre: 'Drama',
    rating: 5,
    description: 'A family drama highlighting Father & Daughter emotional bonds and values.'
  }
];

  get filteredMovies() {
    if (this.selectedGenre === 'All') {
      return this.movies;
    }
    return this.movies.filter((m) => m.genre === this.selectedGenre);
  }

  get averageRating() {
    const total = this.movies.reduce((acc, m) => acc + m.rating, 0);
    return (total / this.movies.length).toFixed(1);
  }

  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onResize();
    }
  }

  
  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width <= 480) {
        this.cols = 1;
      } else if (width <= 768) {
        this.cols = 2;
      } else if (width <= 1024) {
        this.cols = 3;
      } else {
        this.cols = 4;
      }
    }
  }
}
