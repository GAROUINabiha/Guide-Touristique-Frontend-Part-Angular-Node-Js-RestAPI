import { Monument } from 'src/app/models/monument.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { MonumentService } from 'src/app/service/monument.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  id:number;


  [x: string]: any;
  monuments: Observable <Monument[]>;
  monuments: Observable<Monument[]>;

  constructor(private monumentService: MonumentService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData() {
    this.monuments= this.monumentService.getAllMonument();
  }

  deletem(id: number) {
    this.monumentService.deletem(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  selectMonument(id: Number) {
    this.router.navigate(['update/' + id]).then();
    }
   creer() {
      this.router.navigate(['create/']).then();
      }
}
