const Conta = require('./Conta');

class ContaPoupanca extends Conta {
  constructor(titular, cpf, saldo = 0, taxaRendimento = 0.01) {
    super(titular, cpf, saldo);
    this.taxaRendimento = taxaRendimento;
  }

  render() {
    this.saldo += this.saldo * this.taxaRendimento;
  }

  sacar(valor) {
    return super.sacar(valor);
  }

  extrato() {
    super.extrato();
    console.log(`Taxa de Rendimento Mensal: ${(this.taxaRendimento * 100).toFixed(2)}%`);
  }
}

module.exports = ContaPoupanca;