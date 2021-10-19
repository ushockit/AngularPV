using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Gallery;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("api/gallery")]
    [ApiController]
    public class GalleryController : ControllerBase
    {
        GalleryService _galleryService;
        public GalleryController(GalleryService galleryService)
        {
            _galleryService = galleryService;
        }

        [HttpGet]
        [Route("photos")]
        [Authorize]
        public IEnumerable<Photo> GetAllPhotos()
        {
            return _galleryService.GetAllPhotos();
        }
    }
}
