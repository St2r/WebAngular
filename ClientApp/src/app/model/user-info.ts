export interface UserInfo {
  // 用户名
  username: string;
  // 昵称
  nickname: string;
  // 头像地址
  avatarUrl: string;
  // 个人简介
  brief: string;

  // 我的关注数
  follow: number;
  // 我的粉丝数
  fans: number;
  // 个人积分
  point: number;
  // 帖子被浏览数
  browse: number;
  // 帖子被点赞数
  like: number;
  // 帖子被收藏数
  star: number;

  // 该用户被登陆用户关注
  isFollowed: boolean;
  // 该用户关注了登陆用户
  isFan: boolean;
}
