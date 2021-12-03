import React from 'react';
import { useParams } from "react-router";

const ProfileDetail = (props) => {
    const params =  userParams();

    console.log (params.userId)

    return (
        <section>
                <h1>Product Details</h1>
                <p>{params.userId}</p>
        </section>
    );
};

export default ProfileDetail;