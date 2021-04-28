import React from 'react'

import axios from 'axios'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
class Gerente extends React.Component {

  

  proximaSenha = () => {
    axios.post('https://geradorsenha-api.herokuapp.com/api/proximaSenha', {
      
    }).then( response => {
      this.setState({senhaAtual: response.data.senhaFormatada})
    }).catch( error => {
      console.log(error.response);
    })
  }

  zerarSenha = () => {
    axios.delete('https://geradorsenha-api.herokuapp.com/api/senhas', {
    })
    .catch( error => {
      
      console.log(error.response);
    })
  }

  render () {
    return (
      <div >
      <div  className="container" style={{width: '80vh'}} >
        <Card title="Área do Gerente" style={{  marginBottom: '2em' }}>
          <div className="row" style={{alignItems: 'center', justifyContent: 'center'}}>
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
          </div>
        </Card>
      </div >
      </div>
    )
  }
}

export default Gerente