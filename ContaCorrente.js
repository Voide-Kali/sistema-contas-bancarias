const Conta = require('./Conta');

class ContaCorrente extends Conta {
  constructor(titular, cpf, saldo = 0, limiteChequeEspecial = 0) {
    super(titular, cpf, saldo);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  sacar(valor) {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  extrato() {
    super.extrato();
    console.log(`Limite Cheque Especial: R$ ${this.limiteChequeEspecial.toFixed(2)}`);
  }
}

module.exports = ContaCorrente;