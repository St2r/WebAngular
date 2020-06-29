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

        /// <summary>
        /// 创建一篇新文章
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost("/api/article/new")]
        public IActionResult NewArticle([FromQuery] InterfaceIdentity identity, [FromForm] IFormCollection form)
        {
            return Ok(new
            {
                result = true
            });
        }

        /// <summary>
        /// 获得一篇文章的内容
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="articleId"></param>
        /// <returns></returns>
        [HttpPost("/api/article/view")]
        public IActionResult ViewArticle([FromQuery] InterfaceIdentity identity, [FromBody] int articleId)
        {
            return Ok(new
            {
                info = new Interface.InterfaceArticleInfo(),
                content = new Interface.InterfaceArticleContent()
            });
        }

        /// <summary>
        /// 获得一系列文章
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="block">板块名</param>
        /// <param name="sort">排序方式</param>
        /// <param name="filter">过滤方式</param>
        /// <param name="pageSize">每一页的文章数</param>
        /// <param name="page">页数</param>
        /// <returns></returns>
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
                    Username = "author" + i,
                    Nickname = "author_nick" + i,
                    AvatarUrl = "/avatar.png",
                    IsPinned = true,
                    IsElite = true
                });
            }

            return Ok(res);
        }

        /// <summary>
        /// 设置置顶
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="articleId"></param>
        /// <param name="target">为1时为设置置顶，为0时为取消置顶</param>
        /// <returns></returns>
        [HttpPost("/api/article/set-pinned")]
        public ActionResult<bool> SetPinned([FromQuery] InterfaceIdentity identity, [FromForm] int articleId,
            [FromForm] bool target)
        {
            return Ok(true);
        }

        /// <summary>
        /// 设置精华
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="articleId"></param>
        /// <param name="target">为1时为设置置顶，为0时为取消置顶</param>
        /// <returns></returns>
        [HttpPost("/api/article/set-elite")]
        public ActionResult<bool> SetElite([FromQuery] InterfaceIdentity identity, [FromForm] int articleId,
            [FromForm] bool target)
        {
            return Ok(true);
        }

        /// <summary>
        /// 删除文章
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="articleId"></param>
        /// <returns></returns>
        [HttpPost("/api/article/delete")]
        public ActionResult<bool> DeleteArticle([FromQuery] InterfaceIdentity identity, [FromForm] int articleId)
        {
            return Ok(true);
        }
    }
}