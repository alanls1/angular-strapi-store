import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ClothesService } from '../../services/clothes.service';
import { clothes } from '../../../types/clothes';

@Component({
  selector: 'app-hero',
  imports: [CardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  public items: clothes[] = [];

  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe((clothes) => {
      this.items = clothes;
    });
  }
}
