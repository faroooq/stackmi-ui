import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { UpdatePasswordComponent } from './secure/update-password/update-password.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './shared/policy/policy.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { AuthGuard } from './shared/services/auth.guard';
import { SeoGuard } from './shared/seo-service/seo.guard';
import { SignInComponent } from './secure/sign-in/sign-in.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { TermsComponent } from './shared/terms/terms.component';
import { SignUpComponent } from './secure/sign-up/sign-up.component';
import { VerifyComponent } from './secure/verify/verify.component';
import { ForgotPasswordComponent } from './secure/forgot-password/forgot-password.component';
import { MentorComponent } from './mentor/mentor.component';
import { PaymentsComponent } from './secure/payments/payments.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'mentor',
    component: MentorComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Solutions - Mentor on board',
      desc: 'StackMi Academy brings Mentors on board with Live Events on web technologies. Join with us and mentor students to help them unlock their true potential.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'MD Farooq - Lead Software Analyst',
      desc: 'I am a passionate and pragmatic software engineer more than 13+ years of professional experience and I have taught over many people how to code or how to become professional software engineers through my YouTube channel and Online courses.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'Engage with StackMi, Contact - info@stackmi.com, Whatsapp - +91 9030566011(Whatsapp Only)',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'login',
    component: SignInComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'register',
    component: HomeFormComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'verify',
    component: VerifyComponent
  },
  {
    path: 'updatepwd',
    component: UpdatePasswordComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'forgotpwd',
    component: ForgotPasswordComponent,
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'StackMi Solutions - Live Online Courses',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'policy',
    component: PolicyComponent
  },
  {
    path: 'secure/payments',
    component: PaymentsComponent
  },
  { path: '', loadChildren: () => import('./live-courses/live-courses.module').then(m => m.LiveCoursesModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },
  { path: 'academy', loadChildren: () => import('./academy/learnings.module').then(m => m.LearningsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
