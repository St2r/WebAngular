import {ArticleInfo} from './article-info';
import {CommentInfo} from './commentInfo';

export interface PostInfo {
  username: string;
  article: ArticleInfo;
  comment: CommentInfo;
}
