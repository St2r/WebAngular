using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
        public IActionResult UserBaseInfo([FromQuery] Interface.Identity identity, [FromForm] string username)
        {

            return Ok(new Interface.UserBaseInfo()
            {
                Username = identity.Username,
                Nickname = "Nick_"+identity.Username,
                AvatarUrl = "/avatar.png",
                Brief = "hello",
                IsFan = false,
                IsFollowed = false
            });
        }

        /// <summary>
        /// 获得username的UserDetailInfo
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpPost("/api/user/detail-info")]
        public IActionResult UserDetailInfo([FromQuery] Interface.Identity identity, [FromForm] string username)
        {
            return Ok(new Interface.UserDetailInfo()
            {
                Username = username,
                Articles = 10,
                Browse =  5,
                Fans = 6,
                Follow = 7,
                Level = 1,
                Like = 6,
                Point = 1000,
                Star = 6
            });
        }
        
        /// <summary>
        /// 获得username的关注列表
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpPost("/api/user/follow-list")]
        public IActionResult GetFollowList([FromQuery] Interface.Identity identity, [FromForm] string username)
        {
            var list = new List<Interface.UserBaseInfo>();
            list.Add(new Interface.UserBaseInfo());
            list.Add(new Interface.UserBaseInfo());
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
        public IActionResult GetFanList([FromQuery] Interface.Identity identity, [FromForm] string username)
        {
            var list = new List<Interface.UserBaseInfo>();
            list.Add(new Interface.UserBaseInfo());
            list.Add(new Interface.UserBaseInfo());
            return Ok(new
            {
                followList = list
            });
        }

        // 添加访问记录
        [HttpPost("/controller/user/add-visit-record")]
        public bool AddVisitRecord([FromQuery] Interface.Identity identity)
        {
            return true;
        }

        // 获取最近访问者
        public class GetRecentVisitorForm
        {
            public string username { get; set; }
        }

        [HttpPost("/controller/user/get-recent-visitor")]
        public List<Interface.UserBaseInfo> GetRecentVisitor([FromBody] GetRecentVisitorForm form)
        {
            var list = new List<Interface.UserBaseInfo>();
            
            return list;
        }

        public class GetFavBlockForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-fav-block")]
        public List<Interface.BlockInfo> GetFavBlock([FromBody] GetFavBlockForm form)
        {
            var list = new List<Interface.BlockInfo>();
            list.Add(new Interface.BlockInfo()
            {
                BlockName = "离散数学",
            });
            return list;
        }
    }
}