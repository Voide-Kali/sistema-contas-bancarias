const Conta = require('./Conta');

class ContaSalario extends Conta {
  constructor(titular, cpf, saldo = 0) {
    super(titular, cpf, saldo);
    this.saquesGratisRestantes = 1; // 1 saque grátis por mês
  }

  sacar(valor) {
    if (this.saquesGratisRestantes > 0) {
      this.saquesGratisRestantes--;
      return super.sacar(valor);
    } else {
      console.log("Limite de 1 saque grátis por mês atingido. Saque não realizado.");
      return false;
    }
  }

  extrato() {
    super.extrato();
    console.log(`Saques Grátis Restantes: ${this.saquesGratisRestantes}`);
  }
}

module.exports = ContaSalario;