import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLinkActive: { [key: string]: boolean } = {};

  onLinkTouchStart(link: string): void {
    this.isLinkActive[link] = true;
  }

  onLinkTouchEnd(link: string): void {
    this.isLinkActive[link] = false;
  }

  onLinkHover(link: string): void {
    this.isLinkActive[link] = true;
  }

  onLinkHoverEnd(link: string): void {
    this.isLinkActive[link] = false;
  }
}

