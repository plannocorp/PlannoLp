import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-alt',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header-alt.html',
  styleUrl: './header-alt.css',
})
export class HeaderAlt {
  public iconClass: string = 'fas fa-bars mobile-menu-icon';
  public menuAberto: boolean = false;

  public toggleMenu(): void {
    this.menuAberto = !this.menuAberto; // menuAberto vai receber o seu inverso
    
    if (this.menuAberto) {
      this.iconClass = 'fas fa-times mobile-menu-icon';
    }
    
    else {
      this.iconClass = 'fas fa-bars mobile-menu-icon';
    }
  }
}
