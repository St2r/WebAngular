import { ArticleInfo } from './article-info';
import { Comment } from './comment';

export interface PostInfo {
    article: ArticleInfo;
    comment: Comment;
}