import { ChangeDetectorRef, Component, ViewChild, inject, signal } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { NAV_MENU_ITEMS } from '../../../core/config/nav-menu';
import { SideNavService } from '../../../core/services/side-nav.service';

@Component({
  selector: 'yale-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sideNavService = inject(SideNavService);

  mobileQuery: MediaQueryList;

  navList = signal(NAV_MENU_ITEMS);

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addEventListener('change', this.mobileQueryListener.bind(this));
  }

  mobileQueryListener(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    console.log('ess')
    this.sideNavService.sideNavToggle$.subscribe(() => {
      this.sidenav.toggle();
    });
  }

}
