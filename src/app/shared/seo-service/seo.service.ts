import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private title: Title, private meta: Meta) {
    this.meta.updateTag({ name: 'twitter:site', content: 'StackMi' });
    this.meta.updateTag({ property: 'og:site_name', content: 'StackMi' });
  }

  setTitle(title: string): SeoService {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:card', content: "summary" });
    this.meta.updateTag({ property: 'twitter:image:alt', content: title });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:image:alt', content: title });
    return this;
  }

  setMetaData(image: string, url: string): SeoService {
    // console.log(image + ' : ' + url)
    this.meta.updateTag({ name: 'og:type', content: "website" });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'twitter:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'canonical', content: url });
    return this;
  }

  setDescription(description: string): SeoService {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    return this;
  }

  setKeywords(keywords: string): SeoService {
    this.meta.addTag({ name: 'keywords', content: keywords });
    return this;
  }
}
