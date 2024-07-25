import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkillsComponent } from "./shared/components/skills/skills.component";
import { ProfileComponent } from "./shared/components/profile/profile.component";
import { ProjectsComponent } from "./shared/components/projects/projects.component";
import { ContactComponent } from "./shared/components/contact/contact.component";
import { AboutComponent } from "./shared/components/about/about.component";


const routes : Routes = [{
    path : '',
    component : ProfileComponent
},
{
    path : 'about',
    component : AboutComponent
},
{
    path : 'skills',
    component : SkillsComponent
},
{
    path : 'projects',
    component : ProjectsComponent
},
{
    path : 'contact',
    component : ContactComponent
}]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRouting {}