using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Comments;

namespace WebAPI.Models.Gallery
{
    public class Photo
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string Url { get; set; }
        public List<CommentModel> Comments { get; set; } = new List<CommentModel>();
    }
}
