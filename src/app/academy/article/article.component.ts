import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from 'src/environments/environment';
import { JsonFormData } from '../json-form/json-form.component';
import { HighlightResult } from 'ngx-highlightjs';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // @ViewChild('iframe') iframe: ElementRef;
  public formData: JsonFormData;
  // article: Article;
  loading: boolean = true;
  frame_available: boolean;
  article: any;
  iFrameCode: any;
  quiz_title: any;
  quiz_desc: any;
  quiz_available: boolean;
  userDetails: any;
  // socialShares: ['copy', 'facebook', 'email', 'messenger', 'mix', 'line', 'linkedin', 'pinterest', 'print', 'reddit', 'sms', 'telegram', 'tumblr', 'twitter', 'viber', 'vk', 'xing', 'whatsapp'];
  // https://ngx-highlight.netlify.app/
  response: HighlightResult;
  articleUrl: string;
  articleImage: string;

  constructor(
    public route: ActivatedRoute,
    private http: HttpService,
    public authService: AuthService,
    public router: Router,
    public httpClient: HttpClient
  ) { }
  // https://www.buzzphp.com/posts/how-to-embed-a-github-gist-in-the-angular-template
  ngOnInit(): void {
    this.articleImage = environment.default_imageUrl;
    this.article = {};
    this.frame_available = false;
    this.quiz_available = false;
    if (this.authService.isLoggedIn()) {
      this.userDetails = this.authService.getUserDetails();
      // console.log(this.userDetails)
    }
    this.route.params
      .subscribe(params => {
        this.articleUrl = environment.articleurl + params.title;
        this.http
          .get('articles', params.title)
          .subscribe((article: any) => {
            this.loading = false;
            this.article = article;
            this.getQuizCode();
          });
        this.http
          .get('quiz-form', params.title)
          // this.httpClient
          // .get('../../assets/json/dynamic_form.json')
          .subscribe((formData: JsonFormData) => {
            this.formData = formData;
            this.loading = false;
          });
      })
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      value: '{...}',
      relevance: e.relevance,
      top: '{...}',
      code: '{...}',
      illegal: false
    }
  }

  getQuizCode() {
    if (this.article) {
      for (let content of this.article.article_content) {
        if (content.content_title === 'Skill Test') {
          let quiz = content.content_desc;
          if (quiz !== '') {
            this.quiz_available = true;
          }
          this.quiz_title = content.content_title;
          this.quiz_desc = content.content_desc;
        }
      }
    }
  }
  navigate(url) {
    this.router.navigateByUrl(url);
  }

  signIn() {
    this.router.navigateByUrl('login');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

  signOut() {
    setTimeout(() => {
      this.authService.logout();
    }, 1000);
  }
}
