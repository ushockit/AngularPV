using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/gallery")]
    [ApiController]
    public class GalleryController : ControllerBase
    {
        [HttpGet]
        [Route("photos")]
        [Authorize]
        public IEnumerable<object> GetAllPhotos()
        {
            return new object[5];
        }
    }
}
