using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
            return false;
        }
        
        [HttpPost("/controller/operation/undo-like-article")]
        public bool UndoLikeArticle([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/dislike-article")]
        public bool DislikeArticle([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/undo-dislike-article")]
        public bool UndoDislikeArticle([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/like-comment")]
        public bool LikeComment([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/undo-like-comment")]
        public bool UndoLikeComment([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/dislike-comment")]
        public bool DislikeComment([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/undo-dislike-comment")]
        public bool UndoDislikeComment([FromBody] OperationForm form)
        {
            return false;
        }

        [HttpPost("controller/operation/follow-person")]
        public bool FollowPerson([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("controller/operation/dis-follow-person")]
        public bool DisFollowPerson([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("controller/operation/follow-block")]
        public bool FollowBlock([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("controller/operation/dis-follow-block")]
        public bool DisFollowBlock([FromBody] OperationForm form)
        {
            return false;
        }
    }
}