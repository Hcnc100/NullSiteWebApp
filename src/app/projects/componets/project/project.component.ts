import {Component, OnInit} from '@angular/core';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {ProjectsService} from '../../services/projects.service';
import {Project} from "../../models/project";
import {Observable} from "rxjs";
import { ResizeService } from 'src/app/services/resize/resize.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  icon = faGithub;
  isOverFlowProjects = false;
  isMobile: Observable<boolean>;
  listProjects: Observable<Project[]>;

  constructor( fireProjectService: ProjectsService, resizeService:ResizeService) {
    this.listProjects = fireProjectService.listProjects;
    this.isMobile=resizeService.isMobileSize
    resizeService.widthSize.subscribe((width:number)=>{
      this.isOverFlowProjects = width <= 350;
    })
  }

  ngOnInit(): void {
  }

  goToEditProject() {

  }
}
