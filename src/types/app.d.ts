interface IUser {
    name:string,
    email:string,
    phone:string,
    photoprofile:string
}

interface IPost{
    id:string,
    title:string,
    image_url: string,
    content: string,
    userId: string,
    datePost: string,
    user:IUser
}

interface IBookmark{
    PostId:string;
    UserId:string;
    Post:IPost
}