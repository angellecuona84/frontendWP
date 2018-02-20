import { StepModel } from './../models/step.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

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

  constructor(private projectService: ProjectService,
               private router: Router) { }

  ngOnInit() {
    this.loadProjects();
  }

  private loadProjects(): void{
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
    });
    
  }

  public edit(project: ProjectModel): void {
    sessionStorage.setItem("project", JSON.stringify(project));
    this.router.navigate(['/createProjectComponent']);
  }

  public delete(project: ProjectModel): void {
    this.projectService.delete(project);
    this.loadProjects();
  }

}
