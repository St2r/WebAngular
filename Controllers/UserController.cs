using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            this._logger = logger;
        }

        /// <summary>
        /// 获得username的基本信息
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpPost("/api/user/base-info")]
        public IActionResult LoadUserInfo([FromQuery] Identity identity, [FromForm] string username)
        {

            return Ok(new UserBaseInfo()
            {
                Username = "test"
            });
        }

        /// <summary>
        /// 获得username的UserDetailInfo
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpPost("/api/user/detail-info")]
        public IActionResult UserDetailInfo([FromQuery] Identity identity, [FromForm] string username)
        {
            return Ok(new UserDetailInfo()
            {
                Username = "test"
            });
        }
        
        /// <summary>
        /// 获得username的关注列表
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpPost("/api/user/follow-list")]
        public IActionResult GetFollowList([FromQuery] Identity identity, [FromForm] string username)
        {
            var list = new List<UserBaseInfo>();
            list.Add(new UserBaseInfo());
            list.Add(new UserBaseInfo());
            return Ok(new
            {
                followList = list
            });
        }
        

        /// <summary>
        /// 获得username的粉丝列表
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpPost("/controller/api/fan-list")]
        public IActionResult GetFanList([FromQuery] Identity identity, [FromForm] string username)
        {
            var list = new List<UserBaseInfo>();
            list.Add(new UserBaseInfo());
            list.Add(new UserBaseInfo());
            return Ok(new
            {
                followList = list
            });
        }

        // 添加访问记录
        [HttpPost("/controller/user/add-visit-record")]
        public bool AddVisitRecord([FromQuery] Identity identity)
        {
            return true;
        }

        // 获取最近访问者
        public class GetRecentVisitorForm
        {
            public string username { get; set; }
        }

        [HttpPost("/controller/user/get-recent-visitor")]
        public List<UserBaseInfo> GetRecentVisitor([FromBody] GetRecentVisitorForm form)
        {
            var list = new List<UserBaseInfo>();
            
            return list;
        }

        public class GetFavBlockForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-fav-block")]
        public List<BlockInfo> GetFavBlock([FromBody] GetFavBlockForm form)
        {
            var list = new List<BlockInfo>();
            list.Add(new BlockInfo()
            {
                BlockName = "离散数学",
            });
            return list;
        }
    }
}