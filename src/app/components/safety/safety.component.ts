import { Component, OnInit } from '@angular/core';
import SafetiesData from '../../data/safeties.json';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {
  safeties = SafetiesData;

  constructor() { }

  ngOnInit() {
  }

}
