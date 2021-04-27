import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


//Importar as páginas

import Cliente from './views/cliente';
import Gerente from './views/gerente';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cliente" component={Cliente} />
                <Route path="/gerente" component={Gerente} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;