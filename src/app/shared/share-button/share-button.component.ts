import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { WindowService } from '../services/window-service';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonComponent implements OnInit {

  @Input() type: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp';
  @Input() shareUrl: string;
  navUrl: string;
  windowRef: Window;

  constructor(
    windowRef: WindowService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.windowRef = windowRef.getWindow();
  }

  ngOnInit(): void {
    this.createNavigationUrl();
  }

  private createNavigationUrl() {
    let searchParams = new URLSearchParams();
    switch (this.type) {
      case 'facebook':
        searchParams.set('u', this.shareUrl);
        this.navUrl = 'https://www.facebook.com/sharer/sharer.php?' + searchParams;
        break;
      case 'twitter':
        searchParams.set('url', this.shareUrl);
        this.navUrl = 'https://twitter.com/intent/tweet?' + searchParams;
        break;
      case 'linkedin':
        searchParams.set('url', this.shareUrl);
        this.navUrl = 'https://www.linkedin.com/sharing/share-offsite?' + searchParams;
        break;
    }
  }

  public share() {
    if (isPlatformBrowser(this.platformId)) {
      return this.windowRef.open(this.navUrl, "_blank");
    }
  }

  /* To copy any Text */
  copyText() {
    let selBox = this.windowRef.document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.shareUrl;
    this.windowRef.document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    this.windowRef.document.execCommand('copy');
    this.windowRef.document.body.removeChild(selBox);
  }
}
