import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveCoursesRoutingModule } from './live-courses-routing.module';
import { LiveCoursesComponent } from './live-courses.component';
import { SharedModule } from '../shared/shared.module';
import { FrontendDevComponent } from './frontend-dev/frontend-dev.component';
import { FtNgCurriculumComponent } from './ft-ng-curriculum/ft-ng-curriculum.component';
import { CourseEnrollComponent } from './course-enroll/course-enroll.component';
import { FtRtCurriculumComponent } from './ft-rt-curriculum/ft-rt-curriculum.component';
import { BdJvCurriculumComponent } from './bd-jv-curriculum/bd-jv-curriculum.component';
import { BdPtCurriculumComponent } from './bd-pt-curriculum/bd-pt-curriculum.component';
import { BackendDevComponent } from './backend-dev/backend-dev.component';
import { CrackJobComponent } from './crack-job/crack-job.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { RegisterCoursesComponent } from './register-courses/register-courses.component';
import { HomeFormComponent } from '../home-form/home-form.component';


@NgModule({
  declarations: [
    LiveCoursesComponent,
    FrontendDevComponent,
    FtNgCurriculumComponent,
    CourseEnrollComponent,
    FtRtCurriculumComponent,
    BdJvCurriculumComponent,
    BdPtCurriculumComponent,
    BackendDevComponent,
    CrackJobComponent,
    AllCoursesComponent,
    RegisterCoursesComponent,
    HomeFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LiveCoursesRoutingModule
  ],
  exports: [
    SharedModule
  ]
})
export class LiveCoursesModule { }
