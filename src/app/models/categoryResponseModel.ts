import { Category } from "./category";
import { ResponseModel } from "./responsemodel";

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}