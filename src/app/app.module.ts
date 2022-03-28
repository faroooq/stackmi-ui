import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './shared/contact/contact.component';
import { AboutComponent } from './shared/about/about.component';
import { MentorComponent } from './mentor/mentor.component';
import { MentorSignupComponent } from './mentor/mentor-signup/mentor-signup.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillBarComponent } from './shared/skill-bar/skill-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MentorComponent,
    MentorSignupComponent,
    SkillBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'stackmi' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
