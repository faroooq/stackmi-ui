import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoGuard } from '../shared/seo-service/seo.guard';
import { LiveCoursesComponent } from './live-courses.component';
import { BackendDevComponent } from './backend-dev/backend-dev.component';
import { BdJvCurriculumComponent } from './bd-jv-curriculum/bd-jv-curriculum.component';
import { BdPtCurriculumComponent } from './bd-pt-curriculum/bd-pt-curriculum.component';
import { CrackJobComponent } from './crack-job/crack-job.component';
import { FrontendDevComponent } from './frontend-dev/frontend-dev.component';
import { FtNgCurriculumComponent } from './ft-ng-curriculum/ft-ng-curriculum.component';
import { FtRtCurriculumComponent } from './ft-rt-curriculum/ft-rt-curriculum.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { RegisterCoursesComponent } from './register-courses/register-courses.component';

const routes: Routes = [
  {
    path: '',
    component: LiveCoursesComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Live Online Courses',
      desc: 'StackMi Academy brings front-end developer, back-end developer, full-stack developer courses for everyone who wants to master in web technologies.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'front-end',
    component: FrontendDevComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Front-end developer program',
      desc: 'StackMi Academy brings front-end developer course for beginners to understand the front-end web technologies from scratch in just 1 month of duration, and masters program to deep dive in Angular.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'back-end',
    component: BackendDevComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Back-end developer program',
      desc: 'StackMi Academy brings back-end developer course for beginners to understand the back-end technologies like java, python from scratch in just 1 month of duration, and masters program to deep dive in Java and Python.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'crack-job',
    component: CrackJobComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Job Cracker with in a week',
      desc: 'StackMi Academy designed job cracker program for candidates attending interviews, facing challenges to get the right job. We have prepared well structured curriculum that help you refresh concepts on frequently asked interview questions, how to build resume, skill development and lot more..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'front-end/ft-ng-cur',
    component: FtNgCurriculumComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Front-end developer angular curriculum',
      desc: 'Master Angular in 1 month, Put simply, Angular is a must-have on your resume. Lucky for you, this course is a full-on, deep-dive into Angular that will give you the competitive edge you’re looking for',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'front-end/ft-rt-cur',
    component: FtRtCurriculumComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Front-end developer react curriculum',
      desc: 'Highly technical with a perfect mix of theory and practice. It covers absolutely every detail you could possibly need to take you from beginner React developer to expert..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'back-end/bd-jv-cur',
    component: BdJvCurriculumComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Back-end developer Java curriculum',
      desc: 'Master in Java Technology in Just 2 month - Yes, I mean it. You will learn java from scratch and master in java in just 2 months of duration and prepare for Oracle Certification.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'back-end/bd-pt-cur',
    component: BdPtCurriculumComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - Back-end developer Python curriculum',
      desc: 'Master in Python, We have designed the course with a perfect mix of theory and practice, packed with real-world examples, exercises and step-by-step solutions - free of "fluff" and lengthy description!',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'all-courses',
    component: AllCoursesComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Technologies - All Courses',
      desc: 'Enroll Live Online Courses and learn from our industry experts and masters.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'register-courses/:id',
    component: RegisterCoursesComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'event',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveCoursesRoutingModule { }
