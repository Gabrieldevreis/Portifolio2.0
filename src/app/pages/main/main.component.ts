import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  isMobile = false;
  showSidebar = true;

  ngOnInit(): void {}

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 916;

    if (!this.isMobile) {
      this.showSidebar = true;
    }
  }

  onNavigate() {
    if (this.isMobile) {
      this.showSidebar = false;
    }
  }

  openSidebar() {
    if (this.isMobile) {
      this.showSidebar = true;
    }
  }
}
