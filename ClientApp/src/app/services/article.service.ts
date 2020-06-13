import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public newArticle(value: { author: string, title: string, tags: [...string[]], limit: string, content: string, cover: File }) {
    const form = new FormData();
    form.append('author', value.author);
    form.append('title', value.title);
    form.append('tags', value.tags.join('/'));
    form.append('content', value.content);
    form.append('cover', value.cover);
    this.http.post<boolean>(this.baseUrl + 'controller/article/new', form).subscribe();
  }

  public newComment(value: { author: string, content: string }) {
    this.http.post<boolean>(this.baseUrl + 'controller/comment/new', value).subscribe();
  }
}
