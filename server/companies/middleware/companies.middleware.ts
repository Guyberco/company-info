import express from "express";
import {CreateCompanyBody} from "../models/createCompany.model";

class CompaniesMiddleware {
    extractCompanyId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.companyId;
        return next();
    }

    // async validateDomainDoesNotExists(req: express.Request<unknown, unknown, CreateCompanyBody>, res: express.Response, next: express.NextFunction) {
    //
    // }

}

export default new CompaniesMiddleware();
