import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spamer',
  templateUrl: './spamer.component.html',
  styleUrls: ['./spamer.component.css']
})
export class SpamerComponent implements OnInit {

  @Input () testo = String;

  constructor() { }

  ngOnInit() {
  }

}
