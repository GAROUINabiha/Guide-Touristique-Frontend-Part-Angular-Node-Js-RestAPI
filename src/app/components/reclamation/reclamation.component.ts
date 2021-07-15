import { Reclamation } from './../../models/reclamation.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();
  submitted = false;
  pubMessage: string;
  errorMessage: string;
  loading = false;
  constructor(private reclamationService: ReclamationService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newMonument(): void {
    this.submitted = false;
    this.reclamation= new Reclamation();
  }

  save() {
    this.reclamationService.create(this.reclamation).subscribe(data => {
      console.log(data)
      this.reclamation = new Reclamation();
      this.pubMessage = 'votre reclamation a été envoyée.';
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
