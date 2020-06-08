export interface ArticleInfo {
  // 文章标题
  Title: string;
  // 文章头
  Header: string;
  // 浏览数
  Browse: number;
  // 回复数
  Review: number;
  // 最后回复时间
  LastReviewTime: string;

  // 楼主信息
  // 用户名
  Username: string;
  // 昵称
  Nickname: string;
  // 头像
  AvatarUrl: string;

  // 是否为置顶文章
  IsPinned: boolean;
  // 是否为精华文章
  IsElite: boolean;
}
