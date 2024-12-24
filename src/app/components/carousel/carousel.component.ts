import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
}
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule, MatCardModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  slides: Slide[] = [
    {
      image: 'assets/carousel01.webp'
    },
    {
      image: 'assets/carousel2.webp'
    },
    {
      image: 'assets/carousel3.webp'
    },
    {
      image: 'assets/carousel4.webp'
    },
    {
      image: 'assets/carousel5.webp'
    },
    {
      image: 'assets/carousel6.webp'
    },
    {
      image: 'assets/carousel7.webp'
    }
  ];
  currentIndex = 0;
  slideInterval: any;
  ngOnInit() {
    this.AutoSlide();
  }
  AutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}