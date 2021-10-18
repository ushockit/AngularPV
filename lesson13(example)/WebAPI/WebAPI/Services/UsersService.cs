using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Business.Exceptions;
using WebAPI.Models.Auth;
using WebAPI.Models.Jwt;

namespace WebAPI.Services
{
    public class UsersService
    {
        static List<UserModel> Users { get; } = new List<UserModel>();
        MD5Service _md5Service;
        JwtService _jwtService;
        public UsersService(MD5Service md5Service, JwtService jwtService)
        {
            _md5Service = md5Service;
            _jwtService = jwtService;
            if (Users.Count == 0)
            {
                Users.Add(new UserModel
                {
                    Id = Guid.NewGuid(),
                    Email = "admin@gmail.com",
                    Password = md5Service.Hash("123456"),
                    Role = "admin"
                });
            }
        }

        public UserModel CreateUser(RegisterModel model)
        {
            var newUser = new UserModel
            {
                Id = Guid.NewGuid(),
                Role = "user",
                Email = model.Email,
                Password = _md5Service.Hash(model.Password)
            };
            Users.Add(newUser);
            return newUser;
        }

        public JwtResponse Login(LoginModel model)
        {
            var srchUser = Users.FirstOrDefault(u => u.Email.Equals(model.Email) && u.Password.Equals(_md5Service.Hash(model.Password)));
            if (srchUser is null)
            {
                throw new UserNotFoundException();
            }

            return new JwtResponse { AccessToken = _jwtService.GenerateAccessToken(srchUser.Email, srchUser.Role) };
        }
    }
}
