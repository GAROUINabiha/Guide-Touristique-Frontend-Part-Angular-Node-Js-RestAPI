import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeaderComponent implements OnInit {
  images = ["https://www.voyage-tunisie.info/wp-content/uploads/2017/12/sfax2.jpg","https://www.ou-et-quand.net/partir/images/illustration/sfax.jpg","https://pix10.agoda.net/geo/city/10786/1_10786_02.jpg?s=1920x822"];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngOnInit(): void {
  }

}
