import {Component, Input, OnInit} from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { Project } from '../../models/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: Project | undefined
  icon = faGithub;

  constructor() {
  }

  ngOnInit(): void {
  }
}
