import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SafetiesData from '../../data/safeties.json';

@Component({
  selector: 'app-safetyview',
  templateUrl: './safetyview.component.html',
  styleUrls: ['./safetyview.component.css']
})
export class SafetyviewComponent implements OnInit {
  safety_id: number;
  safety_title: string;
  safety_description: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

        this.route.params.subscribe(params => {
          this.safety_id = +this.route.snapshot.params['id'];

          SafetiesData.forEach((safety) => {
            if (safety.id === this.safety_id) {
              this.safety_title = safety.title;
              this.safety_description = safety.description;
        }

      });

    });

  }

}
