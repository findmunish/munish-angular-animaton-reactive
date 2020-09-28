import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-show-hide-component',
  templateUrl: './show-hide-component.component.html',
  styleUrls: ['./show-hide-component.component.css'],
  animations: [
                trigger('childAnimation',[
                  state('open', style({
                    width: '250px',
                    opacity: 1,
                    backgroundColor: 'green'
                  })),
                  state('close', style({
                    width: '100px',
                    opacity: 0.5,
                    backgroundColor: 'red'
                  })),
                  transition('* =>*', [animate('1s')])
                ]),
                trigger('showHide',[
                  state('show', style({
                      width: "250px",
                      opacity: 1,
                      backgroundColor: "gray",
                      display: 'block'
                    })
                  ),
                  state('hide', style({
                      display: "none"
                    })
                  ),
                  transition("* =>*", [animate("1s")]),
                ])
              ]
})
export class ShowHideComponentComponent implements OnInit {

  constructor() { }
  ngOnInit() {}
  isDisabled = false;
  isOpen  = false;
  toggleAnimations() {
    this.isDisabled = !this.isDisabled;
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  isShow = true
  toggleDisplay() {
    this.isShow = !this.isShow
  }
}