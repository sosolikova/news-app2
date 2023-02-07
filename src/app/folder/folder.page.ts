import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesEntity } from '../interfaces/news-response';
import { NewsapiService } from '../services/newsapi.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  newsList!: ArticlesEntity[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsApiService: NewsapiService
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTopHeadlines();

  }

  getTopHeadlines() {
    this.newsApiService.getTopCountryHeadlines('cz',this.folder)
    .pipe(map((res: any) => res.articles))
  .subscribe((news) => (this.newsList = news));
  }

}
