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
        
        [HttpPost("/controller/operation/like-article")]
        public bool LikeArticle([FromBody] OperationForm form)
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
        
        [HttpPost("/controller/operation/undo-like-article")]
        public bool UndoLikeArticle([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var like = context.LikeArticles.FirstOrDefault(t => t.status == 1 && t.ArticleId == form.TargetName && t.UserId == form.Username);
            context.LikeArticles.Remove(like);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/dislike-article")]
        public bool DislikeArticle([FromBody] OperationForm form)
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
        
        [HttpPost("/controller/operation/undo-dislike-article")]
        public bool UndoDislikeArticle([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var like = context.LikeArticles.FirstOrDefault(t => t.status == -1 && t.ArticleId == form.TargetName && t.UserId == form.Username);
            if (like == null)
                return false;
            context.LikeArticles.Remove(like);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/like-comment")]
        public bool LikeComment([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            var comment = context.Comments.FirstOrDefault(t => t.Id == form.TargetName);
            context.Users.Update(user);
            user.Point += 3;
            LikeComment like = new LikeComment() { status = 1,  CommentId = comment.Id, UserId = user.UserName };
            context.LikeComments.Add(like);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/undo-like-comment")]
        public bool UndoLikeComment([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var like = context.LikeComments.FirstOrDefault(t => t.status == 1 && t.UserId == form.Username && t.CommentId == form.TargetName);
            if (like == null)
                return false;
            context.LikeComments.Remove(like);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/dislike-comment")]
        public bool DislikeComment([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            var comment = context.Comments.FirstOrDefault(t => t.Id == form.TargetName);
            context.Users.Update(user);
            user.Point += 3;
            LikeComment like = new LikeComment() { status = -1, CommentId = comment.Id, UserId = user.UserName };
            context.LikeComments.Add(like);
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("/controller/operation/undo-dislike-comment")]
        public bool UndoDislikeComment([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var like = context.LikeComments.FirstOrDefault(t => t.status == -1 && t.CommentId == form.TargetName && t.UserId == form.Username);
            context.LikeComments.Remove(like);
            context.SaveChanges();
            return true;
        }

        [HttpPost("controller/operation/follow-person")]
        public bool FollowPerson([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            context.PersonToBlocks.Add(new PersonToBlock()
            {
                BlockName = form.TargetName,
                UserName = form.Username
            });
            context.SaveChanges();
            return true;
        }
        
        [HttpPost("controller/operation/dis-follow-person")]
        public bool DisFollowPerson([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var pb = context.PersonToBlocks.FirstOrDefault(t => t.BlockName == form.TargetName && t.UserName == form.Username);
            context.PersonToBlocks.Remove(pb);
            context.SaveChanges();
            return false;
        }
        
        [HttpPost("controller/operation/follow-block")]
        public bool FollowBlock([FromBody] OperationForm form)
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
        
        [HttpPost("controller/operation/dis-follow-block")]
        public bool DisFollowBlock([FromBody] OperationForm form)
        {
            MyContext context = new MyContext();
            var foci = context.Foci.FirstOrDefault(t => t.BeFocusd == form.TargetName && t.Follower == form.Username);
            context.Foci.Remove(foci);
            context.SaveChanges();
            return false;
        }
    }
}