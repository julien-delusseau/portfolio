import {Fragment} from 'react';
import {Route} from 'react-router-dom';
import {Home} from './views/Home/Home';
import {Navigation} from './components/Navigation/Navigation';
import {About} from './views/About/About';
import {AnimatedSwitch} from 'react-router-transition';
import {Portfolio} from './views/Portfolio/Portfolio';
import {Contact} from './views/Contact/Contact';

export const App = () => {
    return (
        <Fragment>
            <AnimatedSwitch atEnter={{opacity: 0}}
                            atLeave={{opacity: 0}}
                            atActive={{opacity: 1}}
                            className="switch-wrapper"
            >
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
            </AnimatedSwitch>
            <Navigation/>
        </Fragment>
    );
};