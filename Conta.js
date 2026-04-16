class Conta {
  constructor(titular, cpf, saldo = 0) {
    this.titular = titular;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  extrato() {
    console.log(`Titular: ${this.titular}, CPF: ${this.cpf}, Saldo: R$ ${this.saldo.toFixed(2)}`);
  }
}

module.exports = Conta;