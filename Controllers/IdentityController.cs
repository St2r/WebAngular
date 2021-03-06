using System.ComponentModel;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IdentityController : ControllerBase
    {
        private ILogger<IdentityController> _logger;

        public IdentityController(ILogger<IdentityController> logger)
        {
            this._logger = logger;
        }

        /// <summary>
        /// 登陆
        /// </summary>
        /// <param name="identity"></param>
        /// <returns></returns>
        [HttpPost("/api/identity/login")]
        public IActionResult Login([FromQuery] InterfaceIdentity identity)
        {
            bool ans;
            if (identity.Password == null || identity.Username == null)
                ans = false;
            else
                ans = identity.Username.Equals(identity.Password);

            return Ok(new
            {
                result = ans,
                isAdmin = true
            });
        }

        /// <summary>
        /// 退出登陆
        /// </summary>
        /// <param name="identity"></param>
        /// <returns></returns>
        [HttpPost("/api/identity/logout")]
        public IActionResult Logout([FromQuery] InterfaceIdentity identity)
        {
            if (identity == null)
                return BadRequest();
            if (identity.Password == null || identity.Username == null)
                return BadRequest();
            return Ok(new
            {
                result = true,
            });
        }

        /// <summary>
        /// 处理注册申请
        /// </summary>
        /// <param name="username"></param>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns>注册是否成功</returns>
        [HttpPost("/api/identity/register")]
        public IActionResult Register([FromForm] string username, [FromForm] string email, [FromForm] string password)
        {
            return Ok(new
            {
                result = true
            });
        }

        /// <summary>
        /// 判断注册用的邮箱是否已被占用
        /// </summary>
        /// <param name="email"></param>
        /// <returns>被占用返回false</returns>
        [HttpPost("/api/identity/check-email")]
        public IActionResult CheckEmail([FromForm] string email)
        {
            return Ok(new
            {
                result = email.Equals("st2r@qq.com")
            });
        }

        /// <summary>
        /// 判断注册用的用户名是否已被占用
        /// </summary>
        /// <param name="username"></param>
        /// <returns>被占用返回false</returns>
        [HttpPost("/api/identity/check-username")]
        public IActionResult CheckUsername([FromForm] string username)
        {
            return Ok(new
            {
                result = username.Equals("KaMui")
            });
        }
    }
}