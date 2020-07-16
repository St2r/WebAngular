using System;
using System.Collections.Generic;
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
        public IActionResult UserBaseInfo([FromQuery] Interface.InterfaceIdentity identity, [FromForm] string username)
        {
            return Ok(new Interface.InterfaceUserBaseInfo()
            {
                Username = identity.Username,
                Nickname = "Nick_" + identity.Username,
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
        public ActionResult<InterfaceUserDetailInfo> UserDetailInfo([FromQuery] Interface.InterfaceIdentity identity,
            [FromForm] string username)
        {
            return Ok(new InterfaceUserDetailInfo()
            {
                Username = username,
                Articles = 10,
                Browse = 5,
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
        [HttpPost("/api/user/get-follow-list")]
        public ActionResult<List<InterfaceUserBaseInfo>> GetFollowList([FromQuery] Interface.InterfaceIdentity identity,
            [FromForm] string username)
        {
            var list = new List<Interface.InterfaceUserBaseInfo>();
            list.Add(new Interface.InterfaceUserBaseInfo());
            list.Add(new Interface.InterfaceUserBaseInfo());
            return Ok(list);
        }


        /// <summary>
        /// 获得username的粉丝列表
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <returns></returns>
        [HttpPost("/api/user/get-fan-list")]
        public ActionResult<List<InterfaceUserBaseInfo>> GetFanList([FromQuery] InterfaceIdentity identity,
            [FromForm] string username)
        {
            var list = new List<InterfaceUserBaseInfo>();
            list.Add(new InterfaceUserBaseInfo()
            {
                Username = "Fan_1",
                AvatarUrl = "/avatar.png",
                Brief = "个人简介",
                IsFan = true,
                IsFollowed = true,
                Nickname = "Nick_Fan_1"
            });
            list.Add(new InterfaceUserBaseInfo()
            {
                Username = "Fan_2",
                AvatarUrl = "/avatar.png",
                Brief = "个人简介",
                IsFan = true,
                IsFollowed = false,
                Nickname = "Nick_Fan_2"
            });
            return Ok(list);
        }

        // 添加访问记录
        [HttpPost("/controller/user/add-visit-record")]
        public bool AddVisitRecord([FromQuery] InterfaceIdentity identity)
        {
            return true;
        }

        // 获取最近访问者
        [HttpPost("/api/user/get-recent-visitor")]
        public ActionResult<List<InterfaceUserBaseInfo>> GetRecentVisitor([FromQuery] InterfaceIdentity identity,
            [FromForm] string username)
        {
            var list = new List<InterfaceUserBaseInfo>();

            return Ok(list);
        }

        [HttpPost("/api/user/get-fav-block")]
        public ActionResult<List<InterfaceBlockInfo>> GetFavBlock([FromQuery] InterfaceIdentity identity,
            [FromForm] string username)
        {
            var list = new List<InterfaceBlockInfo>();
            list.Add(new InterfaceBlockInfo()
            {
                BlockName = "离散数学",
            });
            return Ok(list);
        }


        [HttpPost("/api/user/search")]
        public ActionResult<List<InterfaceUserBaseInfo>> SearchUser([FromQuery] InterfaceIdentity identity,
            [FromForm] string search)
        {
            var list = new List<InterfaceUserBaseInfo>();
            list.Add(new InterfaceUserBaseInfo()
            {
                Username = "Fan_1",
                AvatarUrl = "/avatar.png",
                Brief = "个人简介",
                IsFan = false,
                IsFollowed = true,
                Nickname = search + "1"
            });
            list.Add(new InterfaceUserBaseInfo()
            {
                Username = "Fan_2",
                AvatarUrl = "/avatar.png",
                Brief = "个人简介",
                IsFan = true,
                IsFollowed = false,
                Nickname = search + "2"
            });
            return Ok(list);
        }
    }
}