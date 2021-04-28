import React from 'react'

import axios from 'axios'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
class Gerente extends React.Component {

    state = {
      senhaAtual: ''
    }


  proximaSenha = () => {
    axios.post('http://localhost:8080/api/proximaSenha', {
      
    }).then( response => {
      this.setState({senhaAtual: response.data.senhaFromatada})
    }).catch( error => {
      console.log(error.response);
    })
  }

  zerarSenha = () => {
    axios.delete('http://localhost:8080/api/senhas', {
    }).then(res => {
      this.setState({senhaAtual: ''})
    })
    .catch( error => {
      
      console.log(error.response);
    })
  }

  render () {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="container"  >
        <Card title="Área do Gerente" style={{  marginBottom: '2em' }}>

          <div className="row">
            <div className="col-md-6">
              <Card title="Controle das senhas"  >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <Button onClick={() =>  this.proximaSenha()} label="Próxima senha"></Button> 
                    </div>
                    <div className="col-md-6">
                      <Button onClick={() =>  this.zerarSenha()} label="Zerar senhas" className="p-button-danger" />
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
        </Card>
      </div>
      </div>
    )
  }
}

export default Gerente