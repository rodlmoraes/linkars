import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KarsService, Kar } from '../kars.service';

@Component({
  selector: 'app-kar-details',
  templateUrl: './kar-details.component.html',
})
export class KarDetailsComponent implements OnInit {

  kar: Kar
  constructor(private route: ActivatedRoute, private karsService: KarsService) { }

  ngOnInit() {
    this.getPageData()
  }

  getPageData() {
    this.route.params.subscribe(params => {
      this.karsService.getKar(params._id).subscribe((kar: Kar) => {
        this.kar = kar
      })
    })
  }
}
