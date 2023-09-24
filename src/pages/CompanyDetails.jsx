import React, { useEffect, useState } from 'react'
import Services from '../components/Services'
import { useLocation, useParams } from 'react-router-dom'
import { getServices } from '../server/company'
import { Hero } from '../components'

const CompanyDetails = () => {

    const { id } = useParams()
    const { pathname } = useLocation()
    const [services, setServices] = useState(null);
    const [company, setCompany] = useState({});

    useEffect(() => {
        const getData = async () => {
            const response = await getServices(id);
            console.log('response: ', response);
            const data = response.data;
            console.log('data: ', data);
            console.log('res.data?.services: ', data?.services);
            setServices(data?.services);
            console.log('services: ', services);
            setCompany(data?.services?.[0].company)
            console.log('company: ', company);
        }
        getData();

    }, [pathname]);

    return (
        <div>
            <div className="">
                <Hero company={company} />
            </div>
            <Services servicesProp={services} />
        </div>
    )
}

export default CompanyDetails