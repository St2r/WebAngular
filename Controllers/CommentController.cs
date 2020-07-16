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
        public ActionResult<List<InterfaceComment>> GetCommentList([FromQuery] InterfaceIdentity identity,
                                        [FromForm] int articleId,
                                        [FromForm] string sort,
                                        [FromForm] string filter)
        {
            var list = new List<InterfaceComment>();
            for (int i = 0; i < 10; i++)
            {
                list.Add(new InterfaceComment()
                {
                    CommentId = 1,
                    ReferenceId = 2,
                    AvatarUrl = "/avatar.png",
                    Content = "test",
                    CommentTime = "2020-02-02-23-59",
                    Likes = 10,
                    LikeStatus = 1,
                    NickName = "nick_author",
                    Username = "author"
                });
            }
            return Ok(list);
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