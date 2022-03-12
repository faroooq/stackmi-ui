import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO: Work around, bcs of document object not defined issue, in case of npm run serve:ssr
    // const collapsibles = document.querySelectorAll(".collapsible");
    // collapsibles.forEach((item) =>
    //   item.addEventListener("click", function () {
    //     this.classList.toggle("collapsible--expanded");
    //   })
    // );
  }

}
