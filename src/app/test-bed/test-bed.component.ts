import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bed',
  templateUrl: './test-bed.component.html',
  styleUrls: ['./test-bed.component.css']
})
export class TestBedComponent implements OnInit {
  title = 'What is broken can be reforged'
  constructor() { }

  ngOnInit(): void {
  }

}
