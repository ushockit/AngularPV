using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models.Gallery;

namespace WebAPI.Services
{
    public class GalleryService
    {
        static List<Photo> photos = new List<Photo>
        {
            new Photo
            {
                Id = Guid.Parse("d7cc2da4-cb0b-403d-8408-ccb5ad4d60c5"),
                Title = "Title 1",
                Description = "Description 1",
                Author = "Author 1",
                Url = "https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"
            },
            new Photo
            {
                Id = Guid.NewGuid(),
                Title = "Title 2",
                Description = "Description 2",
                Author = "Author 2",
                Url = "https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg"
            },
            new Photo
            {
                Id = Guid.NewGuid(),
                Title = "Title 3",
                Description = "Description 3",
                Author = "Author 3",
                Url = "https://cdn.serif.com/affinity/img/photo/home/0121/og-photo-200120210858.jpg"
            },
        };
        CommentsService _commentsService;
        public GalleryService(CommentsService commentsService)
        {
            _commentsService = commentsService;
        }

        public List<Photo> GetAllPhotos()
        {
            return photos.Select(photo =>
            {
                photo.Comments = _commentsService.GetCommentByPhotoId(photo.Id);
                return photo;
            }).ToList();
        }
    }
}
