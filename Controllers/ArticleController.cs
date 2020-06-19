using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticleController: ControllerBase
    {
        private readonly ILogger<ArticleController> _logger;

        public ArticleController(ILogger<ArticleController> logger)
        {
            this._logger = logger;
        }

        [HttpPost("/api/article/new")]
        public IActionResult NewArticle([FromQuery] Identity identity, [FromForm] IFormCollection form)
        {
            return Ok(new
            {
                result = true
            });
        }

        [HttpPost("/api/article/view")]
        public IActionResult ViewArticle([FromQuery] Identity identity, [FromBody] int articleId)
        {
            return Ok(new
            {
                info = new Interface.ArticleInfo(),
                content = new Interface.ArticleContent()
            });
        }
    }
}