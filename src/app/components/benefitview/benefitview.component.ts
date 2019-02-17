import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import BenefitsData from '../../data/benefits.json';


@Component({
  selector: 'app-benefitview',
  templateUrl: './benefitview.component.html',
  styleUrls: ['./benefitview.component.css']
})
export class BenefitviewComponent implements OnInit {
  benefits = BenefitsData;

  benefit_id: number;
  benefit_title: string;
  benefit_description: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.benefit_id = +this.route.snapshot.params['id'];

      BenefitsData.forEach((benefit) => {
        if (benefit.id === this.benefit_id) {
          this.benefit_title = benefit.title;
          this.benefit_description = benefit.description;
        }

      });

    });
  }

}
