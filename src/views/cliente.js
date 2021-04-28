import React from 'react'

import { Card } from 'primereact/card';

import { Button } from 'primereact/button';
import axios from 'axios'

class Cliente extends React.Component {

  state = {
    senhaAtual: '',
    senhaCliente: ''
  }

  gerarSenha = (tipo) => {
    axios.post('http://localhost:8080/api/gerarSenha', {
      tipo
    }).then( response => {
      this.setState({senhaCliente: response.data.senhaFromatada})
    }).catch( error => {
      console.log(error.response);
    })
  }

  tick() {
    axios.get('http://localhost:8080/api/senha')
    .then( response => {      
      this.setState({senhaAtual: response.data})  
    }).catch( error => {
      console.log(error.response);
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 3000);
  }

  

  render () {

    return (

      <div >
        <div className="container" style={{ marginTop: '15em'}} >
          <Card title="Área do Cliente" style={{  marginBottom: '2em' }}>

            <div className="row">
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

              <div className="col-md-6">
                <Card title="Senha Atual">
                  { this.state.senhaAtual }
                </Card>
              </div>
            </div>

            <div className="row" style={{marginTop: '1em'}}>
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