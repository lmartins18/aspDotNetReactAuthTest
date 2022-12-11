using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace react.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AuthenticationController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> Login(string username, string password)
        {
            if (username == "shabba" && password == "ranks")
            {
                // login user with an "UserId" claim
                List<Claim> claims = new()
                {
                    // Change this as needed
                    new Claim("UserId", username, ClaimValueTypes.String)
                };
                ClaimsIdentity claimsIdentity = new(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                // Get cookie :)
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), new AuthenticationProperties());
                return Ok("logged-in");
            }
            return BadRequest("invalid credentials");
        }
        [HttpPost]
        public async Task<ActionResult> Logout()
        {
            try
            {
                await HttpContext.SignOutAsync();
                return Ok();
            }
            catch (Exception) { }
            return BadRequest();
        }

    }
}