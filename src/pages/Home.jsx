import React from "react";
import { useQuery, gql } from "@apollo/client";

import Filter from "../components/home/Filter";
import Services from "../components/home/Services";
import Graphics from "../components/home/Graphics";

import '../styles/pages/home.css';

const GET_ALL_SERVICES = gql`
    query GetAllServices {
        getAllService {
            _id
            name
            date
            costMin
            benefit
            business
            payments
            thumb
        }
    }
`;


function Home() {
    const { loading, error, data } = useQuery(GET_ALL_SERVICES);


 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
        <div className="home">
            <div className="container-home">
                <div className="container-filter container-style">
                    <Filter />
                </div>
                <Graphics data={data} />

                <div className="content-services">
                    {
                        data.getAllService.map(service => {
                            return (
                                <Services data={service}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
