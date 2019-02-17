import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PoliciesData from '../../data/policies.json';

@Component({
  selector: 'app-policyview',
  templateUrl: './policyview.component.html',
  styleUrls: ['./policyview.component.css']
})
export class PolicyviewComponent implements OnInit {
  policies = PoliciesData;
  
  policy_id: number;
  policy_title: string;
  policy_description: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.policy_id = +this.route.snapshot.params['id'];

      PoliciesData.forEach((policy) => {
        if (policy.id === this.policy_id) {
          this.policy_title = policy.title;
          this.policy_description = policy.description;
        }

      });

    });

  }

}
