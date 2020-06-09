using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ForumController: ControllerBase
    {
        private ILogger<ForumController> _logger;

        public ForumController(ILogger<ForumController> logger)
        {
            this._logger = logger;
        }

        public class AdminInfo
        {
            public string Username { get; set; }
            public string Nickname { get; set; }
            public string AvatarUrl { get; set; }
            public int Identity { get; set; }
        }
        
        public class BlockInfo
        {
            public int AccessRight { get; set; }
            
            public bool IsFollowed { get; set; }
            
            public int ContentTotal { get; set; }
            public int FollowTotal { get; set; }
            public int TodayTotal { get; set; }
            
            public AdminInfo[] Admins { get; set; }
        }

        public class BlockInfoForm
        {
            public string Block { get; set; }
        }

        [HttpPost("/controller/forum/get-block-info")]
        public IEnumerable<BlockInfo> GetBlockInfo([FromBody] BlockInfoForm form)
        {
            var res = Enumerable.Empty<BlockInfo>();
            var blockInfo = new BlockInfo()
            {
                AccessRight = 2, IsFollowed = false,
                ContentTotal = 1000,FollowTotal = 100,TodayTotal = 10,
                Admins = new[]
                {
                    new AdminInfo()
                    {
                        Username = form.Block + "Admin_1",
                        Nickname = form.Block + "Nick_1",
                        AvatarUrl = "/avatar.png",
                        Identity = 0
                    }, 
                    new AdminInfo()
                    {
                        Username = form.Block + "Admin_2",
                        Nickname = form.Block + "Nick_2",
                        AvatarUrl = "/avatar.png",
                        Identity = 1
                    }, 
                }
            };
            return res.Append(blockInfo).ToArray();
        }
    }
}