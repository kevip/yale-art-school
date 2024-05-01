import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TCard } from '../../../core/types/card-data.type';

@Component({
  selector: 'yale-card-news',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-news.component.html',
  styleUrl: './card-news.component.scss'
})
export class CardNewsComponent {
  @Input() data!: TCard;
}
