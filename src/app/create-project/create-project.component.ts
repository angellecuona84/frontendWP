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

  constructor(private createProjectService: CreateProjectService, private router: Router) { 
    this.project = new ProjectModel();
    //this.project.name = "Angel";
  }

  ngOnInit() {

  }

  public saveOrUpdate(): void { 
    let isValid = this.createProjectService.validate(this.project);
    console.log(this.project);
    
    if(isValid){
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
  }

}
