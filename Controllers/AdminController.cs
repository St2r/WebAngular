using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Model;
using System.Linq;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController: ControllerBase
    {
        private readonly ILogger<AdminController> _logger;

        public AdminController(ILogger<AdminController> logger)
        {
            this._logger = logger;
        }

        [HttpGet("/controller/admin/get-user")]
        public List<UserInfo> GetAllUser()
        {
            // MyContext context = new MyContext();
            // var users = context.Users.ToList();
            // var ret = new List<UserInfo>();
            // foreach(var user in users)
            // {
            //     var res = new UserInfo();
            //     res.Username = user.UserName;
            //     res.Nickname = "nick_" + user.NickName;
            //     res.AvatarUrl = user.AvatarUrl;
            //     res.Brief = user.Brief;
            //     res.Point = user.Point;
            //     //res.LoginCount = user.LoginCount;
            //     //res.Birthday = user.Birthday.ToString();
            //     //res.RegisterData = user.CreateTime.ToString();
            //     res.Browse = user.Browse;
            //
            //     res.Fans = context.Foci.Count(t => t.BeFocusd == user.UserName);
            //     res.Follow = context.Foci.Count(t => t.Follower == user.UserName);
            //     res.Articles = context.Articles.Count(t => t.AuthorId == user.UserName);
            //     var articles = context.Articles.Select(t => t).Where(t => t.AuthorId == user.UserName).ToList();
            //     res.Like = res.Star = 0;
            //
            //     foreach (var article in articles)
            //     {
            //         res.Like += context.LikeArticles.Count(t => t.ArticleId == article.ArticleId);
            //         res.Star += context.Collections.Count(t => t.ArticleId == article.ArticleId);
            //     }
            //     res.IsFollowed = res.Fans > 0;
            //     res.IsFan = res.Follow > 0;
            //
            //     ret.Add(res);
            // }
            //
            // return ret;
            var i = new List<UserInfo>();
            for (int j = 0; j < 10; j++)
            {
                i.Add(new UserInfo()
                {
                    Username = "User" + i,
                    Nickname = "Nick" + i,
                    AvatarUrl = "avatar.png"
                });
            }

            return i;
        }

        [HttpGet("/controller/admin/get-article")]
        public List<ArticleInfo> GetAllArticle()
        {
            MyContext context = new MyContext();
            var articles = context.Articles.ToList();
            var ret = new List<ArticleInfo>();
            foreach(var article in articles)
            {
                var res = new ArticleInfo() 
                {
                     AvatarUrl = article.AvatarUrl,
                      Browse = article.Browse,
                       CoverUrl = article.CoverUrl,
                 Header = article.Header,
                  IsElite = article.IsElite,
                   IsPinned = article.IsPinned,
                    LastReviewTime = article.LastReviewTime.ToString(),
                     Title = article.Title,
                       
                };
                var user = context.Users.FirstOrDefault(t => t.UserName == article.AuthorId);
                res.Username = user.UserName;
                res.Nickname = user.NickName;
                res.Like = context.LikeArticles.Count(t => t.status == 1 && t.ArticleId == article.ArticleId
                && t.UserId == user.UserName);
                ret.Add(res);
            }
            return ret;
        }

        [HttpGet("/controller/admin/get-attachment")]
        public List<Attachment> GetAllAttachment()
        {
            MyContext context = new MyContext();
            var tags = context.Tags.ToList();
            return new List<Attachment>();
        }
    }
}