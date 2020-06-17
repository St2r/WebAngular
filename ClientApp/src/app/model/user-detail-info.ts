export interface UserDetailInfo {
  username: string;

  // 我的关注数
  follow: number;
  // 我的粉丝数
  fans: number;
  // 用户登级
  level: number;
  // 个人积分
  point: number;
  // 用户发的帖子数量
  articles: number;
  // 帖子被浏览数
  browse: number;
  // 帖子被点赞数
  like: number;
  // 帖子被收藏数
  star: number;
}
