import { Component, OnInit } from '@angular/core';
import PoliciesData from '../../data/policies.json';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  policies = PoliciesData;

  constructor() { }

  ngOnInit() {
  }

}
