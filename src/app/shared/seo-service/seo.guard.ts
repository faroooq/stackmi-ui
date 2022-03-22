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
                    "seo_slug": "ts-intro",
                    "seo_title": "Introduction to Typescript",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Typescript/Typescript-seo-intro.png",
                    "seo_desc": "TypeScript is a superset of JavaScript, meaning that it contains all of the functionality of JavaScript and then some. Therefore, any program written in valid JavaScript will also run as expected in TypeScript. In fact, TypeScript compiles simply to plain JavaScript.",
                    "seo_keywords": "Introduction to Typescript, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-let-keyword",
                    "seo_title": "Typescript - Let Keyword",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Typescript/Typescript-seo-let-keyword.png",
                    "seo_desc": "The let declarations follow the same syntax as var declarations. Unlike variables declared with var , variables declared with let have a block-scope.",
                    "seo_keywords": "Typescript Let keyword, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-const-keyword",
                    "seo_title": "Typescript - Const Keyword",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Typescript/Typescript-seo-const-keyword.png",
                    "seo_desc": "We can use const keyword to declare a variable but unlike let and var it must be immediately initialised, with a value that can’t be changed afterwards.",
                    "seo_keywords": "Typescript Const keyword, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-types",
                    "seo_title": "Typescript - Types",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Typescript/Typescript-seo-types.png",
                    "seo_desc": "TypeScripts transpilation mechanism also performs type checking, however it only works when we tell TypeScript the type of things.",
                    "seo_keywords": "Typescript types, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-fat-arrow-function",
                    "seo_title": "Typescript - Fat Arrow Functions",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Typescript/Typescript-seo-fat-arrow.png",
                    "seo_desc": "ES6 has introduced a slightly different syntax to define anonymous functions called the fat arrow syntax.",
                    "seo_keywords": "Typescript fat arrow functions, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-for-of",
                    "seo_title": "Typescript - For, For-of Loop",
                    "seo_image": "",
                    "seo_desc": "We have a couple of ways of looping through Arrays in ES5 JavaScript. For one we have the classic for loop.",
                    "seo_keywords": "Typescript For, For-of, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-map-set",
                    "seo_title": "Typescript - Map and Set",
                    "seo_image": "",
                    "seo_desc": "Map is a new data structure introduced in ES6 which lets you map keys to values without the drawbacks of using Objects.",
                    "seo_keywords": "Typescript Map and Set, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-promises",
                    "seo_title": "Typescript - Callbacks & Promises",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Typescript/Typescript-seo-promises.png",
                    "seo_desc": "When you execute a task synchronously, you wait for it to finish before moving on to the next line of code. When you execute a task asynchronously, the program moves to the next line of code before the task finishes.",
                    "seo_keywords": "Promises and async, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-class-interface",
                    "seo_title": "Typescript - Class and Interfaces",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Typescript/Typescript-seo-class-interface.png",
                    "seo_desc": "JavaScript has a prototype-based, object-oriented programming model. It creates objects using other objects as blueprints and to implement inheritance it manipulates what’s called a prototype chain.",
                    "seo_keywords": "Typescript Class and Interfaces, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-decorators",
                    "seo_title": "Typescript - Decorators",
                    "seo_image": "",
                    "seo_desc": "This is a new feature that will probably make it into the ES7 version of JavaScript, it’s not available right now however even in the ES6 version.",
                    "seo_keywords": "Typescript Decorators, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
                {
                    "seo_slug": "ts-modules",
                    "seo_title": "Typescript - Modules",
                    "seo_image": "",
                    "seo_desc": "By default JavaScript doesn’t have a module system like other languages, e.g. Java or Python. This means that if you wanted to call a function in some other file, you have to remember to explicitly load that file via script tags before you call the function.",
                    "seo_keywords": "Typescript Modules, Typescript, Learn Typescript, Typescript Technology, Web Solutions, Full-stack developer, Learn Typescript Online"
                },
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
                },
                {
                    "seo_slug": "ng-styles-encapsulation",
                    "seo_title": "Angular - View Encapsulation",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-view-encap.png",
                    "seo_desc": "We can restrict CSS styles specific to the component level. This is one of the beautiful feature of Angular. For any component if you add styles to the component, the styles will be applied only to that component, but it won't leak outside to any other component.",
                    "seo_keywords": "Angular View Encapsulation, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-lifecycle-hooks",
                    "seo_title": "Angular - Lifecycle Hooks",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-life-cycle.png",
                    "seo_desc": "A component in Angular has a life-cycle, a number of different phases it goes through from birth to death. We can hook into those different phases to get some pretty fine grained control of our application.",
                    "seo_keywords": "Angular Life cycle hooks, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-view-child-children",
                    "seo_title": "Angular - ViewChild and ViewChildren",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-view-child.png",
                    "seo_desc": "If you want to access the child reference of a given component or the elements used within its template (its view) then we use @ViewChild and @ViewChildren.",
                    "seo_keywords": "Angular View Child and Children, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-content-projection",
                    "seo_title": "Angular - Content Projection",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-content-projection.png",
                    "seo_desc": "If we create our components to support content projection then it enables the consumer of our component to configure exactly how they want the component to be rendered.",
                    "seo_keywords": "Angular Content Projection, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-content-child-children",
                    "seo_title": "Angular - ContentChild and ContentChildren",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-content-child.png",
                    "seo_desc": "To get a reference to the projected content, we can use either the @ContentChild or the @ContentChildren decorators. They work in similar ways to the view child counterparts, @ContentChild returns one child and @ContentChildren returns a QueryList.",
                    "seo_keywords": "Angular Content Child and children, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-route-configuration",
                    "seo_title": "Angular - Route Configuration",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-route-config.png",
                    "seo_desc": "If user wants to navigate from one page to another page we use routing in Angular. To handle the navigation from one view to the next, we use Angular Router. The Router enables navigation by interpreting a browser URL as an instruction to change the view.",
                    "seo_keywords": "Angular Routing, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-route-navigation",
                    "seo_title": "Angular - Routing Navigation",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-route-navigation.png",
                    "seo_desc": "There are times where we need to navigate to different page using dynamic URLs, capture the path params and query params and soon. Angular provides all these features in-built in RouterModule to handle such things.",
                    "seo_keywords": "Angular Route Navigation, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-parameterised-routes",
                    "seo_title": "Angular - Parameterised Routes",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-params-route.png",
                    "seo_desc": "Sometimes we need part of the path in one or more of our routes (the URLs) to be a variable, a common example of this is mobile modelID and versionID.",
                    "seo_keywords": "Angular Parameterised Routes, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-nested-routes",
                    "seo_title": "Angular - Nested Routes",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-nested-routes.png",
                    "seo_desc": "Nested routes allow you to, at the route level, have a parent component control the rendering of a child component.",
                    "seo_keywords": "Angular Nested Routes, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-router-guards",
                    "seo_title": "Angular - Router Guards",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-router-gurards.png",
                    "seo_desc": "With Router Guards we can prevent users from accessing areas that they’re not allowed to access, or, we can ask them for confirmation when leaving a certain area.",
                    "seo_keywords": "Angular Router Guards, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-routing-strategies",
                    "seo_title": "Angular - Routing Strategies",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-routing-strategies.png",
                    "seo_desc": "With client-side SPAs we have two strategies we can use to implement client-side routing, one is called the HashLocationStrategy and the other is called the PathLocationStrategy.",
                    "seo_keywords": "Angular Routing Strategies, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-for-if-switch",
                    "seo_title": "Angular - NgFor, NgIf & NgSwitch",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-if-switch-directives.png",
                    "seo_desc": "We use the NgFor directive to loop over an array of items and create multiple elements dynamically from a template element. With NgIf we can conditionally add or remove an element from the DOM. If we are faced with multiple conditions a cleaner alternative to multiple nested NgIf statements is the NgSwitch series of directives.",
                    "seo_keywords": "Angular For, If, Switch, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-ngstyle-ngclass",
                    "seo_title": "Angular - NgStyle, NgClass & NgNonBindable",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-ngclass-ngstyle.png",
                    "seo_desc": "Both the NgStyle and NgClass directives can be used to conditionally set the look and feel of your application. NgStyle gives you fine grained control on individual properties. But if you want to make changes to multiple properties at once, creating a class which bundles those properties and adding the class with NgClass makes more sense.",
                    "seo_keywords": "Angular NgClass and NgStyle, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-custom-directive",
                    "seo_title": "Angular - Creating a Custom Directive",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-custom-directive.png",
                    "seo_desc": "We create a directive by decorating a class with the @Directive decorator. The convention is to associate a directive to an element via an attribute selector, that is the name of the attribute wrapped in.",
                    "seo_keywords": "Angular Custom Directives, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-hostlistener-hostbinding",
                    "seo_title": "Angular - HostListener and HostBinding",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-host-listener.png",
                    "seo_desc": "By using the @HostListener and @HostBinding decorators we can both listen to output events from our host element and also bind to input properties on our host element as well.",
                    "seo_keywords": "Angular HostListener and HostBinding, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-built-in-pipes",
                    "seo_title": "Angular - Built-In Pipes",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-built-in-pipes.png",
                    "seo_desc": "Pipes enables you to easily transform data for display purposes in templates. Angular comes with a very useful set of pre-built pipes to handle most of the common transformations.",
                    "seo_keywords": "Angular Pipes, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-async-pipes",
                    "seo_title": "Angular - Async Pipe",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-async-pipe.png",
                    "seo_desc": "AsyncPipe is a convenience function which makes rendering data from observables and promises much easier. For promises it automatically adds a then callback and renders the response. For Observables it automatically subscribes to the observable.",
                    "seo_keywords": "Angular Async Pipe, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-custom-pipes",
                    "seo_title": "Angular - Custom Pipe",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-custom-pipe.png",
                    "seo_desc": "Creating a custom pipe is very simple in Angular. We just decorate a class with the @Pipe decorator, provide a name and a transform function and we are done.",
                    "seo_keywords": "Angular Custom Pipe, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-model-driven-forms",
                    "seo_title": "Angular - Model-Driven Forms",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-model-forms.png",
                    "seo_desc": "Forms comes handy when handling user-input and enabling user to log in, update information, and other data-entry tasks. In Angular we have Template Driven Forms and Reactive Forms.",
                    "seo_keywords": "Angular Model Driven Forms, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-model-driven-form-validation",
                    "seo_title": "Angular - Model-Driven Form Validation",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-form-validation.png",
                    "seo_desc": "Validators are rules which an input control has to follow. If the input doesn’t match the rule, then the control is said to be invalid. We can apply validators either by adding attributes to the template or by defining them on our FormControls in our model.",
                    "seo_keywords": "Angular Model Driven Form Validation, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-reactive-model-form",
                    "seo_title": "Angular - Reactive Model Form",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-reactive-model-form.png",
                    "seo_desc": "Reactive forms are better when there needs to be some real-time processing of the form as the user types in content. Handling model-driven forms with submit handlers is better when there needs to be a discrete action applied when the user presses a button.",
                    "seo_keywords": "Angular Reactive Model Form, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
                {
                    "seo_slug": "ng-template-driven-form",
                    "seo_title": "Angular - Template-Driven Form",
                    "seo_image": "https://stackmi-storage.s3.ap-south-1.amazonaws.com/academy-imgs/Angular/Angular-seo-template-driven-form.png",
                    "seo_desc": "We learnt that the template-driven form still uses the same classes as the model-driven form but in the template drive approach the models are created by directives in the template instead of explicitly created on the component.",
                    "seo_keywords": "Angular Template Driven Form, Angular, Learn Angular, Angular Technology, Web Solutions, Full-stack developer, Learn Angular Online"
                },
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
