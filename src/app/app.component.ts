import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  applicationConfig = applicationConfigMock;

  switchTemplate = signal(false);
  closeTemplate = signal(true);

  constructor() {
    setTimeout(() => {
      this.toggleTemplate();
    }, 3000);
    setTimeout(() => {
      this.toggleTemplate();
    }, 6000);
    setTimeout(() => {
      this.toggleTemplate();
    }, 9000);
  }

  private toggleTemplate() {
    this.switchTemplate.set(!this.switchTemplate());
    // or
    this.closeTemplate.set(!this.closeTemplate());
  }
}
