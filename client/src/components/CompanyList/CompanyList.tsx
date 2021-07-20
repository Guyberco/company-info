import React, {Dispatch, FormEventHandler, SetStateAction, useState} from 'react';
import {Company} from "../../common/models/company.model";

interface CompanyListProps {
    companies: Company[];
    selectItem: (id: string) => void;
}

export default function CompanyList(props: CompanyListProps): JSX.Element {
    const {companies, selectItem} = props;

    return (
        <ul>
            {companies.map((company) => (
                <li key={company.id} onClick={() => selectItem(company.id)}>
                    <span>Name: {company.name}</span>
                    <span>Domain: {company.name}</span>
                    <span>Type: {company.name}</span>
                    <img src={company.logo} alt={`${company.name} logo`}/>
                </li>
            ))}
        </ul>
    )

}
