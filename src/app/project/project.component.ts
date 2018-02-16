import { Component, OnInit } from '@angular/core';

import { ProjectService } from './project.service';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

private projects: Array<ProjectModel>

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  private loadProjects(): void{
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
      console.log(this.projects);
    });
  }

}
