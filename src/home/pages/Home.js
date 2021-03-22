import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

import './Home.css';

const Home = () => {

    return <React.Fragment>
         <div className="center">
                <div className="home">   
                  <b>SERVICII</b> 
                  <p className="content_text">
                      &nbsp; &nbsp; Executam servicii de inspectii tehnice periodice
                        (ITP) in Timisoara si imprejurimi, la urmatoarele categorii
                        de autovehicule:
                        <ul>
                            <li>
                                ITP autoturisme
                            </li>
                            <li>
                                ITP autoutilitare {"<"} 3,5 T
                            </li>
                            <li>
                                ITP auto 4 X 4
                            </li>
                            <li>
                                ITP auto GNC/GPL
                            </li>
                            <li>
                                ITP auto hibrid
                            </li>
                            <li>
                                ITP auto electric
                            </li>
                            <li>
                                ITP Taxi
                            </li>
                            <li>
                                ITP Transport alternativ
                            </li>
                            <li>
                                ITP auto fara servofrana
                            </li>
                        </ul>
                  </p>
                </div>
        </div>
    </React.Fragment>
}

export default Home;