import fetch from "node-fetch";
import {CompanyExtraDetails} from "../models/companyExtraDetails.model";
import {Company} from "../models/company.model";

class CompanyExtraInfoService {
    async getCompanyByDomain(companyDomain: string): Promise<Company> {
        const response = await fetch(`https://company.clearbit.com/v2/companies/find?domain=${companyDomain}`,
            {
                method: 'GET', headers: {
                    'Authorization': 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );
        if (response.ok) {
            return await response.json();
        }
        // return Promise.reject('Something went wrong');
    }
}

export default new CompanyExtraInfoService();


