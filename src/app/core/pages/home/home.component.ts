import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, WritableSignal, signal } from '@angular/core';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { TSideMenuItem } from '../../types/side-menu-item.type';

@Component({
  selector: 'yale-home',
  standalone: true,
  imports: [
    SideMenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class HomeComponent implements OnInit {

  ngOnInit(): void {
    console.log('ASDASD');
  }

  navItems: WritableSignal<TSideMenuItem[]> = signal([
    { name: 'Introduction', sectionId: 'introduction' },
    { name: 'Soa', sectionId: 'soa' },
    { name: 'Calendar', sectionId: 'calendar' },
    { name: 'Contact', sectionId: 'contact' },
  ]);
}
