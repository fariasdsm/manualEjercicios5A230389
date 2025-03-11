import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent, FooterComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'] 
})
export class ContentComponent { }
