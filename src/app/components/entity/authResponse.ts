import SignIn from "./signIn";

export default class AuthResponse{
    message:string="";
    role:string="";
    statusCode:number=0;
    user:SignIn=new SignIn();
}