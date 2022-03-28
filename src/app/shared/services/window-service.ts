import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import hljs from 'highlight.js';
import hljss from 'highlightjs-line-numbers.js'; // DON'T REMOVE THIS IMPORT

@Injectable({
    providedIn: 'root'
})
export class WindowService {
    constructor(@Inject(DOCUMENT) private doc: Document) {
        doc.defaultView['hljs'] = hljs;
    }

    getWindow(): Window | null {
        return this.doc.defaultView;
    }

    getLocation(): Location {
        return this.doc.location;
    }

    createElement(tag: string): HTMLElement {
        return this.doc.createElement(tag);
    }
}