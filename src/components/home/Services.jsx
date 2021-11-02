import React from 'react';

import '../../styles/components/service.css';

function Services({data}) {
    
    const date = new Date(parseInt(data.date));

    console.log(date);
    return (
        <div className="container-services container-style">
            <div className="content-img">
                <img src={data.thumb} alt="" />
            </div>
            <div className="content-info">
                <h2 className="title-service">
                    {data.name}
                </h2>
                <div className="extra-info">
                    <span className="date-service text">Desde: <span>{date.toString().slice(0, 15)}</span></span>
                    <span className="benefit-service text">Benefit/month: <span>{data.benefit}%</span></span>
                    <span className="business-service text">Business: <span>{data.business}</span></span>
                </div>
                <div className="extra-info">
                    <span className="costMin-service text">Cost Min: <span>{data.costMin}</span></span>
                    <span className="payments-service text">Currency: <span>{data.payments}</span> </span>
                </div>
            </div>
        </div>
    );
};

export default Services;