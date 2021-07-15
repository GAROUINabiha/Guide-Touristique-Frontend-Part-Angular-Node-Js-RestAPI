import { MonumentService } from './../../service/monument.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Monument } from 'src/app/models/monument.model';

@Component({
  selector: 'app-monument',
  templateUrl: './monument.component.html',
  styleUrls: ['./monument.component.scss']
})
export class MonumentComponent implements OnInit {
  [x: string]: any;
  id: number;
  monument: Monument;
  thumbImages: any[] = [];

  constructor( private route: ActivatedRoute,
    private monumentService: MonumentService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    )
    .subscribe(prodId => {
      this.id = prodId;
      this.monumentService.getSingle(this.id).subscribe(prod => {
        this.monument = prod;
      });
    });
  }

  selectMonumentt(id: Number) {
    this.router.navigate(['comment/' + id]).then(); }
}
