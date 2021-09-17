import { ResponseModel } from "./responsemodel";


//token ve expiration bir liste olarak gelmediği için data:T[] yerine data:T olarak yeni bir model oluşurdum ve auth.service de kullandık.
export interface SingleResponseModel<T> extends ResponseModel{
    data:T;
}