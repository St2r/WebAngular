using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
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
                var author = context.Users.FirstOrDefault(t => t.UserName == articleentity[i].AuthorId);
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
        public List<WebAngular.Model.CommentInf> GetComments([FromBody] GetCommentsForm form)
        {
            var res = Enumerable.Empty<WebAngular.Model.CommentInf[]>();
            var l = new List<WebAngular.Model.CommentInf>();
            MyContext context = new MyContext();
            var article = context.Articles.FirstOrDefault(t => t.ArticleId == form.ArticleId);
            var comments = context.Comments.Where(t => t.ArticleId == article.ArticleId).ToList();


            foreach(var comment in comments)
            {
                var author = context.Users.FirstOrDefault(t => t.UserName == comment.AuthorId);
                var commentinf = new CommentInf()
                {
                    Username = author.UserName,
                    CommentTime = comment.CreateTime.ToString(),
                    Content = comment.Content,
                    AvatarUrl = comment.AvatarUrl,
                    Nickname = author.NickName
                };
                commentinf.Likes = context.LikeComments.Count(t => t.CommentId == comment.Id);
                l.Add(commentinf);
            }
            return l;
        }

        
        [HttpPost("/controller/article/new")]
        public bool NewArticle([FromForm] IFormCollection form)
        {
            IFormFile i = form.Files.GetFile("cover");
            string author = form["author"];
            string title = form["title"];
            string tags = form["tags"];
            var tag = tags.Split("/");
            string content = form["content"];

            MyContext context = new MyContext();
            foreach(var t in tag)
            {
                Tag ta = new Tag() { TagName = t };
                context.Tags.Add(ta);
            }
            context.SaveChanges();
            Article article = new Article() { Title = title, Content = content };
            User user = context.Users.FirstOrDefault(t => t.UserName == author);
            article.AuthorId = user.UserName;
            context.Add(article);
            context.SaveChanges();
            foreach(var ta in tag)
            {
                Tag t = context.Tags.FirstOrDefault(t => t.TagName == ta);
                ArticleToTag articleToTag = new ArticleToTag() { ArticleId = article.ArticleId, TagId = t.TagId };
                context.ArticleToTags.Add(articleToTag);
            }
            context.SaveChanges();
            return true;
        }


        public class NewCommentForm
        {
            public string Username { get; set; }
            public string Content { get; set; }
        }

        [HttpPost("/controller/comment/new")]
        public bool NewComment([FromBody] NewCommentForm form)
        {
            return true;
        }
    }
}