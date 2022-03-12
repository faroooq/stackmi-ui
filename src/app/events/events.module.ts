import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EventsComponent,
    CreateEventComponent,
    RegisterEventComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ],
  entryComponents: [EventsComponent]
})
export class EventsModule { }
