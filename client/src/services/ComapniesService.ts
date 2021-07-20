import {ENV} from "../common/env";
import {HTTPMethods} from "./common/HTTPMethods.mode";
import {Company} from "../common/models/company.model";

class CompaniesService {
    serverURL =  `http://${ENV.DEV ? 'localhost:3000' : ''}`;

    async fetchCompanies(method: HTTPMethods, body?: unknown, endpoint = ''){ // body should have a generic Type :)
        const requestInit = {
            method,
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        if (body !== undefined) {
            Object.assign(requestInit.headers, { 'Content-Type': 'application/json' });
            Object.assign(requestInit, { body: JSON.stringify(body) });
        }
        const response = await fetch(`${this.serverURL}/companies/${endpoint}`, requestInit);
        if (response.ok) {
            return await response.json();
        } else {
            return Promise.reject('some error');
        }
    }

    async addCompany(domain: string): Promise<string> {
        return this.fetchCompanies(HTTPMethods.POST, {domain})
    }

    async getCompany(companyId: string): Promise<Record<string, unknown>> {
        console.log(this.fetchCompanies(HTTPMethods.GET, undefined, companyId))
        return this.fetchCompanies(HTTPMethods.GET, undefined, companyId);
    }

    async getCompanies(): Promise<Company[]> {
        return this.fetchCompanies(HTTPMethods.GET);
    }
}

export default new CompaniesService();
