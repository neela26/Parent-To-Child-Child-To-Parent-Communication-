import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {

  @Input() public ParentData;
  constructor() { }

  ngOnInit() {
  }

}
