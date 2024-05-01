import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { TSideMenuItem } from '../../types/side-menu-item.type';
import { CardComponent } from '../../../shared/components/card/card.component';
import { TCard } from '../../types/card-data.type';
import { CardNewsComponent } from '../../../shared/components/card-news/card-news.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'yale-home',
  standalone: true,
  imports: [
    FooterComponent,
    SideMenuComponent,
    MatButtonModule,
    CardComponent,
    CardNewsComponent,
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
    { name: 'Exhibitions', sectionId: 'exhibitions' },
    { name: 'News', sectionId: 'news' },
    { name: 'Contact', sectionId: 'contact' },
  ]);

  exhibitions: WritableSignal<TCard[]> = signal([
    {
      title: 'Zapateando EN YALE: A performance by Brenda Barrios',
      subtitle: `
        <p class="subtitle-p">Sunday, April 14</p>
        <p class="subtitle-p">3:33-4:04 PM</p>
        <p class="subtitle-p">36 Edgewood Ave. Room 309</p>
      `,
      image: '/assets/images/zapateando-en-yale.webp',
    },
    {
      title: 'Art and Activism: Rashida Bumbray & Jamal Cyrus in conversation',
      subtitle: `
        <p class="subtitle-p">Sunday, April 14</p>
        <p class="subtitle-p">3:33-4:04 PM</p>
        <p class="subtitle-p">36 Edgewood Ave. Room 309</p>
      `,
      image: '/assets/images/art-and-activism.webp',
    },
    {
      title: 'Moving Sculpture: A collaboration between Sculptors and Projection Designers',
      subtitle: `
        <p class="subtitle-p">Sunday, April 14</p>
        <p class="subtitle-p">3:33-4:04 PM</p>
        <p class="subtitle-p">36 Edgewood Ave. Room 309</p>
      `,
      image: '/assets/images/moving-sculpture.webp',
    },
    {
      title: 'Lonnie Holley & Mourning [A] BLKstar in Concert',
      subtitle: `
        <p class="subtitle-p">Thursday, January 18, 2024</p>
        <p class="subtitle-p">7:30–9PM</p>
        <p class="subtitle-p">Whitney Humanities Center</p>
      `,
      image: '/assets/images/lonnie_holley_&_mourning.avif',
    }
  ]);
  news: WritableSignal<TCard[]> = signal([
    {
      title: 'MARCH 28, 2024',
      subtitle: `
      <p class="subtitle-p">
      Danielle De Jesus, MFA ‘21, painting her new mural at La Casa, March 2024. Photo by Andina Marie Osorio, Photography MFA ‘24.
      </p>`,
      image: '/assets/images/news/painting_printmaking.jpg',
    },
    {
      title: 'SEPTEMBER 2023',
      subtitle: `
      <p class="subtitle-p">
      JOIN US! NEW STAFF POSITIONS OPEN
      </p>`,
      image: '/assets/images/news/join_us.jpeg',
    },
    {
      title: 'JUNE 30, 2023',
      subtitle: `
      <p class="subtitle-p">
      News from New Haven
      </p>`,
      image: '/assets/images/news/climate_engagement.jpeg',
    },
    {
      title: 'Lonnie Holley & Mourning [A] BLKstar in Concert',
      subtitle: `
      <p class="subtitle-p">
      To you, our current faculty and students, esteemed alumni, and greater community, we send word of what's up in New Haven, and ask that you might keep us updated in kind.
      </p>`,
      image: '/assets/images/news/new_heaven.jpeg',
    }
  ]);
}
