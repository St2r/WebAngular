export interface BlockInfo {
  // 访问权限
  // 0 - 板块不存在
  // 1 - 板块无权限访问
  // 2 - 正常访问
  accessRight: number;

  // 登陆用户是否关注了当前板块
  isFollowed: boolean;

  // 该板块的文章总数
  contentTotal: number;
  // 多少人关注了该板块
  followTotal: number;
  // 今日新增文章数
  todayTotal: number;

  // 管理员列表
  admins: AdminInfo[];
}

export interface AdminInfo {
  username: string;
  nickname: string;
  avatarUrl: string;

  // 身份
  // 0 - 版主
  // 1 - 管理员
  identity: number;
}
