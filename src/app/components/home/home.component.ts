import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Monument } from 'src/app/models/monument.model';
import { MonumentService } from 'src/app/service/monument.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  monuments: Observable <Monument[]>;

  constructor(private monumentService: MonumentService,
    private router: Router) {}

  ngOnInit(){
    this.reloadData();
  }
  reloadData(){
  this.monuments=this.monumentService.getAllMonument();
  }


  selectMonument(id: Number) {
    this.router.navigate(['monument/' + id]).then();
    }
}
