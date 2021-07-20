import React, {useEffect, useState} from 'react';
import CompaniesService from '../../services/ComapniesService';

interface DomainFormProps {
    setCompanyAdded: (isAdded: boolean) => void;
}

export default  function DomainForm(props: DomainFormProps): JSX.Element {
    const {setCompanyAdded} = props;
    const [domain, setDomain] = useState<string>();

    useEffect(() => {
        if (domain) {
            CompaniesService.addCompany(domain);
        }
        setCompanyAdded(true);
        setDomain(undefined);
    }, [domain])

    function handleSubmit(event: {target: {value: string}, preventDefault: any}) { // not accurate type
        setDomain(event.target.value); ///not exactly
        event.preventDefault();
    }

    return (
        <form onSubmit={(event: any) => { // Never use any!!
            setDomain(event.target[0].value);
            event.preventDefault();}
        }>
            <label>
                Domain:
                <input type="text" value={domain}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>

    );
}


