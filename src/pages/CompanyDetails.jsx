import React, { useEffect, useState } from 'react';
import Services from '../components/Services';
import { useLocation, useParams } from 'react-router-dom';
import { getServices } from '../server/company';
import { CompanyFooter, Hero, Spinner } from '../components';

const CompanyDetails = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [services, setServices] = useState(null);
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await getServices(id);
            console.log('response: ', response);
            const data = response.data;
            console.log('data: ', data);
            console.log('res.data?.services: ', data?.services);
            setServices(data?.services);
            console.log('services: ', services);
            setCompany(data?.services?.[0].company);
            console.log('company: ', company);
        };
        getData();
    }, [pathname]);



    if (!company) return (
        <div className='h-screen w-screen flex justify-between items-center ' >
            <Spinner />
        </div>
    )

    return (
        <div>
            <div className="">
                <Hero company={company} />
            </div>
            <div className="mx-auto w-[fit-content] my-5 text-5xl font-black leading-none text-purple-800 uppercase font-bebas-neue  dark:text-white">
                الخدمات
            </div>
            <div className="max-w-6xl mx-auto ">
                <Services servicesProp={services} />
            </div>

            <CompanyFooter />
        </div>
    );
};

export default CompanyDetails;
