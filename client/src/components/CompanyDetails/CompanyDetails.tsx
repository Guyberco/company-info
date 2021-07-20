import React, {useEffect, useState} from 'react';
import CompaniesService from "../../services/ComapniesService";

interface CompanyDetailsProps {
    companyId: string
}

export default function CompanyDetails(props: CompanyDetailsProps): JSX.Element {
    const {companyId} = props;
    const [companyDetails, setCompanyDetails] = useState<Record<string, unknown>>(); //no time for typify it :(

    useEffect(() => {
        async function getCompany(): Promise<void>{
            const result = await CompaniesService.getCompany(companyId);
            setCompanyDetails(result);
        }
    }, []);

    return (
        <div>
            {companyDetails}
        </div>
    );

}
