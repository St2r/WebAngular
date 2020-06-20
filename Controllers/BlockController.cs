using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAngular.Interface;

namespace WebAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlockController: ControllerBase
    {
        private readonly ILogger<BlockController> _logger;

        public BlockController(ILogger<BlockController> logger)
        {
            this._logger = logger;
        }

        [HttpPost("/api/block/block-info")]
        public IActionResult GetBlockInfo([FromQuery] InterfaceIdentity identity, [FromForm] string blockName)
        {
            return Ok(new InterfaceBlockInfo()
            {
                BlockName = "test"
            });
        }

        [HttpPost("/api/block/follow")]
        public IActionResult FollowBlock([FromQuery] InterfaceIdentity identity, [FromForm] string blockName)
        {
            return Ok();
        }
        
        [HttpPost("/api/block/unfollow")]
        public IActionResult UnfollowBlock([FromQuery] InterfaceIdentity identity, [FromForm] string blockName)
        {
            return Ok();
        }
    }
}