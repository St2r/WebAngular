using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Model;
using WebAngular.Model;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticleController : ControllerBase
    {
        private ILogger<ArticleController> _logger;

        public ArticleController(ILogger<ArticleController> logger)
        {
            this._logger = logger;
        }

        public class GetArticleForm
        {
            public string Block { get; set; }
            public string Sort { get; set; }
            public string Filter { get; set; }
            public int PageSize { get; set; }
            public int Page { get; set; }
        }
        
        [HttpPost("/controller/article/get-article")]
        public IEnumerable<ArticleInfo[]> GetArticle([FromBody] GetArticleForm form)
        {
            var res = Enumerable.Empty<ArticleInfo[]>();
            var articles = new ArticleInfo[form.PageSize];
            MyContext context = new MyContext();
            var articleentity = context.Articles.ToList();
            for (var i = 0; i < form.PageSize; i++)
            {
                var item = new ArticleInfo
                {
                    Title = form.Block + "_" + form.Sort + "_" + form.Filter + "_" + form.Page + "_" + i,
                    Header = "Header" + form.Page + "_" + i + "大概50个字大概50个字大概50个字大概50个字大概50个字大概50个字大概50个字大概50个字大概50个字",
                    CoverUrl = "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
                    Like = 100, Review = 99, Browse = 98, Star = 97,

                    LastReviewTime = "2020-2-2",

                    Username = "User_" + i, Nickname = "Nick_" + i, AvatarUrl = "/avatar.png",

                    IsPinned = false, IsElite = false
                };
                item.Title = articleentity[i].Title;
                item.Header = articleentity[i].Header;
                item.LastReviewTime = articleentity[i].LastReviewTime.ToString();
                var author = context.Users.FirstOrDefault(t => t.Id == articleentity[i].AuthorId);
                item.Username = author.UserName;
                item.IsPinned = articleentity[i].IsPinned;
                item.IsElite = articleentity[i].IsElite;
                articles[i] = item;
            }

            return res.Append(articles).ToArray();
        }

        public class GetCommentsForm
        {
            public string ArticleId { get; set; }
            public string Sort { get; set; }
            public string Filter { get; set; }
        }
        
        [HttpPost("/controller/comment/get-comment")]
        public List<WebAngular.Model.Comment> GetComments([FromBody] GetCommentsForm form)
        {
            var res = Enumerable.Empty<WebAngular.Model.Comment[]>();
            var l = new List<WebAngular.Model.Comment>();
            MyContext context = new MyContext();
            l.Add(new WebAngular.Model.Comment()
            {
                Username = "U1", Nickname = "N1", AvatarUrl = "/avatar.png",
                Content = "评论测试",
                Likes = 3, LikeStatus = 0,
                CommentTime = "2020-10-10-23-59"
            });
            l.Add(new WebAngular.Model.Comment()
            {
                Username = "U2", Nickname = "N2", AvatarUrl = "/avatar.png",
                Content = "评论测试2",
                Likes = 13, LikeStatus = 0,
                CommentTime = "2020-6-13-16-00"
            });
            return l;
        }
    }
}