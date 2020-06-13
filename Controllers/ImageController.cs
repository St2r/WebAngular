using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageController: ControllerBase
    {
        private ILogger<ImageController> _logger;

        public ImageController(ILogger<ImageController> logger)
        {
            _logger = logger;
        }
        
        // 测试上传图片用的，暂时别删
        [HttpPost("/controller/image")]
        public IEnumerable<bool> UploadImage([FromForm] IFormCollection form)
        {
            IFormFile file = form.Files[0];
            form.TryGetValue("username", out var username);
            Console.Write(username.ToString());
            Console.Write(file);
            return Enumerable.Empty<bool>().Append(true).ToArray();
        }
    }
}