export interface BlockInfo {
  block_name: String;
  // 0 - 板块不存在
  // 1 - 板块无权限访问
  // 2 - 正常访问
  accessRight: number;
  followed: boolean;
  contentTotal: number;
  followTotal: number;
  todayTotal: number;
  masters: Master[];
}

export interface Master {
  userId: string;
  avatarUrl: string;
}