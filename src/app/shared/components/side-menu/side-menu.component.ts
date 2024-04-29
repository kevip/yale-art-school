import { Component, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TSideMenuItem } from '../../../core/types/side-menu-item.type';

@Component({
  selector: 'yale-side-menu',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  @Input() navItems: TSideMenuItem[] = [];

  ngOnInit(): void {

  }
}
