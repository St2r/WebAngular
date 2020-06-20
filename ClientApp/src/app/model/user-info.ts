export interface UserInfo {
  // 用户名
  username: string;
  // 昵称
  nickname: string;
  // 头像地址
  avatarUrl: string;
  // 个人简介
  brief: string;

  // // 用户为管理员
  // isAdmin: boolean;
  // 用户状态（正常访问/被封禁）
  account_status: boolean;

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

  // 该用户被登陆用户关注
  isFollowed: boolean;
  // 该用户关注了登陆用户
  isFan: boolean;

  // 签到次数
  loginCount: number;

  // yyyy-mm-dd
  birthday: string;
  // yyyy-mm-dd
  registerData: string;
}
