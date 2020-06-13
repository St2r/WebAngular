using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Model;

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

        public class LoginForm
        {
            public string Username { get; set; }
            public string Password { get; set; }
            public bool Remember { get; set; }
        }

        [HttpPost("/controller/user/login")]
        public IEnumerable<bool> Login([FromBody] LoginForm form)
        {
            var res = Enumerable.Empty<bool>();
            return res.Append(form.Username.Equals(form.Password)).ToArray();
        }

        [HttpGet("/controller/user/logout")]
        public IEnumerable<bool> Logout()
        {
            return Enumerable.Empty<bool>().Append(true).ToArray();
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

        public class LoadUserInfoForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-info")]
        public IEnumerable<UserInfo> LoadUserInfo([FromBody] LoadUserInfoForm form)
        {
            var res = new UserInfo
            {
                Username = form.Username,
                Nickname = "nick_" + form.Username, AvatarUrl = "/avatar.png",
                Brief = form.Username + "的个人简介",
                Level = 1,
                Follow = 6, Fans = 5, Point = 4, Articles = 30, Browse = 3, Like = 2, Star = 1,
                IsFollowed = true, IsFan = false
            };
            return Enumerable.Empty<UserInfo>().Append(res).ToArray();
        }

        public class LoadUserPrivateInfoForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-private-info")]
        public IEnumerable<UserPrivateInfo> LoadUserPrivateInfo([FromBody] LoadUserPrivateInfoForm form)
        {
            var res = new UserPrivateInfo
            {
                Username = form.Username,
                LoginCount = 10,
                Birthday = "2000", RegisterData = "2020"
            };
            return Enumerable.Empty<UserPrivateInfo>().Append(res).ToArray();
        }

        public class CheckUsernameForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/check-username")]
        public IEnumerable<bool> CheckUsername([FromBody] CheckUsernameForm form)
        {
            return Enumerable.Empty<bool>().Append(form.Username.ToCharArray()[0] != 's').ToArray();
        }

        public class CheckEmailForm
        {
            public string Email { get; set; }
        }

        [HttpPost("/controller/user/check-email")]
        public IEnumerable<bool> CheckEmail([FromBody] CheckEmailForm form)
        {
            return Enumerable.Empty<bool>().Append(form.Email.ToCharArray()[0] != 's').ToArray();
        }

        public class GetFollowListForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-follow-list")]
        public IEnumerable<UserInfo[]> GetFollowList([FromBody] GetFollowListForm form)
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


        public class GetFanListForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-fan-list")]
        public List<UserInfo> GetFanList([FromBody] GetFanListForm form)
        {
            var res = new List<UserInfo>();
            const int count = 10;
            for (var i = 0; i < count; i++)
            {
                res.Add(new UserInfo
                {
                    Username = form.Username + "_Fan_" + i,
                    AvatarUrl = "/avatar.png",
                    Brief = "Fan_" + i + "的个人简介",
                    IsFan = true,
                    IsFollowed = i % 2 == 0 ? true : false
                });
            }

            return res;
        }

        // 添加访问记录
        public class AddVisitRecordForm
        {
            public string TargetName { get; set; }
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/add-visit-record")]
        public bool AddVisitRecord([FromBody] AddVisitRecordForm form)
        {
            return true;
        }

        // 获取最近访问者
        public class GetRecentVisitorForm
        {
            public string username { get; set; }
        }

        [HttpPost("/controller/user/get-recent-visitor")]
        public List<UserInfo> GetRecentVisitor([FromBody] GetRecentVisitorForm form)
        {
            var list = new List<UserInfo>();
            list.Add(
                new UserInfo()
                {
                    Username = "t"
                }
            );
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