import {Component, OnInit} from '@angular/core';
import {ItemSkill} from "../../models/ItemSkill";
import {
  faAndroid,
  faAngular,
  faDocker,
  faGit,
  faGithub,
  faJava,
  faJsSquare,
  faPython
} from "@fortawesome/free-brands-svg-icons";
import {SkillType} from "../../models/SkillType";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  itemsSkills = [
    new ItemSkill(
      "Python",
      faPython,
      "#306998",
      SkillType.LANGUAGE
    ),
    new ItemSkill(
      "Java",
      faJava,
      "#f89820",
      SkillType.LANGUAGE
    ), new ItemSkill(
      "JavaScript",
      faJsSquare,
      "#f0db4f",
      SkillType.LANGUAGE
    )
    , new ItemSkill(
      "Kotlin",
      faAndroid,
      "#78C257",
      SkillType.LANGUAGE
    ),
    new ItemSkill(
      "Dart",
      faAndroid,
      "#78C257",
      SkillType.LANGUAGE
    ),
    new ItemSkill(
      "Angular",
      faAngular,
      "#a6120d",
      SkillType.LANGUAGE
    ),

    new ItemSkill(
      "Github",
      faGithub,
      "#6e5494",
      SkillType.TECH
    ),
    new ItemSkill(
      "Git",
      faGit,
      "#f34f29",
      SkillType.TECH
    ),
    new ItemSkill(
      "Docker",
      faDocker,
      "#0db7ed",
      SkillType.TECH
    )
  ]

  isMobile=false;


  constructor() {
  }

  ngOnInit(): void {
    this.isMobile=window.innerWidth <=600;
  }

  onResize(event:any) {
    this.isMobile=event.target.innerWidth <=600;
  }
}
