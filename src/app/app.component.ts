import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Не забудьте імпортувати RouterOutlet
import { ImageBoundingBoxComponent } from './components/image-bounding-box/image-bounding-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule, ImageBoundingBoxComponent, RouterOutlet],
})
export class AppComponent {}
