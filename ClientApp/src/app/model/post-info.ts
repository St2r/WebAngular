import { ArticleInfo } from './article-info';
import { CommentInfo } from './commentInfo';

export interface PostInfo {
    article: ArticleInfo;
    comment: CommentInfo;
}
