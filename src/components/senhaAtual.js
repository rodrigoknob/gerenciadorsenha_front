import React from 'react'

import { Card } from 'primereact/card';

import SenhaService from '../app/service/senhaService'

class Cliente extends React.Component {

  state = {
    senhaAtual: ''
  }

  constructor() {
    super()
    this.service = new SenhaService()
  }

  tick() {
    this.service.getSenhaAtual()
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
        <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Card title="Senha Atual" >
            <h5> { this.state.senhaAtual }</h5> 
          </Card>
        </div>
      </div>
    )
  }
}

export default Cliente