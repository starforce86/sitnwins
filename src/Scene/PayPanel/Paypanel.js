import React from 'react';
import './PayPanel.css';

const providers = [
    {
        pId: 0,
        imgSrc: 'visa.png',
        toPath: 'https://www.visa.com',
    },
    {
        pId: 1,
        imgSrc: 'mastercard.png',
        toPath: 'https://www.mastercard.com',
    },
    {
        pId: 2,
        imgSrc: 'paypal.png',
        toPath: 'https://www.paypal.com',
    },
    {
        pId: 3,
        imgSrc: 'skrill.png',
        toPath: 'https://www.skrill.com',
    },
    {
        pId: 4,
        imgSrc: 'neteller.png',
        toPath: 'https://www.neteller.com',
    },
    {
        pId: 5,
        imgSrc: 'sofort.png',
        toPath: 'https://www.klarna.com/sofort/',
    },
    {
        pId: 6,
        imgSrc: 'paysafecard.png',
        toPath: 'https://www.paysafecard.com',
    },
    {
        pId: 7,
        imgSrc: 'giropay.png',
        toPath: 'http://www.giropay.com',
    },
]


const  PayPanel = props => (
    <div class="paypanel d-flex flex-row justify-content-center w-100 py-2">
        {
            providers.map((provider, i) =>
                <a class='d-flex flex-column hvr-float-shadow mx-3 my-2' href={ provider.toPath }><img class='paycard' src={require(`./img/${provider.imgSrc}`)} alt={provider.imgSrc} /></a>
            )
        }
    </div>
)

export default PayPanel;
