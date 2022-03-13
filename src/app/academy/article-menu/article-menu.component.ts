import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpService } from 'src/app/shared/services/http.service';
import { WindowService } from 'src/app/shared/services/window-service';
import { Article } from '../models';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-article-menu',
  templateUrl: './article-menu.component.html',
  styleUrls: ['./article-menu.component.css']
})
export class ArticleMenuComponent implements OnInit {
  loading: boolean;
  courses: any;
  article: Article;
  url: string;
  isCollapsed: boolean = true;
  windowRef: Window;


  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public http: HttpService,
    private cdRef: ChangeDetectorRef,
    windowRef: WindowService,
  ) {
    this.windowRef = windowRef.getWindow();
    // TODO: Work around, bcs of document object not defined issue, in case of npm run serve:ssr
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (this.router.url.startsWith('/academy/courses/')) {
        this.getCourses(data.title);
      }
      // Angular Beginners Route
      if (this.router.url.startsWith('/academy/article/html')) {
        this.getCourses('html-intro');
      } else if (this.router.url.startsWith('/academy/article/css')) {
        this.getCourses('css-intro');
      } else if (this.router.url.startsWith('/academy/article/js')) {
        this.getCourses('js-intro');
      } else if (this.router.url.startsWith('/academy/article/ts')) {
        this.getCourses('ts-intro');
      } else if (this.router.url.startsWith('/academy/article/ng')) {
        this.getCourses('ng-intro');
      } else if (this.router.url.startsWith('/academy/article/rt')) {
        this.getCourses('rt-intro');
      } else if (this.router.url.startsWith('/academy/article/java')) {
        this.getCourses('java-intro');
      } else if (this.router.url.startsWith('/academy/article/spring')) {
        this.getCourses('spring-intro');
      } else if (this.router.url.startsWith('/academy/article/python')) {
        this.getCourses('python-intro');
      } else if (this.router.url.startsWith('/academy/article/django')) {
        this.getCourses('django-intro');
      }
    });
  }

  // ngAfterViewInit() {
  //   console.log("**********")
  //   if (isPlatformBrowser(this.platformId)) {
  //     var courses = this.windowRef.sessionStorage.getItem('courses');
  //     this.courses = JSON.parse(courses);
  //     this.cdRef.detectChanges();
  //   }
  // }

  getCourses(title) {
    if ($('#sidebar').hasClass('active')) {
      $("#sidebar").toggleClass('active')
    }
    // if (isPlatformBrowser(this.platformId)) {
    //   var courses = this.windowRef.sessionStorage.getItem('courses');
    //   console.log("$$$$$$$$" + courses)
    //   this.courses = JSON.parse(courses);
    //   this.cdRef.detectChanges();
    // }
    this.http.get('courses', title).subscribe(
      data => {
        this.courses = data;
        // console.log(this.courses)
        this.loading = false;
        // if (isPlatformBrowser(this.platformId)) {
        //   this.windowRef.sessionStorage.setItem('courses', JSON.stringify(this.courses));
        // }
      },
      error => {
        // console.log(error);
      });
  }
}
