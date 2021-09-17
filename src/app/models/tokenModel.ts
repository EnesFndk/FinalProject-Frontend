//auth/login olunca gelen token ve expiration bilgilerini modelledik. Gelen bütün bilgileri böyle modellemek gerekiyor.
export class TokenModel{
    token:string;
    expiration:string;
}