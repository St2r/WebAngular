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
        
        [HttpPost("/controller/operation/like")]
        public bool Like([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/undo-like")]
        public bool UndoLike([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/dislike")]
        public bool Dislike([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("/controller/operation/undo-dislike")]
        public bool UndoDislike([FromBody] OperationForm form)
        {
            return false;
        }

        [HttpPost("controller/operation/follow")]
        public bool Follow([FromBody] OperationForm form)
        {
            return false;
        }
        
        [HttpPost("controller/operation/dis-follow")]
        public bool DisFollow([FromBody] OperationForm form)
        {
            return false;
        }
    }
}