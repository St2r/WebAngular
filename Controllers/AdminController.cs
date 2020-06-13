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

        [HttpGet("/controller/admin/get-user")]
        public List<UserInfo> GetAllUser()
        {
            
        }

        [HttpGet("/controller/admin/get-article")]
        public List<ArticleInfo> GetAllArticle()
        {
            
        }

        [HttpGet("/controller/admin/get-attachment")]
        public List<Attachment> GetAllAttachment()
        {
            
        }
    }
}