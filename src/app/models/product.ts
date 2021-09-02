//export = c# daki public, interface'lerin önüne dikkat ettiyseniz I koymadık. c# daki gibi değil. Koyulabilir ama koymamak daha iyi.
//burda backend'de datamızda olan bilgilerin başlıklarını ve veri tiplerini veriyoruz.
export interface Product {
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number
}