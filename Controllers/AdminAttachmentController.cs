using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminAttachmentController : ControllerBase
    {
        private readonly ILogger<AdminAttachmentController> _logger;

        public AdminAttachmentController(ILogger<AdminAttachmentController> logger)
        {
            this._logger = logger;
        }

        [HttpGet("/api/admin/attachment/get-all")]
        public ActionResult<List<InterfaceAttachment>> GetAllAttachment([FromQuery] InterfaceIdentity identity)
        {
            return Ok(new List<InterfaceAttachment>());
        }

        [HttpPost("/api/admin/attachment/delete")]
        public ActionResult<bool> DeleteAttachment([FromQuery] InterfaceIdentity identity, [FromForm] int attachmentId)
        {
            return Ok(true);
        }
    }
}