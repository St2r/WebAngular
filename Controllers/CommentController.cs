using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly ILogger<CommentController> _logger;

        public CommentController(ILogger<CommentController> logger)
        {
            this._logger = logger;
        }

        [HttpPost("/api/comment/get-comment-list")]
        public IActionResult GetCommentList([FromQuery] Identity identity,
                                        [FromForm] int articleId,
                                        [FromForm] string sort,
                                        [FromForm] string filter)
        {
            var list = new List<Comment>();
            list.Add(new Comment());
            list.Add(new Comment());
            return Ok(new
            {
                commentList = list
            });
        }

        [HttpPost("/api/comment/get-comment")]
        public IActionResult GetComment([FromQuery] Identity identity, 
                                        [FromForm] int articleId,
                                        [FromForm] int commentId)
        {
            return Ok(new Comment()
            {
                Content = "test"
            });
        }
    }
}