import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly matDrawer = viewChild.required<MatDrawer>(MatDrawer);
  private readonly navigationViewport = viewChild.required('navigationViewport', {
    read: ViewContainerRef,
  });

  private readonly contentViewport = viewChild.required('contentViewport', {
    read: ViewContainerRef,
  });

  readonly navigationTemplate = input<TemplateRef<unknown>>();
  readonly contentTemplate = input<TemplateRef<unknown>>();

  constructor() {
    effect(() => {
      const contentTemplate = this.contentTemplate();

      if (contentTemplate) {
        this.contentViewport().createEmbeddedView(contentTemplate);
      }
    });

    effect(() => {
      const navigationTemplate = this.navigationTemplate();

      if (navigationTemplate) {
        this.navigationViewport().createEmbeddedView(navigationTemplate, {
          contextProperty: 'Moscow',
          $implicit: 'Egor',
        });
      }
    });
  }

  toggleSidenavOpened() {
    this.matDrawer().toggle();
  }
}
