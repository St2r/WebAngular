export interface UserInfo {
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


  // 签到次数
  loginCount: number;

  // 下两项可选
  birthday: string;
  registerData: string;
}
