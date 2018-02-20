import { StepModel } from './../models/step.model';
import { ProjectComponent } from './../project/project.component';
import { Router } from '@angular/router';
import { ProjectModel } from './../models/project.model';
import { Component, OnInit } from '@angular/core';

import { CreateProjectService } from './create-project.service';
import { OK } from '../models/httpstatus';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [CreateProjectService]
})
export class CreateProjectComponent implements OnInit {

private project: ProjectModel;
private isValid: boolean = true;
private message: String = "";
private steps: Array<StepModel>;

  constructor(private createProjectService: CreateProjectService, private router: Router) { 
    var projectJson: string = sessionStorage.getItem("project");
    
    
    if(projectJson){
      this.project = JSON.parse(projectJson)
      this.stepsByProject(this.project);
      console.log(this.stepsByProject(this.project));
      
    }else{
      this.project = new ProjectModel();
    }
    console.log(this.project);
  }

  ngOnInit() {

  }

  public saveOrUpdate(): void { 
    let isValid = this.createProjectService.validate(this.project);
    
    if(isValid){
      console.log(this.steps);
      this.project.steps = this.steps;
      this.createProjectService.saveOrUpdate(this.project).subscribe(res => {
        let r: RestResponse = res;
        if(r.responseCode = OK){
          this.router.navigate(['/projectComponent']);
        }else{
          this.message = r.message;
          this.isValid = false;
        }
      })
    }else{
      this.message = "Project incomplete, missing required fields";
      this.isValid = false;
    }
    sessionStorage.clear();
  }


  public stepsByProject(project: ProjectModel): Array<StepModel> { 
    var result: Array<StepModel> = new Array();
    let isValid = this.createProjectService.validate(this.project);
    
    if(isValid){
      this.createProjectService.stepsByProject(this.project).subscribe(res => {
       this.steps = res;
      })
    }
    return result;
  }

  public viewProject(): void{
    this.router.navigate(['/projectComponent']);
  }

}
