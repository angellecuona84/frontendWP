import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { ProjectModel } from '../models/project.model';


@Injectable()
export class ProjectService {


  getProjects(): Observable<ProjectModel[]> {
    /*this.http.get("http://localhost:8080/getProjects").subscribe(res =>{
      this.projects = res as ProjectModel[];
    });*/
    return this.http.get<ProjectModel[]>("http://localhost:8080/getProjects");
  }
  constructor(private http: HttpClient) {

   }

}
