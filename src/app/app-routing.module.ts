import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProjectComponent } from "./project/project.component";
import { CreateProjectComponent } from "./create-project/create-project.component";

const routes: Routes = [
    {path: '', redirectTo: '/projectComponent',pathMatch: 'full' },
    {path: 'appComponent', component: AppComponent},
    {path: 'projectComponent', component: ProjectComponent},
    {path: 'createProjectComponent', component: CreateProjectComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule{}

