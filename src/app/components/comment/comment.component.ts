import { Comment } from './../../models/comment.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Monument } from 'src/app/models/monument.model';
import { MonumentService } from 'src/app/service/monument.service';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  [x: string]: any;
  comment : Comment;
  comments: Observable <Comment[]>;
  comments: Observable<Comment[]>;
  id: number;
  monument: Monument;
  pubMessage: string;
  errorMessage: string;
  loading = false;

  constructor(private route: ActivatedRoute,
    private monumentService :MonumentService,
    private commentService: CommentService,
    private router: Router
)
     { }

  ngOnInit(): void {
        this.comment = new Comment();
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

    this.reloadData();
  }
  reloadData(){
    this.comments=this.commentService.getAllComment();
    }
    create()
    {
      this.commentService.create(this.id,this.comment.pseudo,this.comment.message)
      .subscribe(data => {
        console.log(data);
        this.comment = new Comment();
        this.pubMessage = 'votre commentaire a été ajouté.';
        setTimeout(() => {
          this.pubMessage = null;

    this.reloadData();
          this.router.navigate(['/comment/'+ this.id]);
        }, 4000);

      }, error => console.log(error));
      this.errorMessage = 'erreur';
  }

  onSubmit() {
    this.create();
  }






}
