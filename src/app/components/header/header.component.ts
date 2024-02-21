import {
  CommonModule,
  NgOptimizedImage,
  isPlatformBrowser,
} from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  pageWidth!: number;
  isCollapsed: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.pageWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.pageWidth = window.innerWidth;
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
