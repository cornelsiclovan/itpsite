import React from 'react';
import Avatar from '../UIElements/Avatar';


import './Telephone.css'

const Telephone = (params) => {

    return (
        <React.Fragment>
            <div className="center">
                <div className="telephone">   
                    <a className="phone" href="tel:+40766992525">
                        <img width="15"  src="/images/phone.png" alt="contact"/>
                        
                        &nbsp;<b>0766992525</b>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Telephone;