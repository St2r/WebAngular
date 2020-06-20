using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticleController : ControllerBase
    {
        private readonly ILogger<ArticleController> _logger;

        public ArticleController(ILogger<ArticleController> logger)
        {
            this._logger = logger;
        }

        [HttpPost("/api/article/new")]
        public IActionResult NewArticle([FromQuery] InterfaceIdentity identity, [FromForm] IFormCollection form)
        {
            return Ok(new
            {
                result = true
            });
        }

        [HttpPost("/api/article/view")]
        public IActionResult ViewArticle([FromQuery] InterfaceIdentity identity, [FromBody] int articleId)
        {
            return Ok(new
            {
                info = new Interface.InterfaceArticleInfo(),
                content = new Interface.InterfaceArticleContent()
            });
        }

        [HttpPost("/api/article/get")]
        public ActionResult<List<InterfaceArticleInfo>> GetArticles([FromQuery] InterfaceIdentity identity,
            [FromForm] string block, [FromForm] string sort, [FromForm] string filter, [FromForm] int pageSize,
            [FromForm] int page)
        {
            var res = new List<InterfaceArticleInfo>();
            for (var i = 0; i < pageSize; i++)
            {
                res.Add(new InterfaceArticleInfo()
                {
                    ArticleId = i,
                    Block = block,
                    Title = sort + filter + page + i,
                    Header = "50个字50个字50个字50个字50个字50个字50个字50个字50个字50个字50个字50个字50个字",
                    CoverUrl = "/avatar.png",
                    Like = 10,
                    Review = 9,
                    Browse = 100,
                    Star = 1,
                    LastReviewTime = "2020-02-02",
                    Username = "author"+i,
                    Nickname = "author_nick"+i,
                    AvatarUrl = "/avatar.png",
                    IsPinned = true,
                    IsElite = true
                });
            }

            return Ok(res);
        }
    }
}