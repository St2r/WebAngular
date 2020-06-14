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
            // MyContext context = new MyContext();
            // var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            // bool ret = true;
            // if (user == null || user.PassWord != form.Password)
            //     ret = false;
            // context.Users.Update(user);
            // user.LoginCount++;
            // context.SaveChanges();
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
            //System.Console.WriteLine("fuck");
            var res = Enumerable.Empty<bool>();
            // bool ret = true;
            // MyContext context = new MyContext();
            // var user = context.Users.FirstOrDefault(t => t.Email == registerForm.Email);
            // if (user != null)
            //     ret = false;
            // else if (registerForm.Confirm != registerForm.Password)
            //     ret = false;
            // else
            // {
            //     User user1 = new User()
            //     {
            //         Email = registerForm.Email,
            //         UserName = registerForm.Username,
            //         PassWord = registerForm.Password
            //     };
            //     context.Users.Add(user1);
            //     context.SaveChanges();
            // }
            // //System.Console.WriteLine($"ret{ret}");
            return res.Append(true).ToArray();
        }

        public class LoadUserInfoForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-info")]
        public IEnumerable<UserInfo> LoadUserInfo([FromBody] LoadUserInfoForm form)
        {
            var res = new UserInfo()
            {
                Username = "LoggedUser",
                Nickname = "NickName",
                Articles = 10,
                AvatarUrl = "/avatar.png",
                Brief = "一个笨比",
                Browse = 9,
                Fans = 12,
                Follow = 10,
                IsFan = true,
                IsFollowed = false,
                Level = 3
            };
            // MyContext context = new MyContext();
            // var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            // if (user != null)
            // {
            //     res.Username = user.UserName;
            //     res.Nickname = "nick_" + user.NickName;
            //     res.AvatarUrl = user.AvatarUrl;
            //     res.Brief = user.Brief;
            //     res.Point = user.Point;
            //     //res.LoginCount = user.LoginCount;
            //     //res.Birthday = user.Birthday.ToString();
            //     //res.RegisterData = user.CreateTime.ToString();
            //     res.Browse = user.Browse;
            //
            //     res.Fans = context.Foci.Count(t => t.BeFocusd == user.UserName);
            //     res.Follow = context.Foci.Count(t => t.Follower == user.UserName);
            //     res.Articles = context.Articles.Count(t => t.AuthorId == user.UserName);
            //     var articles = context.Articles.Select(t => t).Where(t => t.AuthorId == user.UserName).ToList();
            //     res.Like = res.Star = 0;
            //     
            //     foreach (var article in articles)
            //     {
            //         res.Like += context.LikeArticles.Count(t => t.ArticleId == article.ArticleId);
            //         res.Star += context.Collections.Count(t => t.ArticleId == article.ArticleId);
            //     }
            //     res.IsFollowed = res.Fans > 0;
            //     res.IsFan = res.Follow > 0;
            // }
            return Enumerable.Empty<UserInfo>().Append(res).ToArray();
        }

        public class LoadUserPrivateInfoForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-private-info")]
        public IEnumerable<UserPrivateInfo> LoadUserPrivateInfo([FromBody] LoadUserPrivateInfoForm form)
        {
            var res = new UserPrivateInfo()
            {
                Username = form.Username,
                LoginCount = 10,
                Birthday = "2000", RegisterData = "2020"
            };
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            res.LoginCount = user.LoginCount;
            res.Birthday = user.Birthday.ToString();
            res.RegisterData = user.CreateTime.ToString();
            return Enumerable.Empty<UserPrivateInfo>().Append(res).ToArray();
        }

        public class CheckUsernameForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/check-username")]
        public IEnumerable<bool> CheckUsername([FromBody] CheckUsernameForm form)
        {
            // MyContext context = new MyContext();
            // var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);

            return Enumerable.Empty<bool>().Append(form.Username.ToCharArray()[0]=='s').ToArray();
        }

        public class CheckEmailForm
        {
            public string Email { get; set; }
        }

        [HttpPost("/controller/user/check-email")]
        public IEnumerable<bool> CheckEmail([FromBody] CheckEmailForm form)
        {
            return Enumerable.Empty<bool>().Append(form.Email.ToCharArray()[0]=='s').ToArray();
        }

        public class GetFollowListForm
        {
            public string Username { get; set; }
        }

        [HttpPost("/controller/user/get-follow-list")]
        public IEnumerable<UserInfo[]> GetFollowList([FromBody] GetFollowListForm form)
        {
            var res = Enumerable.Empty<UserInfo[]>();
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            int count = context.Foci.Count(t => t.BeFocusd == user.UserName);
            var users = context.Foci.Where(t => t.BeFocusd == user.UserName).Select(t => t.Follower).ToList();
            var userList = new UserInfo[count];
            for (var i = 0; i < count; i++)
            {
                var follow = context.Users.FirstOrDefault(t => t.UserName == users[i]);
                userList[i] = new UserInfo
                {

                    Username = follow.UserName,
                    AvatarUrl = follow.AvatarUrl,
                    Brief = follow.Brief,
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
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.Username);
            int count = context.Foci.Count(t => t.Follower == user.UserName);
            var fans = context.Foci.Where(t => t.Follower == user.UserName).Select(t => t.BeFocusd).ToList();
            for (var i = 0; i < count; i++)
            {
                var fan = context.Users.FirstOrDefault(t => t.UserName == fans[i]);
                res.Add(new UserInfo
                {
                    Username = fan.UserName,
                    AvatarUrl = fan.AvatarUrl,
                    Brief = fan.Brief,
                    IsFan = true,
                    IsFollowed = i % 2 == 0 ? true : false
                }) ;
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
            MyContext context = new MyContext();
            var user = context.Users.FirstOrDefault(t => t.UserName == form.username);
            list.Add(
                new UserInfo()
                {
                    Username = user.UserName,
                    AvatarUrl = user.AvatarUrl,
                     Brief = user.Brief ,
                      Browse = user.Browse,
                       Point = user.Point,
                        Nickname =user.NickName,
                         Level = user.Level
                }
            ) ;
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