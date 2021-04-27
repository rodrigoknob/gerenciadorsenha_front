import React from 'react'

import axios from 'axios'
import Card from '../components/card'

class Gerente extends React.Component {

    state = {
      senhaCliente: ''
  }


  proximaSenha = () => {
    axios.post('http://localhost:8080/api/proximaSenha', {
      
    }).then( response => {
      console.log(response.data)
      this.setState({senhaCliente: response.data.senhaFromatada})
    }).catch( error => {
      console.log(error.response);
    })
  }

  zerarSenha = () => {
    axios.delete('http://localhost:8080/api/gerarSenha', {
      
    })
    .catch( error => {
      console.log(error.response);
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={ {position: 'relative', left: '300px'} }>
              <div className="bs-docs-section">
              <Card title="Senha Atual">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                      { this.state.senhaCliente }
                    </div>
                </div>
              </Card>
            </div>
            <br/>
            <div className="bs-docs-section">
              <Card title="Gerar senha">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                      <div className="bs-component">
                        <button onClick={() =>  this.proximaSenha()} className="btn btn-success">Próxima Senha</button>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="bs-component d-flex justify-content-center">
                        <button onClick={() =>  this.zerarSenha()} className="btn btn-danger">Zerar senhas</button>
                      </div>
                    </div>
                </div>
              </Card>
              <br/>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Gerente