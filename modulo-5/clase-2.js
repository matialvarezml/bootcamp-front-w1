//EJERCICIO 1
function CuentaBancaria(nombre, apellido, numeroCuenta, saldo = 0) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
    this.movimientos = [];

    this.totalDebito = 0;
    this.totalCredito = 0;

    //EJERCICIO 2
    this.mostrarNombreCompleto = () => `${this.nombre} ${this.apellido}`;

    this.debitarDinero = (monto) => {
        if(this.saldo < monto) {
            return 'saldo insuficiente.';
        }
        this.movimientos.push(`debito ${new Date()}`)
        this.totalDebito += monto;
        this.saldo -= monto;
        return this.mostrarSaldo();
    }

    this.acreditarDinero = (monto) => {
        this.saldo += monto;
        this.movimientos.push(`credito ${new Date()}`)
        this.totalCredito += monto;
        return this.mostrarSaldo();
    }

    this.mostrarSaldo = () => `su saldo actual es $${this.saldo}`;

    this.mostrarMovimientos = () => {
        this.movimientos.forEach(movimiento => console.log(movimiento));
    }
}

//EJERCICIO 3
const cuenta1 = new CuentaBancaria('Matias','Alvarez',123456, 11);

console.log(cuenta1.mostrarNombreCompleto());
console.log(cuenta1.debitarDinero(10));
console.log(cuenta1.acreditarDinero(20));
cuenta1.mostrarMovimientos();

const cuenta2 = new CuentaBancaria('Pepe','Pompin',123457, 22);

console.log(cuenta2.mostrarNombreCompleto());
console.log(cuenta2.debitarDinero(10));
console.log(cuenta2.acreditarDinero(20));
cuenta2.mostrarMovimientos();

const cuenta3 = new CuentaBancaria('Cosme','Fulanito',1234, 10000);

console.log(cuenta3.mostrarNombreCompleto());
console.log(cuenta3.debitarDinero(10));
console.log(cuenta3.debitarDinero(1));
console.log(cuenta3.acreditarDinero(20));
console.log(cuenta3.acreditarDinero(20));
console.log(cuenta3.acreditarDinero(20));
cuenta3.mostrarMovimientos();

//EJERCICIO 4
const credito = cuenta3.movimientos.filter( mov => mov.includes('credito') );
console.log('movimientos credito >>>', credito);

const debito = cuenta3.movimientos.filter( mov => mov.includes('debito') );
console.log('movimientos debito >>>', debito);

//EJERCICIO 5
console.log(`total dinero acreditado ${cuenta3.totalCredito}`);
console.log(`total dinero debitado ${cuenta3.totalDebito}`);
