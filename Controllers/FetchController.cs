using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Model;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FetchController: ControllerBase
    {
        private readonly ILogger<FetchController> _logger;

        public FetchController(ILogger<FetchController> logger)
        {
            this._logger = logger;
        }


        public class GetUserArticleForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/fetch/user-article")]
        public List<ArticleInfo> GetUserArticle([FromBody] GetUserArticleForm form)
        {
            var list = new List<ArticleInfo>();
            list.Add(new ArticleInfo()
            {
                Title = "test"
            });
            return list;
        }
        
    }
}