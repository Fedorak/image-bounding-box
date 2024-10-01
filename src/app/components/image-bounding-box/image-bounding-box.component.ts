import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-bounding-box',
  standalone: true,
  templateUrl: './image-bounding-box.component.html',
  styleUrls: ['./image-bounding-box.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ImageBoundingBoxComponent {
  imageUrl: string | ArrayBuffer | null = null;
  boundingBox = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  };

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  removeImage(): void {
    this.imageUrl = null;
    this.boundingBox = {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    };
  }
}
