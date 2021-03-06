import React from 'react'

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import SenhaService from '../app/service/senhaService'

class Cliente extends React.Component {

  state = {
    senhaCliente: ''
  }

  constructor() {
    super()
    this.service = new SenhaService()
  }

  gerarSenha = (tipo) => {
    this.service.gerarSenha({
      tipo
    }).then( response => {
      this.setState({senhaCliente: response.data.senhaFormatada})
    }).catch( error => {
      console.log(error.response);
    })
  }

  render () {

    return (

      <div >
        <div className="container" style={{width: '80vh'}} >
          <Card title="Área do Cliente" style={{  marginBottom: '2em' }}>

            <div className="row" style={{alignItems: 'center', justifyContent: 'center'}}>
              <div className="col-md-6">
                <Card title="Gerar Senha"  >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <Button label="Normal" onClick={() =>  this.gerarSenha('N')}></Button> 
                      </div>
                      <div className="col-md-6">
                        <Button label="Preferencial"  onClick={() =>  this.gerarSenha('P')} className="p-button-danger" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

          
            </div>

            <div className="row" style={{marginTop: '1em', alignItems: 'center', justifyContent: 'center'}}>
              <div className="col-md-6">
                <Card title="Sua Senha">
                  
                  { this.state.senhaCliente }
                </Card>
              </div>
            </div>            
          </Card>
        </div>
      </div>
    )
  }
}

export default Cliente