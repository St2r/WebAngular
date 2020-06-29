using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminUserController : ControllerBase
    {
        private readonly ILogger<AdminUserController> _logger;

        public AdminUserController(ILogger<AdminUserController> logger)
        {
            this._logger = logger;
        }

        [HttpGet("/controller/admin/user/get-user")]
        public ActionResult<List<InterfaceUserBaseInfo>> GetAllUser([FromQuery] InterfaceIdentity identity)
        {
            var i = new List<InterfaceUserBaseInfo>();
            for (int j = 0; j < 10; j++)
            {
                i.Add(new InterfaceUserBaseInfo()
                {
                    Username = "User" + i,
                    Nickname = "Nick" + i,
                    AvatarUrl = "avatar.png"
                });
            }

            return Ok(i);
        }

        [HttpPost("/api/admin/user/edit-info")]
        public ActionResult<bool> EditUserInfo([FromQuery] InterfaceIdentity identity, [FromForm] IFormCollection form)
        {
            return Ok(true);
        }

        /// <summary>
        /// 封禁用户
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="username"></param>
        /// <param name="target">0-解禁，1-封禁</param>
        /// <returns></returns>
        [HttpPost("/api/admin/user/ban")]
        public ActionResult<bool> BanUser([FromQuery] InterfaceIdentity identity, [FromForm] string username, [FromForm] int target)
        {
            return Ok(true);
        }
    }
}