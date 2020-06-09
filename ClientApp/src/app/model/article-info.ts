export interface ArticleInfo {
  // 文章标题
  title: string;
  // 文章头
  header: string;
  // 封面 可选
  coverUrl: string;

  // 点赞数
  like: number;
  // 回复数
  review: number;
  // 浏览数
  browse: number;
  // 收藏数
  star: number;

  // 最后回复时间
  lastReviewTime: string;

  // 楼主信息
  // 用户名
  username: string;
  // 昵称
  nickname: string;
  // 头像
  avatarUrl: string;

  // 是否为置顶文章
  isPinned: boolean;
  // 是否为精华文章
  isElite: boolean;
}
