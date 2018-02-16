import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { ProjectModel } from '../models/project.model';

@Injectable()
export class CreateProjectService {

  constructor(private http: HttpClient) { }

public validate(project: ProjectModel): boolean {
  let isValid = true;
  return project.name != null;
}

public saveOrUpdate(project: ProjectModel): Observable<RestResponse>{
  project.id = 1;
  return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",project);
}

}
