import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../hooks/http-hook';
import HomeList from '../components/HomeList';

import './Home.css';

const Home = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedItems, setLoadedItems] = useState();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const responseData = await sendRequest('http://localhost:5000/api/items')
               
                setLoadedItems(responseData.items);               
                console.log(loadedItems)
            } catch(err){}
        };
        fetchItems();
    }, [sendRequest]);


    return <React.Fragment>
         <div className="center">
                <div className="home">   
                  <b>SERVICII</b> 
                  <p className="content_text">
                      &nbsp; &nbsp; Executam servicii de inspectii tehnice periodice
                        (ITP) in Timisoara si imprejurimi, la urmatoarele categorii
                        de autovehicule:
                    </p>
                    <div className="center-text">
                        <ul className="content_text">

                            {!isLoading && loadedItems && <HomeList items={loadedItems}/>}
                        </ul>
                    </div>
                </div>
        </div>
    </React.Fragment>
}

export default Home;