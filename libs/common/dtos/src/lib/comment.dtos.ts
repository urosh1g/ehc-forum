import { ICreateComment, IPost, IUpdateComment, IUser } from "@ehc/common/interfaces";

class CreateComment implements ICreateComment {
    authorId!: number;
    postId!: number;
    body!: string;
}