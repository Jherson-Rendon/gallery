import { Component } from '@angular/core';

export interface Image {
  url: string;
  title: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images: Image[] = [
    {
      title: 'Imagen 1',
      url: 'https://picsum.photos/400',
      thumbnailUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Imagen 2',
      url: 'https://picsum.photos/400',
      thumbnailUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Imagen 3',
      url: 'https://picsum.photos/400',
      thumbnailUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Imagen 4',
      url: 'https://picsum.photos/400',
      thumbnailUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Imagen 5',
      url: 'https://picsum.photos/400',
      thumbnailUrl: 'https://picsum.photos/200',
    },
    {
      title: 'Imagen 6',
      url: 'https://picsum.photos/400',
      thumbnailUrl: 'https://picsum.photos/200',
    },
  ];

  selectedImage: Image | null = null;

  openModal(image: Image) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
