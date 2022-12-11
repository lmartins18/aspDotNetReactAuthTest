using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace react.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class DataController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult("Shabba ranks!!! authenticated!!");
        }
    }
}