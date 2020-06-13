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
        [HttpPost("/controller/fetch/post-article")]
        public List<ArticleInfo> GetUserArticle([FromBody] GetUserArticleForm form)
        {
            var list = new List<ArticleInfo>();
            list.Add(new ArticleInfo()
            {
                Title = "test"
            });
            return list;
        }

        public class GetUserStarArticleForm
        {
            public string Username { get; set; }
        }
        [HttpPost("/controller/fetch/star-article")]
        public List<ArticleInfo> GetUserStarArticle([FromBody] GetUserStarArticleForm form)
        {
            var list = new List<ArticleInfo>();
            list.Add(new ArticleInfo()
            {
                Title = "test_star"
            });
            return list;
        }

        public class GetUserPostForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/fetch/get-post")]
        public List<PostInfo> GetUserPost([FromBody] GetUserPostForm form)
        {
            var list = new List<PostInfo>();
            list.Add(new PostInfo()
            {
                Article = new ArticleInfo()
                {
                    Title = "111"
                }
            });
            return list;
        }
    }
}