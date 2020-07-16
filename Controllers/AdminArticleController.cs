using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminArticleController: ControllerBase
    {
        private readonly ILogger<AdminArticleController> _logger;

        public AdminArticleController(ILogger<AdminArticleController> logger)
        {
            this._logger = logger;
        }
        
        [HttpGet("/api/admin/article/get-all")]
        public ActionResult<List<InterfaceArticleInfo>> GetAllArticle([FromQuery] InterfaceIdentity identity)
        {
            return Ok(new List<InterfaceArticleInfo>());
        }

        [HttpPost("/api/admin/article/set-selected")]
        public ActionResult<bool> SetSelected([FromQuery] InterfaceIdentity identity, [FromForm] int articleId)
        {
            if (!identity.CheckIdentity())
            {
                return BadRequest();
            }
            return Ok(true);
        }

        [HttpPost("/api/admin/article/set-topped")]
        public ActionResult<bool> SetTopped([FromQuery] InterfaceIdentity identity, [FromForm] int articleId)
        {
            return Ok(true);
        }

        [HttpPost("/api/admin/article/delete")]
        public ActionResult<bool> DeleteArticle([FromQuery] InterfaceIdentity identity, [FromForm] int articleId)
        {
            return Ok(true);
        }
        
    }
}