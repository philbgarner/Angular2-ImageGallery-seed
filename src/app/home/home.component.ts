import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {

  images: string[];
  image_index: number;
  current_image: string;

  transition_paused: boolean;
  catalogue: boolean;

  togglePause(): void {
    this.transition_paused = !this.transition_paused;
    if (!this.transition_paused) {
      setTimeout(() => {
            if (!this.transition_paused)
              this.setNextImage();
          }, 5000);
    }

  }

  viewImage(): void  {
    this.catalogue = !this.catalogue;
    this.togglePause();
  }

  regressImage(): void {
    this.image_index = this.image_index - 1;
    if (this.image_index < 0) {
      this.image_index = this.images.length - 1;
    }
    this.current_image = this.images[this.image_index];
  }
  advanceImage(): void {
    this.image_index = this.image_index - 1;
    if (this.image_index < 0) {
      this.image_index = this.images.length - 1;
    }
    this.current_image = this.images[this.image_index];
  }

  setNextImage(): void {
    this.image_index = this.image_index + 1;
    if (this.image_index >= this.images.length) {
      this.image_index = 0
    }
    this.current_image = this.images[this.image_index];
    setTimeout(() => {
          if (!this.transition_paused)
            this.setNextImage();
        }, 5000);
  }
  
  changeToImage(img: string): void {
    this.current_image = img;
  }

  constructor() {
    this.images = [];
    
    this.images.push("https://upload.wikimedia.org/wikipedia/commons/9/9f/Archivpark_-_Holzliegen_%282012%29_DSC_2809.jpg");
    this.images.push("https://upload.wikimedia.org/wikipedia/commons/1/18/Burgruine_Wolfstein_20170121_121935.jpg");
    this.images.push("https://upload.wikimedia.org/wikipedia/commons/8/83/Wasserlandschaft_innerhalb_des_Landschaftsgartens_20170620_124857a.jpg");
    this.images.push("https://upload.wikimedia.org/wikipedia/commons/5/5c/Mimus-polyglottos-002_edit.jpg");
    this.images.push("https://upload.wikimedia.org/wikipedia/commons/d/d1/Anas-strepera-001.jpg");
    this.images.push("https://upload.wikimedia.org/wikipedia/commons/f/f5/A_sculpture_at_the_entrance_to_the_palace_of_Versailles.jpg");

    this.transition_paused = false;
    this.catalogue = true;

    this.image_index = this.images.length;
    this.setNextImage();
  }

}
