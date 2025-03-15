export interface signUp{
    name:string,
    email:string,
    password:string,
    rePassword:string
    productList:product[]
}
export interface login{
    email:string
    password:string
}
export interface product{
    id:string,
    image:string,
    caption:string
}
export interface postId{
    timestamp:number,
    data:string
}