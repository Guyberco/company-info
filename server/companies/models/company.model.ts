import {CreateCompanyBody} from "./createCompany.model";

export interface Company extends CreateCompanyBody {
    id: string;
    name: string;
    logo: string;
    type: string; //should be enum
}
