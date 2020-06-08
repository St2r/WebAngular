using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
        
        [HttpPost("/controller/image")]
        public IEnumerable<string> UploadImage([FromForm] IFormCollection form)
        {
            Console.WriteLine(form.Count);
            Console.Write(form["t_string"]);
            Console.Write(form.Files.Count);
            IFormFile file = form.Files.GetFile("image");
            Console.Write(file.ContentType);
            return Enumerable.Empty<string>().Append("test").ToArray();
        }
    }
}