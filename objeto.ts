interface Personaje {
    name: string,
    life: number,
    skills: string[],
    puebloNatal?: string,
    mostrarPuntosDeVida: () => void,
    address?: Address
}

interface Address {
    street: string,
    city: string,
    country: string
    showAddress: () => string;
}

let objeto: Personaje = {
    name: "gaga",
    life: 100,
    skills: ["volar", "cocinar"],
    puebloNatal: "Ceuta",
    mostrarPuntosDeVida() {
        console.log(`Tengo ${this.life} puntos`)
    },
    address:{
        street: "Uwu St.",
        city: "Dos Hermanas",
        country: "Sevilla Este",
        showAddress(){
            return `Miarma vives en ${this.street} calle, en ${this.city} (atomarporculo), en ${this.country}`
        }
    }
}

console.table(objeto)
console.log(objeto)
console.log(objeto.address?.showAddress())