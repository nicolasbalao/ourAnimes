import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anime-resume',
  templateUrl: './anime-resume.component.html',
  styleUrls: ['./anime-resume.component.scss']
})
export class AnimeResumeComponent implements OnInit {

  @Input() animeData!: any;

  Object = Object;

  colors!: string[]



  ngOnInit(): void {
    colors
  }

}
