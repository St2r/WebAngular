export interface Comment {
  commentId: number;

  // 作者信息
  username: string;
  nickname: string;
  avatarUrl: string;

  content: string;
  likes: number;

  // LikeStatus==0: 未被Like或者Dislike;
  // LikeStatus==1: 被该用户Like;
  // LikeStatus==-1: 被该用户Dislike;
  likeStatus: number;

  // yyyy-mm-dd-hh-mm
  commentTime: string;
}
