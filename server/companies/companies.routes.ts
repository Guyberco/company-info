import express from "express";
import {RoutesConfig} from "../common/routesConfig";
import CompaniesMiddleware from './middleware/companies.middleware';
import CompaniesController from './controllers/companies.controller';

export class CompaniesRoutes extends RoutesConfig {

    constructor(app: express.Application) {
        super(app);
    }

    configureRoutes(): express.Application {
        this.app
            .route('/companies')
            .get(CompaniesController.getCompanies)
            .post(CompaniesController.createCompany)
        this.app.param('companyId', CompaniesMiddleware.extractCompanyId);
        this.app
            .route('/companies/:companyId')
            .get(CompaniesController.getCompany)
        return this.app;
    }
}


