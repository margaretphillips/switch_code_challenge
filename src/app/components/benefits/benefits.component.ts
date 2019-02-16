import { Component, OnInit } from '@angular/core';
import BenefitsData from '../../data/benefits.json';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
  benefits = BenefitsData;

  constructor() { }

  ngOnInit() {
  }

}
