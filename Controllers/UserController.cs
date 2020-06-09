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

        public class LogForm
        {
            public string UserName { get; set; }
            public string Password { get; set; }
            public bool Remember { get; set; }
        }

        [HttpPost("/controller/user/login")]
        public IEnumerable<bool> Login([FromBody] LogForm logForm)
        {
            var res = Enumerable.Empty<bool>();
            return res.Append(logForm.UserName.Equals(logForm.Password)).ToArray();
        }

        public class RegisterForm
        {
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public string Confirm { get; set; }
        }

        [HttpPost("/controller/user/register")]
        public IEnumerable<bool> Register([FromBody] RegisterForm registerForm)
        {
            var res = Enumerable.Empty<bool>();
            return res.Append(!registerForm.Username.Equals("s")).ToArray();
        }

        [HttpPost("/controller/user/get-info")]
        public IEnumerable<UserInfo> LoadUserInfo([FromBody] UsernameModel usernameMode)
        {
            var res = new UserInfo
            {
                Username = usernameMode.Username,
                Nickname = "nick_" + usernameMode.Username, AvatarUrl = "/avatar.png",
                Brief = usernameMode.Username + "的个人简介",

                Follow = 6, Fans = 5, Point = 4, Browse = 3, Like = 2, Star = 1,
                IsFollowed = true, IsFan = false
            };
            return Enumerable.Empty<UserInfo>().Append(res).ToArray();
        }

        [HttpPost("/controller/user/get-private-info")]
        public IEnumerable<UserPrivateInfo> LoadUserPrivateInfo([FromBody] UsernameModel usernameMode)
        {
            var res = new UserPrivateInfo
            {
                Username = usernameMode.Username,
                LoginCount = 10,
                Birthday = "2000", RegisterData = "2020"
            };
            return Enumerable.Empty<UserPrivateInfo>().Append(res).ToArray();
        }

        [HttpPost("/controller/user/check-username")]
        public IEnumerable<bool> CheckUsername([FromBody] UsernameModel usernameModel)
        {
            return Enumerable.Empty<bool>().Append(usernameModel.Username.ToCharArray()[0] != 's').ToArray();
        }

        [HttpPost("/controller/user/check-email")]
        public IEnumerable<bool> CheckEmail([FromBody] EmailModel emailModel)
        {
            return Enumerable.Empty<bool>().Append(emailModel.Email.ToCharArray()[0] != 's').ToArray();
        }

        [HttpPost("/controller/user/get-follow-list")]
        public IEnumerable<UserInfo[]> GetFollowList([FromBody] UsernameModel form)
        {
            var res = Enumerable.Empty<UserInfo[]>();
            const int count = 10;
            var userList = new UserInfo[count];
            for (var i = 0; i < count; i++)
            {
                userList[i] = new UserInfo
                {
                    Username = form.Username + "Follow_" + i,
                    AvatarUrl = "/avatar.png",
                    Brief = "Follow_" + i + "的个人简介",
                    IsFollowed = true,
                    IsFan = i % 2 == 0 ? true : false
                };
            }

            return res.Append(userList).ToArray();
        }

        [HttpPost("/controller/user/get-fan-list")]
        public IEnumerable<UserInfo[]> GetFanList([FromBody] UsernameModel form)
        {
            var res = Enumerable.Empty<UserInfo[]>();
            const int count = 10;
            var userList = new UserInfo[count];
            for (var i = 0; i < count; i++)
            {
                userList[i] = new UserInfo
                {
                    Username = form.Username + "_Fan_" + i,
                    AvatarUrl = "/avatar.png",
                    Brief = "Fan_" + i + "的个人简介",
                    IsFan = true,
                    IsFollowed = i % 2 == 0 ? true : false
                };
            }

            return res.Append(userList).ToArray();
        }

        public class UserInfo
        {
            public string Username { get; set; }
            public string Nickname { get; set; }
            public string AvatarUrl { get; set; }
            public string Brief { get; set; }

            public int Follow { get; set; }
            public int Fans { get; set; }
            public int Point { get; set; }
            public int Browse { get; set; }
            public int Like { get; set; }
            public int Star { get; set; }

            public bool IsFollowed { get; set; }
            public bool IsFan { get; set; }
        }

        public class UserPrivateInfo
        {
            public string Username { get; set; }
            public int LoginCount { get; set; }
            public string Birthday { get; set; }
            public string RegisterData { get; set; }
        }

        public class UsernameModel
        {
            public string Username { get; set; }
        }

        public class EmailModel
        {
            public string Email { get; set; }
        }
    }
}