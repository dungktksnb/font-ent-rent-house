import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {Comment} from "../../model/comment";
import {getAll} from "@angular/fire/remote-config";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private service: CommentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.comments = data;
    });
  }
}
