const ContaCorrente = require('./ContaCorrente');
const ContaPoupanca = require('./ContaPoupanca');
const ContaSalario = require('./ContaSalario');

console.log('=== Sistema de Contas Bancárias ===\n');

const contaCorrente = new ContaCorrente('Sthefany', '12345678901', 1000, 500);
const contaPoupanca = new ContaPoupanca('Voide', '98765432109', 2000, 0.02);
const contaSalario = new ContaSalario('voz', '11122233344', 1500);


console.log('--- Conta Corrente ---');
contaCorrente.depositar(200);
console.log('Depósito de R$ 200 realizado.');
contaCorrente.sacar(1200); // Deve usar o limite
console.log('Saque de R$ 1200 realizado (usando limite).');
contaCorrente.extrato();
console.log();

console.log('--- Conta Poupança ---');
contaPoupanca.depositar(300);
console.log('Depósito de R$ 300 realizado.');
contaPoupanca.render();
console.log('Rendimento mensal aplicado.');
contaPoupanca.sacar(500);
console.log('Saque de R$ 500 realizado.');
contaPoupanca.extrato();
console.log();


console.log('--- Conta Salário ---');
contaSalario.depositar(100);
console.log('Depósito de R$ 100 realizado.');
contaSalario.sacar(200);
console.log('Primeiro saque grátis de R$ 200 realizado.');
contaSalario.sacar(300); // Deve falhar
console.log('Tentativa de segundo saque de R$ 300 (deve falhar).');
contaSalario.extrato();
console.log();

console.log('=== Fim da Demonstração ===');