import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { WindowService } from "./window-service";
import { isPlatformBrowser } from "@angular/common";

export interface UserDetails {
  _id: string;
  email: string;
  user_name: string;
  exp: number;
  iat: number;
  mobile: number;
}

interface TokenResponse {
  token: string;
  user_verified: boolean
}

export interface TokenPayload {
  id?: string;
  email?: string;
  password?: string;
  user_name?: string;
  mobile?: string;
}

const baseUrl = environment.midtierurl

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private token: string;
  windowRef: Window;

  constructor(
    private http: HttpClient,
    private router: Router,
    windowRef: WindowService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.windowRef = windowRef.getWindow();
  }

  private saveToken(token: string): void {
    // console.log('token : ' + token)
    if (isPlatformBrowser(this.platformId)) {
      this.windowRef.localStorage.setItem("mean-token", token);
    }
    this.token = token;
  }

  public getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.token) {
        this.token = this.windowRef.localStorage.getItem("mean-token");
      }
    }
    return this.token;
  }

  private request(
    method: "post" | "update" | "get",
    type: "login" | "register" | "verify" | "profile" | "profileupdate" | "updatepwd" | "forgotpwd",
    user?: TokenPayload
  ): Observable<any> {
    let base$;
    // console.log('method : ' + method + ' type : ' + type)
    if (method === "post") {
      base$ = this.http.post(`${baseUrl}/${type}`, user);
    } else if (method === "update") {
      base$ = this.http.post(`${baseUrl}/${type}`, user);
    } else {
      base$ = this.http.get(`${baseUrl}/${type}`);
    }
    const request = base$.pipe(
      map((data: TokenResponse) => {
        if (data.token && data.user_verified) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public logout(): void {
    this.token = "";
    if (isPlatformBrowser(this.platformId)) {
      this.windowRef.localStorage.removeItem("mean-token");
    }
    this.router.navigateByUrl("/");
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      if (isPlatformBrowser(this.platformId)) {
        payload = this.windowRef.atob(payload);
        return JSON.parse(payload);
      }
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public signup(user: TokenPayload): Observable<any> {
    // console.log(JSON.stringify(user))
    return this.request("post", "register", user);
  }

  public verify(id: TokenPayload): Observable<any> {
    // console.log(JSON.stringify(user))
    return this.request("post", "verify", id);
  }

  public updatePassword(id: TokenPayload): Observable<any> {
    // console.log(JSON.stringify(user))
    return this.request("post", "updatepwd", id);
  }

  public forgotPassword(id: TokenPayload): Observable<any> {
    // console.log(JSON.stringify(user))
    return this.request("post", "forgotpwd", id);
  }

  public updateUser(user: TokenPayload): Observable<any> {
    return this.request("update", "profileupdate", user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request("post", "login", user);
  }

  public profile(): Observable<any> {
    return this.request("get", "profile");
  }
}