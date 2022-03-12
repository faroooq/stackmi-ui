import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafePipe } from './pipe/safe.pipe';
import { ArraySortPipe } from './pipe/arraysort.pipe';
import { SeoService } from './seo-service/seo.service';
import { SeoGuard } from './seo-service/seo.guard';
import { RequestCache } from './services/cache.service';
import { ThemeService } from './services/theme.service';
import { CachingInterceptor } from './services/cache.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { TimeFormat } from './pipe/time.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from '../secure/sign-in/sign-in.component';
import { SignUpComponent } from '../secure/sign-up/sign-up.component';
import { UpdatePasswordComponent } from '../secure/update-password/update-password.component';
import { ProfileComponent } from '../secure/profile/profile.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { VerifyComponent } from '../secure/verify/verify.component';
import { ForgotPasswordComponent } from '../secure/forgot-password/forgot-password.component';
import { PaymentsComponent } from '../secure/payments/payments.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightModule, HighlightOptions, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
// import hljs from 'highlight.js';
// document.defaultView['hljs'] = hljs;
// import 'highlightjs-line-numbers.js';
import { WindowService } from './services/window-service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    HighlightModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    SafePipe,
    SignInComponent,
    SignUpComponent,
    UpdatePasswordComponent,
    ProfileComponent,
    TermsComponent,
    PolicyComponent,
    VerifyComponent,
    ForgotPasswordComponent,
    ArraySortPipe,
    PaymentsComponent,
    ShareButtonComponent,
    SocialButtonsComponent
  ],
  providers: [
    HttpClient,
    WindowService,
    SeoService,
    SeoGuard,
    ThemeService,
    CachingInterceptor,
    RequestCache,
    HttpService,
    DatePipe,
    TimeFormat,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true
      }
    }
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    SafePipe,
    SignInComponent,
    SignUpComponent,
    UpdatePasswordComponent,
    ProfileComponent,
    TermsComponent,
    PolicyComponent,
    VerifyComponent,
    ForgotPasswordComponent,
    ArraySortPipe,
    PaymentsComponent,
    ShareButtonComponent,
    SocialButtonsComponent,
    FontAwesomeModule,
    HighlightModule
  ],
})
export class SharedModule { }
