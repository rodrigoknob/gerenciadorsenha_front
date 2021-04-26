import React from 'react'
import Card from '../components/card'

import axios from 'axios'
class Login extends React.Component {

  gerarSenha = (tipo) => {
    axios.post('http://localhost:8080/api/gerarSenha', {
      tipo
    }).then( response => {
      console.log(response);
    }).catch( error => {
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
                      OI
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
            </div>
          </div>
        </div>  
      </div>

    )
  }
}

export default Login