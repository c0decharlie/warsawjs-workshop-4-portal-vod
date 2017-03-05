import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {VideoService} from "../../services/video.service";
import {Observable} from "rxjs";
import {Video} from "../../models/video";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  public video: Video;
  // public video: Observable<Video>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService,
  ) { }

  ngOnInit() {
    // let id =this.activatedRoute.params.subscribe((params: Params) => {
    //   let videoId = params['videoId'];
    // });
  //
    //   this.video = this.activatedRoute.params
    //     .map((params:any) => params.videoId)
    //     .switchMap(id => this.videoService.get(id))
    // }

    this.activatedRoute.params
      .map((params:any) => params.videoId)
      .switchMap(id => this.videoService.get(id))
      .subscribe(video => {
        this.video = video;
      });

  }

}
