import React, {useRef, useEffect} from 'react';

import './Map.css';

const Map = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {

        
        const contentString = "<p><b>ITP SAG</b></p>" +
                              "<p>Strada XX a, Șag 307395</p>"+ 
            "<a href='https://www.google.com/maps/place/Itp+Sag/@45.654214,21.172736,17z/data=!3m1!4b1!4m5!3m4!1s0x47455b7b33c11647:0x7a83ce2b1dca7415!8m2!3d45.654214!4d21.1749247'>" +
           "View on Google Maps</a>";

        const infoWindow = new window.google.maps.InfoWindow(
            {content: contentString}  
        );

        const map = new window.google.maps.Map(mapRef.current, {
            center: props.center,
            zoom: zoom
        });

        const marker = new window.google.maps.Marker({
            position: center,
            map: map
        })


        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        })


    }, [center, zoom]);

    return <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
    />
}

export default Map;