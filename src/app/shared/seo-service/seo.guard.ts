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
                    "seo_image": "",
                    "seo_desc": "Known as one of the most simple, versatile and effective languages; Javascript is used to extend and enhance the functionality of your websites. It uses a range of on screen visual effects for processing and calculating data on web pages with ease. ",
                    "seo_keywords": "Javascript, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "61705dd5fd61db263e910f08",
                    "seo_title": "Learn How to Architect Angular From Scratch.",
                    "seo_image": "",
                    "seo_desc": "Angular is a framework for building client applications in HTML and either JavaScript or a language like Type Script that compiles to JavaScript.",
                    "seo_keywords": "Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "6183e399b9634444e3645373",
                    "seo_title": "Top 5 concepts that makes you master in Angular",
                    "seo_image": "",
                    "seo_desc": "Angular is a framework for building client applications in HTML and either JavaScript or a language like Type Script that compiles to JavaScript.",
                    "seo_keywords": "Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "6183f2fdb9634444e364537f",
                    "seo_title": "Angular ZERO to HERO, Learn from basics",
                    "seo_image": "",
                    "seo_desc": "Angular is a framework for building client applications in HTML and either JavaScript or a language like Type Script that compiles to JavaScript.",
                    "seo_keywords": "Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                }
            ]
            for (let i = 0; i < eventMetaSEO.length; i++) {
                if (route.params.id === eventMetaSEO[i].seo_slug) {
                    this.seo
                        .setTitle(eventMetaSEO[i].seo_title)
                        .setMetaData(eventMetaSEO[i].seo_image ? eventMetaSEO[i].seo_image : environment.default_imageUrl, environment.eventurl + eventMetaSEO[i].seo_slug)
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
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo_intro.png",
                    "seo_desc": "Angular is one of the most popular Javascript frameworks in the world for building modern web applications. Angular is created & developed by Google and has a huge community support behind it.",
                    "seo_keywords": "Introduction, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-overview",
                    "seo_title": "Angular Overview",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-overview.png",
                    "seo_desc": "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Let's walkthrough the necessary files required to run the Angular application.",
                    "seo_keywords": "Angular Overview, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-cli-commands",
                    "seo_title": "Angular CLI Commands",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-cli%20command.png",
                    "seo_desc": "Angular now comes with a command-line interface (CLI) to make it easier and faster to build Angular applications.",
                    "seo_keywords": "Angular CLI Commands, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-first-app",
                    "seo_title": "First Angular App",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-first-app.png",
                    "seo_desc": "Now, Let's create our first angular component with the name Item. We use the below CLI command to create a component.",
                    "seo_keywords": "Angular First App, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-string-interpolation",
                    "seo_title": "String Interpolation",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-string-inter.png",
                    "seo_desc": "String interpolation lets you incorporate dynamic string values into your HTML templates. In other words, it is used to display dynamic data on HTML template.",
                    "seo_keywords": "Angular String Interpolation, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-install-bootstrap",
                    "seo_title": "Install Bootstrap in project",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-install-bootstrap.png",
                    "seo_desc": "Let's install and configure the twitter bootstrap. This helps us to build responsive applications and apply beautiful styles to our web page.",
                    "seo_keywords": "Angular Bootstrap, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-looping",
                    "seo_title": "Angular Looping",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-ngfor-directive.png",
                    "seo_desc": "Angular comes with buil-in directive ngFor to iterate the array or list items.",
                    "seo_keywords": "Angular Looping, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-property-event-binding",
                    "seo_title": "Property and Event Binding",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-property-binding.png",
                    "seo_desc": "Property binding in Angular helps us set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.",
                    "seo_keywords": "Angular Event Binding, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-components-inputs",
                    "seo_title": "Angular Components and Inputs",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-inputs.png",
                    "seo_desc": "Angular is a set of custom components glued together in HTML via inputs and outputs. So far we’ve only built applications with a single component, our goal now is to start building applications that are composed of multiple components working together.",
                    "seo_keywords": "Angular Components and Inputs, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-css-styling",
                    "seo_title": "Styling Cards using CSS",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-styling-cards.png",
                    "seo_desc": "Now let's apply styles to our cards to display our cards more beautiful using twitter bootstrap.",
                    "seo_keywords": "Angular Styling, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-outputs",
                    "seo_title": "User Interaction and Outputs",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-output.png",
                    "seo_desc": "We use @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.",
                    "seo_keywords": "Angular Outputs, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                }
            ]
            for (let i = 0; i < articlMetaSEO.length; i++) {
                if (route.params.title === articlMetaSEO[i].seo_slug) {
                    this.seo
                        .setTitle(articlMetaSEO[i].seo_title)
                        .setMetaData(articlMetaSEO[i].seo_image ? articlMetaSEO[i].seo_image : environment.default_imageUrl, environment.articleurl + articlMetaSEO[i].seo_slug)
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
