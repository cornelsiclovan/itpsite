import React, {useEffect, useState} from 'react';
import {useHttpClient} from '../../hooks/http-hook';
import HomeList from '../components/HomeList';

import './Home.css';
const BASE_URL=process.env.REACT_APP_BASE_URL;

const Home = () => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedItems, setLoadedItems] = useState();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/items`)
               
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
                      &nbsp; &nbsp;<b>Statie ITP Sag</b> <br/>
                      <br/>
                      &nbsp; &nbsp; Iti expira in curand inspectia tehnica periodica? Te asteptam la statia noastra <b>ITP</b> din <b>Timisoara</b>, deschisa
                      inclusiv <b>sambata</b>, unde tu iti savurezi cafeaua iar noi ne ocupam de masina ta asa cum trebuie.
                      <br/>
                      <br/>
                      &nbsp;&nbsp; De ce alegi <b>ITP Sag</b>?
                      <br/>
                      <br/>
                      &nbsp;&nbsp; <b>Profesionisti dedicati</b>
                      <br/>
                    
                      &nbsp;&nbsp; Vei beneficia de serviciile unei echipe cu experienta in domeniul inspectiei tehnice periodice.
                      <br/>
                      <br/>
                      &nbsp;&nbsp; <b>Preturi corecte</b>
                      <br/>
                   
                      &nbsp;&nbsp; Ai parte de tarife avantajoase si transparente, raportate strict la serviciile de care vei beneficia.
                      <br/>
                      <br/>
                      &nbsp;&nbsp; <b>Programare online sau telefonica</b>
                      <br/>
                      &nbsp;&nbsp; Ai posibilitatea sa te programezi online sau telefonic pentru ITP de luni pana vineri, de la 8:00 la 20:00,
                            iar daca vrei sa faci <b> ITP sambata in Timisoara </b>, suntem prezenti de la 8:00 la 14:00.
                      <br/>
                      <br/>
                      &nbsp;&nbsp; <b>Sala de asteptare moderna</b>
                      <br/>
                      &nbsp;&nbsp; Poti astepta in sala de asteptare din incinta statiei noastre ITP.
                      <br/>
                      &nbsp;&nbsp; Efectuam <b>ITP in Timisoara, Timisoara, Sag, Jebel, Ciacova, Deta, Vama Moravita, Padureni, Liebling,
Parta, Peciu Nou pentru</b>:
                    </p>
                    <div className="center-text">
                        <ul className="content_text">

                            {!isLoading && loadedItems && <HomeList items={loadedItems}/>}
                        </ul>
                    </div>
                    <p className="content_text">
                        &nbsp;&nbsp; La noi vei gasi intotdeauna servicii de calitate si personal amabil si te vei afla in prim plan. Timpul tau
                        este foarte important, iar acesta este motivul pentru care suntem intotdeauna punctuali si respectam
                        termenele de lucru.
                        <br/>
                        <br/>
                        &nbsp;&nbsp; Cauti <b>programare ITP, pret ITP Timisoara, sau ITP rapid Timisoara sau ITP sambata sau ITP in Sag,
                        Jebel, Ciacova, Deta, Vama Moravita, Padureni, Liebling, Parta, Peciu Nou, Giulvaz, Foeni</b>?  Venim in
                        intampinarea ta cu linia de inspectie tehnica moderna si cu un raport corect calitate – pret.
                        <br/>
                        <br/>
                        &nbsp;&nbsp;<b>Documente necesare</b>
                        <br/>
                        &nbsp; Nu uita sa ai in posesia ta urmatoarele documente:
                        <br/>
                        <ul>
                            <li>
                                Certificatul de inmatriculare al autovehiculului (talon)sau autorizatia provizorie de circulatie
                            </li>
                            <li>
                                Cartea de identitate a autovehiculului (in cazul in care, masina este in leasing, se accepta o copie
                                dupa cartea de identitate a masinii, stampilata de firma de leasing, pe care sa apara si
                                mentiunea “conform cu originalul”);
                            </li>
                            <li>    
                                Cartea de identitate a a conducatorului auto care prezinta autoturismul la inspectie;
                            </li>
                            <li>
                                Pentru TAXI si SCOALA: certificatul de agreere taxi eliberat de catre RAR.
                            </li>
                        </ul>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                    </p>
                </div>
        </div>
    </React.Fragment>
}

export default Home;