using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Model;
using Model;
using System.Linq;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FetchController: ControllerBase
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

        [HttpPost("/controller/fetch/user-article")]
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
            foreach(var article in articles)
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
        
    }
}