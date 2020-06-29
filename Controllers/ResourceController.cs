using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResourceController : ControllerBase
    {
        private ILogger<ResourceController> _logger;
        private readonly IHostingEnvironment _hostingEnvironment;

        public ResourceController(ILogger<ResourceController> logger, IHostingEnvironment hostingEnvironment)
        {
            this._logger = logger;
            this._hostingEnvironment = hostingEnvironment;
        }

        /// <summary>
        /// 上传附件
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="form"></param>
        /// <returns></returns>
        [HttpPost("/api/resource/upload")]
        public ActionResult<bool> UploadResource([FromQuery] InterfaceIdentity identity,
            [FromForm] IFormCollection form)
        {
            // https://www.cnblogs.com/Can-daydayup/p/12637100.html
            if (form.Files.Count == 0)
                return BadRequest();
            var formFile = form.Files[0];
            var currentDate = DateTime.Now;
            var webRootPath = _hostingEnvironment.WebRootPath;

            try
            {
                var filePath = $"/UploadFile/{currentDate:yyyyMMdd}/";

                //创建每日存储文件夹
                if (!Directory.Exists(webRootPath + filePath))
                {
                    Directory.CreateDirectory(webRootPath + filePath);
                }

                if (formFile != null)
                {
                    //文件后缀
                    var fileExtension = Path.GetExtension(formFile.FileName); //获取文件格式，拓展名

                    //判断文件大小
                    var fileSize = formFile.Length;

                    if (fileSize > 1024 * 1024 * 10) //10M TODO:(1mb=1024X1024b)
                    {
                        return new JsonResult(new {isSuccess = false, resultMsg = "上传的文件不能大于10M"});
                    }

                    //保存的文件名称(以名称和保存时间命名)
                    var saveName = formFile.FileName.Substring(0, formFile.FileName.LastIndexOf('.')) + "_" +
                                   currentDate.ToString("HHmmss") + fileExtension;

                    //文件保存
                    using (var fs = System.IO.File.Create(webRootPath + filePath + saveName))
                    {
                        formFile.CopyTo(fs);
                        fs.Flush();
                    }

                    //完整的文件路径
                    var completeFilePath = Path.Combine(filePath, saveName);

                    return new JsonResult(new
                        {isSuccess = true, returnMsg = "上传成功", completeFilePath = completeFilePath});
                }
                else
                {
                    return new JsonResult(new {isSuccess = false, resultMsg = "上传失败，未检测上传的文件信息~"});
                }
            }
            catch (Exception ex)
            {
                return new JsonResult(new {isSuccess = false, resultMsg = "文件保存失败，异常信息为：" + ex.Message});
            }

            return Ok(true);
        }

        /// <summary>
        /// 获得对应附件的地址
        /// </summary>
        /// <param name="identity"></param>
        /// <param name="resourceId"></param>
        /// <returns></returns>
        [HttpPost("/api/resource/get")]
        public ActionResult<string> GetResource([FromQuery] InterfaceIdentity identity, [FromForm] int resourceId)
        {
            return Ok("test");
        }
        
        [HttpPost("/api/resource/delete")]
        public ActionResult<bool> DeleteResource([FromQuery] InterfaceIdentity identity, [FromForm] int resourceId)
        {
            return Ok(true);
        }
    }
}