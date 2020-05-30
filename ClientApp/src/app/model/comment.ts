export interface Comment {
  AuthorID: string;
  AuthorName: string;
  Content: string;
  Likes: number;
  Dislikes: number;

  // LikeStatus==0: 未被Like或者Dislike;
  // LikeStatus==1: 被该用户Like;
  // LikeStatus==-1: 被该用户Dislike;
  LikeStatus: number;
  CommentTime: Date;
}
