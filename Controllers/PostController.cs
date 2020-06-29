using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebAngular.Interface
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly ILogger<PostController> _logger;

        public PostController(ILogger<PostController> logger)
        {
            this._logger = logger;
        }

        [HttpPost("/api/post/get-post")]
        public ActionResult<List<InterfacePostInfo>> GetPost([FromQuery] InterfaceIdentity identity)
        {
            var res = new List<InterfacePostInfo>();
            res.Add(new InterfacePostInfo()
            {
                Username = "A",
                Article = new InterfaceArticleInfo()
                {
                    ArticleId = 11,
                    Title = "新文章"
                }
            });
            res.Add(new InterfacePostInfo()
            {
                Username = "B",
                Comment = new InterfaceComment()
                {
                    Content = "111"
                }
            });
            return Ok(res);
        }
    }
}