import {Injectable} from "@angular/core";

export interface CommentResponse {
  id: string;
  text: string;
  photoId: string;
  createdAt: Date;
}

@Injectable()
export class CommentsApiService {

}
