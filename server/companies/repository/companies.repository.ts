import shortid from "shortid";
import {Company} from "../models/company.model";
import {CreateCompanyBody} from "../models/createCompany.model";

class CompaniesRepository {
    companies: Company[] = [];

    constructor() {
        console.log('CompaniesRepository instance created');
    }

    addCompany(createCompany: Company): string {
        const newId = shortid.generate();
        this.companies.push({...createCompany, id: newId});
        return newId;
    }

    getCompanyById(companyId: string): Company {
        return this.companies.find((company) => company.id === companyId);
    }

    getCompanies(): Company[] {
        return this.companies;
    }

}

export default new CompaniesRepository();
