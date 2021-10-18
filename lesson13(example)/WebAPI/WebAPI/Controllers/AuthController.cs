using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Auth;
using WebAPI.Models.Jwt;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        UsersService _usersService;
        public AuthController(UsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpPost]
        [Route("login")]
        public JwtResponse Login([FromBody] LoginModel model)
        {
            // TODO: Validation
            return _usersService.Login(model);
        }

        [HttpPost]
        [Route("register")]
        public UserModel Register([FromBody] RegisterModel model)
        {
            // TODO: Validation
            return _usersService.CreateUser(model);
        }
    }
}
