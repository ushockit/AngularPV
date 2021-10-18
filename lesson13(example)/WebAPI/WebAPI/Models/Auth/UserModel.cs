using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace WebAPI.Models.Auth
{
    public class UserModel
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        [JsonIgnore()]
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
