import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-view',
  templateUrl: './tv-view.component.html',
  styleUrls: ['./tv-view.component.css']
})
export class TvViewComponent implements OnInit {


  //  var buttons = document.querySelectorAll('.television__channel a');
  //
  // for(var i = 0; i < buttons.length; i++) {
  // buttons[i].addEventListener('click', function(e) {
  //   document.querySelector('.television__screen iframe').src = this.href;
  //   e.preventDefault();
  // });

  constructor() { }

  ngOnInit() {
  }

}
