import { Component, Signal, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavService } from '../../../core/services/side-nav.service';
import { RouterModule } from '@angular/router';
import { NAV_MENU_ITEMS } from '../../../core/config/nav-menu';
import { TNavMenuItem } from '../../../core/types/nav-menu-item.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'yale-header',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public sideNavService = inject(SideNavService);

  public menuItems: Signal<TNavMenuItem[]> = signal(NAV_MENU_ITEMS);
}
