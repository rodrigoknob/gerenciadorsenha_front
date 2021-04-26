import React from 'react'
import Card from '../components/card'

import axios from 'axios'
class Login extends React.Component {

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
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={ {position: 'relative', left: '300px'} }>
              <div className="bs-docs-section">
              <Card title="Senha Atual">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                      { this.state.senhaAtual }
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
                        <button onClick={() =>  this.gerarSenha('N')} className="btn btn-success">Normal</button>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="bs-component d-flex justify-content-center">
                        <button onClick={() =>  this.gerarSenha('P')} className="btn btn-info">Preferencial</button>
                      </div>
                    </div>
                </div>
              </Card>

              <br/>
                    <div className="bs-docs-section">
              <Card title="Sua Senha">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                      { this.state.senhaCliente }
                    </div>
                </div>
              </Card>
            </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Login