export interface ArticleContent {
  // 文章ID
  articleID: string;
  // 文章标题
  title: string;
  // 文章标签
  tags: string[];
  // 文章权限
  limit: number;
  // 文章内容
  content: string;

  // 楼主用户名
  username: string;
}
