
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { SeoGuard } from '../shared/seo-service/seo.guard';
import { AuthGuard } from '../shared/services/auth.guard';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'events',
      desc: 'StackMi Events are the best way to learn and interact with peers. They can give you a good overview of new technologies and careers. StackMi regularly organises events to keep you updated about industry trends.',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Projects, Coding',
    },
  },
  {
    path: 'event/:id',
    component: RegisterEventComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'event',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'host-event',
    component: CreateEventComponent,
    canActivate: [SeoGuard, AuthGuard],
    data: {
      title: 'StackMi - Scale up your career',
      desc: 'StackMi Academy designed for everyone who wants to revamp their career with Live Sessions, Webinars, Documented Videos..',
      keywords:
        'StackMi, Software, Training, Solutions, Web, Projects, Coding',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
