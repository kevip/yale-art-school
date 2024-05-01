import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TSideMenuItem } from '../../../core/types/side-menu-item.type';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'yale-side-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @Input() navItems: TSideMenuItem[] = [];

  opened = false;

  toggleMenu(): void {
    this.opened = !this.opened;
  }

}
