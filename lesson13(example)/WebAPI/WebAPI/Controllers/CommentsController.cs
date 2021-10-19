using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Comments;
using WebAPI.Models.Gallery;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("api/comments")]
    [ApiController]
    [Authorize]
    public class CommentsController : ControllerBase
    {
        CommentsService _commentsService;
        public CommentsController(CommentsService commentsService)
        {
            _commentsService = commentsService;
        }

        [HttpGet]
        [Route("photo-comments/{id:guid}")]
        public IEnumerable<CommentModel> GetPhotoComments(Guid id)
        {
            return _commentsService.GetCommentByPhotoId(id);
        }
    }
}
