import { ResponseModel } from "./responsemodel";

//Generic yaptık. T'ye product dersek data product olur , T'ye category dersek data: category olduk. O sebeple artık product response model yada category response modele gerek yok.
export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}