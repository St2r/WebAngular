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

        [HttpPost]
        public IActionResult NewArticle([FromQuery] Identity identity)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult ViewArticle([FromQuery] Identity identity, [FromBody] int articleId)
        {
            return Ok();
        }
    }
}