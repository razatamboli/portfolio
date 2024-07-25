import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavabrComponent } from './shared/components/navabr/navabr.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutComponent } from './shared/components/about/about.component';
import { AppRouting } from './app-routing';
import { ResumeComponent } from './shared/components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    SkillsComponent,
    ProfileComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
