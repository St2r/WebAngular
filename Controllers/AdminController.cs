using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Model;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController: ControllerBase
    {
        private readonly ILogger<AdminController> _logger;

        public AdminController(ILogger<AdminController> logger)
        {
            this._logger = logger;
        }

        [HttpGet]
        public List<UserInfo> GetAllUser()
        {
            
        }

        [HttpGet]
        public List<ArticleInfo> GetAllArticle()
        {
            
        }

        [HttpGet]
        public List<Attachment> GetAllAttachment()
        {
            
        }
    }
}