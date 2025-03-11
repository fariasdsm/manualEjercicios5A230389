import { Component } from '@angular/core';
import { PageContainerComponent } from "./dashboard/page-container/page-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageContainerComponent], // Agrega FooterComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular-230389';
}
