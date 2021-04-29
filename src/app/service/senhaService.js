import ApiService from '../apiservice'

class SenhaService extends ApiService {
  constructor() {
    super('/api')
  }

  gerarSenha(tipo) {
    return this.post('/gerarSenha', tipo)
  }

  proximaSenha() {
    return this.post('/proximaSenha', {})
  }

  zerarSenha() {
    return this.delete('/senhas', {})
  }

  getSenhaAtual() {
    return this.get('/senha')
  }
}

export default SenhaService