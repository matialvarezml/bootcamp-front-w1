// EJERCICIO 1
function Computadora(ram, cpu, disco, monitor, gpu){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

//EJERCICIO 2
const computersList = [];

computersList.push(
    new Computadora('8gb','intel','ssd','14',true),
    new Computadora('4gb','intel','ssd','17',false),
    new Computadora('16gb','amd','hdd','17',false),
    new Computadora('32gb','intel','ssd','14',true),
    new Computadora('8gb','amd','ssd','13',true)
);

computersList.forEach(computer => console.log('computer>>>', computer));

//EJERCICIO 3
const computerGpu = computersList.filter(computer => computer.gpu);

console.log('gpu computers>>>', computerGpu);

//EJERCICIO 4

const calcularLitros = (kms) => {
    return (kms / 100)*2;
}

const calcularGasto = (precioLitro, kms) => calcularLitros(kms) * precioLitro;

console.log(calcularGasto(100,25));
