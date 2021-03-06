export interface UserBaseInfo {
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

  // 该用户被登陆用户关注
  isFollowed: boolean;
  // 该用户关注了登陆用户
  isFan: boolean;
}
