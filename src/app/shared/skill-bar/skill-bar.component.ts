import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent implements OnInit {

  constructor() {
    $(document).ready(function () {
      $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
          width: $(this).attr('data-percent')
        }, 6000);
      });
    });
  }

  ngOnInit(): void {
  }

}
