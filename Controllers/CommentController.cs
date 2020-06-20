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
        public IActionResult GetCommentList([FromQuery] InterfaceIdentity identity,
                                        [FromForm] int articleId,
                                        [FromForm] string sort,
                                        [FromForm] string filter)
        {
            var list = new List<InterfaceComment>();
            list.Add(new InterfaceComment());
            list.Add(new InterfaceComment());
            return Ok(new
            {
                commentList = list
            });
        }

        [HttpPost("/api/comment/get-comment")]
        public IActionResult GetComment([FromQuery] InterfaceIdentity identity, 
                                        [FromForm] int articleId,
                                        [FromForm] int commentId)
        {
            return Ok(new InterfaceComment()
            {
                Content = "test"
            });
        }
    }
}