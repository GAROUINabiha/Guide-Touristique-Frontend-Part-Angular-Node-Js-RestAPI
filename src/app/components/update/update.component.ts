import { Monument } from 'src/app/models/monument.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonumentService } from 'src/app/service/monument.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id: number;
  monument : Monument;
  submitted=false;

  constructor(private route: ActivatedRoute,private router: Router,
    private monumentService: MonumentService) { }

  ngOnInit() {
    this.monument = new Monument();

    this.id = this.route.snapshot.params['id'];

    this.monumentService.getSingle(this.id)
      .subscribe(data => {
        console.log(data)
        this.monument = data;
      }, error => console.log(error));
  }
  update() {
    this.monumentService.update(this.id, this.monument)
      .subscribe(data => {
        console.log(data);
        this.monument = new Monument();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted=true;
    this.update();
  }

  gotoList() {
    this.router.navigate(['/admin']);
  }

}
