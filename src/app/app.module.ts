import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { EducationListComponent } from './education/education-list.component';
import { MapDivComponent } from './map-div/map-div.component';
import { FooterComponent } from './footer/footer.component';
import { WorksListComponent } from './works/works-list.component';
import { BiografiaService } from './services/biografia/biografia.service';
import { ContactService } from './services/contact/contact.service';
import { SkillsService } from './services/skills/skills.service';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { WorksService } from './services/works/works.service';
import { ProjectsService } from './services/projects/projects.service';
import { SchoolsService } from './services/schools/schools.service';
import { OcourseService } from './services/ocourse/ocourse.service';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsListComponent,
    EducationListComponent,
    MapDivComponent,
    FooterComponent,
    WorksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAD0P5JkLyty6TdAmdVSY8_fvXhWDLi0K8'
    })
  ],
  providers: [BiografiaService, HttpClient, ContactService, SkillsService, WorksService, ProjectsService, SchoolsService, OcourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
