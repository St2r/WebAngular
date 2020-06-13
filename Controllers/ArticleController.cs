using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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

        [HttpPost("/controller/article/get-article")]
        public IEnumerable<ArticleInfo[]> GetArticle([FromBody] GetArticleForm form)
        {
            var res = Enumerable.Empty<ArticleInfo[]>();
            var articles = new ArticleInfo[form.PageSize];
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
                articles[i] = item;
            }

            return res.Append(articles).ToArray();
        }

        public class ArticleIDModel
        {
            public string ArticleID { get; set; }
        }
        
        [HttpPost("/controller/comment/get-comment")]
        public IEnumerable<Comment[]> GetComments([FromBody] ArticleIDModel a)
        {
            var res = Enumerable.Empty<Comment[]>();
            var list = new Comment[2];
            list[0] = new Comment()
            {
                Username = "U1", Nickname = "N1", AvatarUrl = "/avatar.png",
                Content = "评论测试",
                Likes = 3, LikeStatus = 0,
                CommentTime = "2020-10-10-23-59"
            };
            list[1] = new Comment()
            {
                Username = "U2", Nickname = "N2", AvatarUrl = "/avatar.png",
                Content = "评论测试2",
                Likes = 13, LikeStatus = 0,
                CommentTime = "2020-6-13-16-00"
            };
            return res.Append(list).ToArray();
        }
    }


    public class ArticleInfo
    {
        public string Title { get; set; }
        public string Header { get; set; }
        public string CoverUrl { get; set; }

        public int Like { get; set; }
        public int Review { get; set; }
        public int Browse { get; set; }
        public int Star { get; set; }

        public string LastReviewTime { get; set; }

        public string Username { get; set; }
        public string Nickname { get; set; }
        public string AvatarUrl { get; set; }

        public bool IsPinned { get; set; }
        public bool IsElite { get; set; }
    }

    public class GetArticleForm
    {
        public string Block { get; set; }
        public string Sort { get; set; }
        public string Filter { get; set; }
        public int PageSize { get; set; }
        public int Page { get; set; }
    }

    public class Comment
    {
        public string Username { get; set; }
        public string Nickname { get; set; }
        public string AvatarUrl { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }
        public int LikeStatus { get; set; }
        public string CommentTime { get; set; }
    }
}