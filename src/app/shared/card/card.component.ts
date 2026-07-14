import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { clothes } from '../../../types/clothes';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product?: clothes;
}
