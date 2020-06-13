using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Model;
using System.Linq;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FetchController : ControllerBase
    {
        private readonly ILogger<FetchController> _logger;

        public FetchController(ILogger<FetchController> logger)
        {
            this._logger = logger;
        }


        public class GetUserArticleForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/fetch/post-article")]
        public List<ArticleInfo> GetUserArticle([FromBody] GetUserArticleForm form)
        {
            var list = new List<ArticleInfo>();
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            var articles = context.Articles.Where(t => t.AuthorId == user.Id);
            list.Add(new ArticleInfo()
            {
                Title = "test"
            });
            foreach (var article in articles)
            {
                var articleInfo = new ArticleInfo()
                {
                    Title = article.Title,
                    AvatarUrl = user.AvatarUrl,
                    Browse = article.Browse,
                    Header = article.Header,
                    IsElite = article.IsElite,
                    IsPinned = article.IsPinned,
                    LastReviewTime = article.LastReviewTime.ToString(),
                    Username = user.UserName,
                    Nickname = user.UserName,
                };
                articleInfo.Like = context.LikeArticles.Count(t => t.ArticleId == article.Id);
                list.Add(articleInfo);
            }

            return list;
        }

        public class GetUserStarArticleForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/fetch/star-article")]
        public List<ArticleInfo> GetUserStarArticle([FromBody] GetUserStarArticleForm form)
        {
            var list = new List<ArticleInfo>();
            list.Add(new ArticleInfo()
            {
                Title = "test_star"
            });
            return list;
        }

        public class GetUserPostForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/fetch/get-post")]
        public List<PostInfo> GetUserPost([FromBody] GetUserPostForm form)
        {
            var list = new List<PostInfo>();
            list.Add(new PostInfo()
            {
                Article = new ArticleInfo()
                {
                    Title = "111"
                }
            });
            return list;
        }

        public class GetHotTopicForm
        {
            public string Block { get; set; }
        }

        public class HotTopic
        {
            public string Title { get; set; }
            public string ArticleId { get; set; }
        }

        [HttpPost("controller/fetch/hot-topic")]
        public List<HotTopic> GetHotTopic([FromBody] GetHotTopicForm form)
        {
            var l = new List<HotTopic>();
            for (int i = 0; i < 3; i++)
            {
                l.Add(new HotTopic()
                {
                    ArticleId = "12"+i,
                    Title = "hh" + i
                });
            }
            return l;
        }
    }
}