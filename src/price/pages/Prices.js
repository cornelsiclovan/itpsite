import React from 'react';

import PriceList from '../components/PriceList'

const Prices = () => {
    const SERVICES = [{
            'id':   '1',
            'name': 'AUTOTURISM M1',
            'revenire': 'gratuit',
            'price': '100',
            'currency': 'RON',
            'image': 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/dacia_sandero_2020_official_images_-_front.jpg?itok=Njk9v875'
        }, {
            'id': '2',
            'name': 'TAXI',
            'revenire': 'gratuit',
            'price': '60',
            'currency': 'RON',
            'image': 'http://www.visitbratislava.com/wp-content/uploads/2015/03/Taxi.jpg'
        }, {
            'id': '3',
            'name': 'AUTOUTILITARA N1',
            'revenire': 'gratuit',
            'price': '150',
            'currency': 'RON',
            'image': 'http://www.executarionline.ro/images/2016/05/05/388/dacia-lodgy-autoutilitara-opel-vw-buldoexcavator-utilaj-periere-tractor_1.jpg'
        }
    ]

    return <React.Fragment>
         <PriceList items={SERVICES}/>
    </React.Fragment>

}

export default Prices;