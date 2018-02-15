import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProjectComponent } from "./project/project.component";

const routes: Routes = [
    {path: '', redirectTo: '/projectComponent',pathMatch: 'full' },
    {path: 'appComponent', component: AppComponent},
    {path: 'projectComponent', component: ProjectComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule{}

