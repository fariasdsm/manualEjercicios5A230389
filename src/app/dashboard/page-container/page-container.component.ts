import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../page/content/content.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-container',
  imports: [SidebarComponent, ContentComponent, NavbarComponent, NgClass,RouterOutlet],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  isSidebarVisible = false;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
