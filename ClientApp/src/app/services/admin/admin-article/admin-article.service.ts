import {Inject, Injectable} from '@angular/core';
import {ArticleInfo} from '../../../model/article-info';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminArticleService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public GetAllArticle(): Promise<ArticleInfo[]> {
    return null;
  }

  public SetSelected(articleId: number): Promise<boolean> {
    return;
  }

  public SetTopped(articleId: number): Promise<boolean> {
    return;
  }

  public DeleteArticle(articleId: number): Promise<boolean> {
    return;
  }
}
