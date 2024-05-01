import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TCard } from '../../../core/types/card-data.type';

@Component({
  selector: 'yale-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data!: TCard;
}
