import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedIndex: number | null = null;

  setSelectedIndex(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
  showLoginContent = false;
  showDashboardContent = false;
  showGSTContent = false;
  showPaidOnlineContent = false;

  toggleContent(contentType: string) {
    switch (contentType) {
      case 'login':
        this.showLoginContent = !this.showLoginContent;
        break;
      case 'dashboard':
        this.showDashboardContent = !this.showDashboardContent;
        break;
      case 'gst':
        this.showGSTContent = !this.showGSTContent;
        break;
      case 'paidOnline':
        this.showPaidOnlineContent = !this.showPaidOnlineContent;
        break;
    }
  }
}