import React, {useContext} from 'react';
import { AuthContext } from '../../context/auth-context';
import Button from '../../FormElements/Button';
import Card from '../../UIElements/Card';

import './Admin.css';

const  Admin = () => {

    return (
        <div>
            <center>
           <ul className="place-list">
            <li className="place-item">
                <Card  className="place-item__content">
                     <Button to={`/editeaza_servicii`}>Editaza servicii</Button>
                </Card>
            </li>

            <li className="place-item">
                <Card  className="place-item__content">
                    <Button to={`/editeaza_preturi`}>Editaza preturi</Button>
                </Card>
            </li>

            
            <li className="place-item">
            <Card  className="place-item__content">
                 <Button to={`/editeaza_contact`}>Editaza contact</Button> 
            </Card>
            </li>
            </ul>
        </center>
        </div>
    );
}

export default Admin;