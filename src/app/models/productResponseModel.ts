import { Product } from "./product";
import { ResponseModel } from "./responsemodel";

//Aynı c# daki gibi data product'dan geldiği için product yazıyoruz içinde nesneler olduğu için array ile yazıyoruz.
//Data'dan product nesneleri, success bilgisi ve messsage geldiği için böyle yazıyoruz. WebApi'den data çekiyoruz.
//**her defesında success ve message yazmak istemediğim için responsemodel içine yazıyorum onları. extends ResponseModel yazdığımızda responsemodel'ide içeriyor. ResponseModel benim base'im olarak düşünebiliriz.c# da hani interface'i yazıyorduk ya onun gibi düşünebiliriz.
//Product'ı çözüyoruz. yukarıya import yazıyor.
export interface ProductResponceModel extends ResponseModel {
    data:Product[],

}