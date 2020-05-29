using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            this._logger = logger;
        }
        
        [HttpPost]
        public IEnumerable<string> Post([FromForm] LogInfo logInfo)
        {
            Console.Write('!');
            return Enumerable.Empty<string>().Append("hello").ToArray();
        }

        public class LogInfo
        {
            public string userName { get; set; }
            public string password { get; set; }
        }
    }
}