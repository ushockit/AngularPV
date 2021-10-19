using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Comments;

namespace WebAPI.Services
{
    public class CommentsService
    {
        static List<CommentModel> comments = new List<CommentModel>
        {
            new CommentModel
            {
                Id = Guid.NewGuid(),
                Text = "Comment 1",
                CreatedAt = new DateTime(2021, 10, 18, 12, 30, 0),
                PhotoId = Guid.Parse("d7cc2da4-cb0b-403d-8408-ccb5ad4d60c5")
            },
            new CommentModel
            {
                Id = Guid.NewGuid(),
                Text = "Comment 12",
                CreatedAt = new DateTime(2021, 09, 22, 06, 56, 0),
                PhotoId = Guid.Parse("d7cc2da4-cb0b-403d-8408-ccb5ad4d60c5")
            }
        };

        public List<CommentModel> GetCommentByPhotoId(Guid photoId)
        {
            return comments.Where(p => p.PhotoId.Equals(photoId)).ToList();
        }
    }
}
