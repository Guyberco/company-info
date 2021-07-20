import CompaniesRepository from '../repository/companies.repository'
import {Company} from "../models/company.model";
import {CreateCompanyBody} from "../models/createCompany.model";
import CompanyExtraInfoService from '../services/CompanyExtraInfo.service';
import {CompanyExtraDetails} from "../models/companyExtraDetails.model";

class CompaniesService {
    async createCompany(resource: CreateCompanyBody): Promise<string> {
        const companyExtraDetails = await CompanyExtraInfoService.getCompanyByDomain(resource.domain);
        return CompaniesRepository.addCompany(companyExtraDetails);
    }

    getCompanies(): Company[] {
        return CompaniesRepository.getCompanies();
    }

    async getCompany(companyId: string): Promise<CompanyExtraDetails | { error: string }> { //should handle errors
        const company = CompaniesRepository.getCompanyById(companyId);
        return CompanyExtraInfoService.getCompanyByDomain(company.domain);
    }
}

export default new CompaniesService();
