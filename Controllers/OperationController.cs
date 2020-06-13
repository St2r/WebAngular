using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Model;
using System.Linq;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OperationController: ControllerBase
    {
        private readonly ILogger<OperationController> _logger;

        public OperationController(ILogger<OperationController> logger)
        {
            this._logger = logger;
        }

        public class OperationForm
        {
            public string Username { get; set; }
            public string TargetName { get; set; }
        }

        // 点赞-取消点赞-踩-取消踩
        // 绕口令八级
        
        [HttpPost("/controller/operation/like")]
        public bool Like([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            var article = context.Articles.FirstOrDefault(t => t.ArticleId == form.TargetName);
            context.Users.Update(user);
            user.Point += 3;
            LikeArticle likeArticle = new LikeArticle() {  status = 1, ArticleId = article.ArticleId, UserId = user.UserName};
            context.LikeArticles.Add(likeArticle);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/undo-like")]
        public bool UndoLike([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var like = context.LikeArticles.FirstOrDefault(t => t.status == 1 && t.ArticleId == form.TargetName && t.UserId == form.Username);
            context.LikeArticles.Remove(like);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/dislike")]
        public bool Dislike([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            var article = context.Articles.FirstOrDefault(t => t.ArticleId == form.TargetName);
            context.Users.Update(user);
            user.Point += 3;
            LikeArticle likeArticle = new LikeArticle() { status = -1, ArticleId = article.ArticleId, UserId = user.UserName };
            context.LikeArticles.Add(likeArticle);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/undo-dislike")]
        public bool UndoDislike([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var like = context.LikeArticles.FirstOrDefault(t => t.status == -1 && t.ArticleId == form.TargetName && t.UserId == form.Username);
            context.LikeArticles.Remove(like);
            context.SaveChanges();
            return true;
        }

        [HttpPost("controller/operation/follow")]
        public bool Follow([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            context.Foci.Add(new Focus() 
            { 
                 BeFocusd = form.TargetName,
                 Follower = form.Username
            });
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("controller/operation/dis-follow")]
        public bool DisFollow([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var foci = context.Foci.FirstOrDefault(t => t.BeFocusd == form.TargetName && t.Follower == form.Username);
            context.Foci.Remove(foci);
            context.SaveChanges();
            return false;
        }
    }
}