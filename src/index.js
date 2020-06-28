import React from 'react';
import ReactDOM from 'react-dom';
import './home/index.css';
import * as serviceWorker from './home/serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./common/navigation";
import headLogo from "./common/fond-entete.jpg";
import RouterOrganization from "./router/router";
import Footer from "./common/footer";

ReactDOM.render(
    <React.StrictMode>
        <div className={'container d-flex h-100'}>
            <div className='row justify-content-center align-self-center'>
                <div className={'col-12 mx-auto'}>
                    <img src={headLogo} alt='blanche-net' />
                </div>
                <div className={'col-12'}>
                    <Navigation/>
                </div>
                <RouterOrganization />
            </div>
            <Footer />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
