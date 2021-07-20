import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
import DomainForm from "./components/DomainForm/DomainForm";
import CompanyList from "./components/CompanyList/CompanyList";
import {Company} from "./common/models/company.model";
import CompaniesService from "./services/ComapniesService";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails";

function App(): JSX.Element {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [isNewCompanyAdded, setIsNewCompanyAdded] = useState<boolean>(false);
    const [selectedCompany, setSelectedCompany] = useState<string>();

    useEffect(() => { //not ideal. will be called twice when isNewCompanyAdded change
        async function getCompanies(): Promise<void>{
            const result = await CompaniesService.getCompanies();
            setCompanies(result);
        }
        if (isNewCompanyAdded) {
            getCompanies();
            setIsNewCompanyAdded(false);
        }
    }, [isNewCompanyAdded])


    return (
        <div className="App">
            <h1>Companies</h1>
            <DomainForm setCompanyAdded={setIsNewCompanyAdded}/>
            <CompanyList companies={companies} selectItem={setSelectedCompany}/>
            {/*should in wrapped with route:*/}
            {selectedCompany && <CompanyDetails companyId={selectedCompany}/>}
        </div>
    );
}

export default App;
