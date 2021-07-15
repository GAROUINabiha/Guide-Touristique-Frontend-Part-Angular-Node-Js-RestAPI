import { Monument } from './../../models/monument.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonumentService } from 'src/app/service/monument.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  monument: Monument = new Monument();
  submitted = false;

  constructor(private monumentService: MonumentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newMonument(): void {
    this.submitted = false;
    this.monument= new Monument();
  }

  save() {
    this.monumentService.create(this.monument).subscribe(data => {
      console.log(data)
      this.monument = new Monument();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/admin']);
  }

}
