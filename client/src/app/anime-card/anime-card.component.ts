import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent implements OnInit {

  @Input() anime!: any;

  constructor() { }

  ngOnInit(): void {
    console.log("section", this.anime);
  }

}
