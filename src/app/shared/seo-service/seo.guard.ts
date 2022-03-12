import { SeoService } from './seo.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class SeoGuard implements CanActivate {
    event: any;
    article: any;

    public constructor(
        private seo: SeoService,
        public http: HttpService,
        public activatedRoute: ActivatedRoute) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const routeTitle = route.data.title;
        if (routeTitle === 'event') {
            const eventMetaSEO = [
                {
                    "seo_slug": "61713c065b3f0d369fb4602d",
                    "seo_title": "Take your Javascript skills to the next level",
                    "seo_desc": "Known as one of the most simple, versatile and effective languages; Javascript is used to extend and enhance the functionality of your websites. It uses a range of on screen visual effects for processing and calculating data on web pages with ease. ",
                    "seo_keywords": "Javascript, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "61705dd5fd61db263e910f08",
                    "seo_title": "Learn How to Architect Angular From Scratch.",
                    "seo_desc": "Angular is a framework for building client applications in HTML and either JavaScript or a language like Type Script that compiles to JavaScript.",
                    "seo_keywords": "Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "6183e399b9634444e3645373",
                    "seo_title": "Top 5 concepts that makes you master in Angular",
                    "seo_desc": "Angular is a framework for building client applications in HTML and either JavaScript or a language like Type Script that compiles to JavaScript.",
                    "seo_keywords": "Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "6183f2fdb9634444e364537f",
                    "seo_title": "Angular ZERO to HERO, Learn from basics",
                    "seo_desc": "Angular is a framework for building client applications in HTML and either JavaScript or a language like Type Script that compiles to JavaScript.",
                    "seo_keywords": "Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                }
            ]
            for (let i = 0; i < eventMetaSEO.length; i++) {
                if (route.params.id === eventMetaSEO[i].seo_slug) {
                    this.seo
                        .setTitle(eventMetaSEO[i].seo_title)
                        .setMetaData(environment.default_imageUrl, environment.eventurl + eventMetaSEO[i].seo_slug)
                        .setDescription(eventMetaSEO[i].seo_desc)
                        .setKeywords(eventMetaSEO[i].seo_keywords);
                    break;
                }
            }
        } else if (routeTitle === 'article') {
            // NEED TO ADD ARTICLE OBJECT HERE & SITEMAP & SUBMIT URL.
            const articlMetaSEO = [
                {
                    "seo_slug": "ng-intro",
                    "seo_title": "Introduction to Angular",
                    "seo_desc": "Angular is one of the most popular Javascript frameworks in the world for building modern web applications. Angular is created & developed by Google and has a huge community support behind it.",
                    "seo_keywords": "Introduction, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-overview",
                    "seo_title": "Angular Overview",
                    "seo_desc": "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Let's walkthrough the necessary files required to run the Angular application.",
                    "seo_keywords": "Angular Overview, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-cli-commands",
                    "seo_title": "Angular CLI Commands",
                    "seo_desc": "Angular now comes with a command-line interface (CLI) to make it easier and faster to build Angular applications.",
                    "seo_keywords": "Angular CLI Commands, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-first-app",
                    "seo_title": "First Angular App",
                    "seo_desc": "Now, Let's create our first angular component with the name Item. We use the below CLI command to create a component.",
                    "seo_keywords": "Angular First App, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-string-interpolation",
                    "seo_title": "String Interpolation",
                    "seo_desc": "String interpolation lets you incorporate dynamic string values into your HTML templates. In other words, it is used to display dynamic data on HTML template.",
                    "seo_keywords": "Angular String Interpolation, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-install-bootstrap",
                    "seo_title": "Install Bootstrap in project",
                    "seo_desc": "Let's install and configure the twitter bootstrap. This helps us to build responsive and apply beautiful styles to our web page.",
                    "seo_keywords": "Angular Bootstrap, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-looping",
                    "seo_title": "Angular Looping",
                    "seo_desc": "Angular comes with buil-in directive ngFor to iterate the array or list items.",
                    "seo_keywords": "Angular Looping, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-property-event-binding",
                    "seo_title": "Property and Event Binding",
                    "seo_desc": "",
                    "seo_keywords": "Angular Event Binding, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-components-inputs",
                    "seo_title": "Angular Components and Inputs",
                    "seo_desc": "One-way data binding will bind the data from the component to the view (DOM) or from view to the component. One-way data binding is unidirectional. You can only bind the data from component to the view or from view to the component.",
                    "seo_keywords": "Angular Components and Inputs, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-css-styling",
                    "seo_title": "Styling Cards using CSS",
                    "seo_desc": "Apply styles to our cards to display our cards more beautiful.",
                    "seo_keywords": "Angular Styling, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-outputs",
                    "seo_title": "User Interaction and Outputs",
                    "seo_desc": "Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.",
                    "seo_keywords": "Angular Outputs, Angular, Learn Angular, Angular Technology, Web Technologies, Full-stack developer, Learn Angular Online"
                }
            ]
            for (let i = 0; i < articlMetaSEO.length; i++) {
                if (route.params.title === articlMetaSEO[i].seo_slug) {
                    this.seo
                        .setTitle(articlMetaSEO[i].seo_title)
                        .setMetaData(environment.default_imageUrl, environment.articleurl + articlMetaSEO[i].seo_slug)
                        .setDescription(articlMetaSEO[i].seo_desc)
                        .setKeywords(articlMetaSEO[i].seo_keywords);
                    break;
                }
            }
        } else if (routeTitle === 'academy' || routeTitle === 'events') {
            this.seo
                .setTitle('StackMi ' + route.data.title)
                .setMetaData(environment.default_imageUrl, environment.defaulturl + route.parent.url.toString())
                .setDescription(route.data.desc)
                .setKeywords(route.data['keywords']);
        }
        else {
            // console.log('Inside else guard ' + route.data.desc)
            this.seo
                .setTitle(route.data.title)
                .setMetaData(environment.default_imageUrl, environment.defaulturl + route.url.toString())
                .setDescription(route.data.desc)
                .setKeywords(route.data['keywords']);
        }
        return true;
    }
}
