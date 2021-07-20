import express from "express";
import CompaniesService from '../services/companies.service';
import {Company} from "../models/company.model";
import {CreateCompanyBody} from "../models/createCompany.model";
import {GetCompanyBody} from "../models/getCompany.model";

class CompaniesController {
    async createCompany(req: express.Request<unknown, unknown, CreateCompanyBody>, res: express.Response<{ id: string }>) {
        const companyId = await CompaniesService.createCompany(req.body);
        res.status(201).send({id: companyId})
    }

    async getCompany(req: express.Request<undefined, undefined, GetCompanyBody>, res: express.Response<unknown>) {
        const company = await CompaniesService.getCompany(req.body.id);
        res.status(200).send(company);
    }

    getCompanies(req: express.Request, res: express.Response<Company[]>) {
        const companies = CompaniesService.getCompanies();
        res.status(200).send(companies);
    }
}

export default new CompaniesController();
