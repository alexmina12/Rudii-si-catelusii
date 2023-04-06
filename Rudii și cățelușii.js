// Vaarianta 1 - Functii constructor
// const Persoana = function (nume, anulNasterii) {
//     this.nume = nume;
//     this.anulNasterii = anulNasterii;
// }

// Persoana.prototype.calculareVarsta = function () {
//     return 2023 - this.anulNasterii
// }

// const persoana1 = new Persoana('Mihai', 1989);
// const persoana2 = new Persoana('Florin', 2003);

// console.log(persoana1);
// console.log(persoana1.calculareVarsta());
// console.log(persoana2);

// Varianta 2 - Clase ES6
// class PersoanaNoua {
//     constructor(nume, anulNasterii) {
//         this.nume = nume;
//         this.anulNasterii = anulNasterii;
//     }
//     calculareVarsta() {
//         console.log(2023 - this.anulNasterii);
//     }
// }

// const persoana3 = new PersoanaNoua('Vlad', 1997);
// console.log(persoana3);
//console.log(persoana3 instanceof PersoanaNoua);
// persoana3.calculareVarsta();

// Varianta 3 = Object.create()
// const PersoanaPrototip = {
//     init(nume, anulNasterii) {
//         this.nume = nume;
//         this.anulNasterii = anulNasterii;
//     },
//     calculareVarsta() {
//         console.log(2023 - this.anulNasterii);
//     }
// }

// const persoana4 = Object.create(PersoanaPrototip);
// persoana4.init('Elena', 1989);
// console.log(persoana4)
// persoana4.calculareVarsta();




const Dog = function (nume, tipRasă, colorPar, birthDay, vaccin, passport) {
    this.nume = nume;
    this.tipRasă = tipRasă;
    this.colorPar = colorPar;
    this.birthDay = birthDay;
    this.vaccin = vaccin;
    this.passport = passport;
}
Dog.prototype.descriptionRudy = function() {
    return `${this.nume} are varsta de ${new Date().getFullYear() - new Date(this.birthDay).getFullYear()} ani, este un caine de rasa ${this.tipRasă}, are culoarea ${this.colorPar}, s-a nascut in anul ${this.birthDay} si ${!this.passport ? "nu" : ""}are voie sa iasa din Moldova si are ${this.vaccin.length} ${this.vaccin.length === 1 ? "vaccin" : "vaccinuri"} `
}
Dog.prototype.adaugareVaccin = function(vaccin) {
    this.vaccin.push(vaccin)
}
Dog.prototype.afiseazaIstoriculVaccinarii = function() {
    for (let i = 0; i < this.vaccin.length; i++) {
        console.log("Vaccinul " + this.vaccin[i].nume + " a fost facut pe data de " + this.vaccin[i].data)
    }
}
// const dog1 = new Dog('Rex', 'Labrador', 'rosu', '2020-10-20', [{nume: "hepatita canina", data: "2020-03-17"}], true)
// console.log(dog1.descriptionRudy())
// dog1.adaugareVaccin({nume: "antitetanus", data: "2020-03-17"})
// dog1.afiseazaIstoriculVaccinarii()









class Vaccin {
    constructor(nume, data) {
        this.nume = nume;
        this.data = data;
    }
}
const vaccin1 = new Vaccin("hepatita canina", "20.10.2023");
const vaccin2 = new Vaccin("antitetanus", "20.11.2023")

class Dog2 {
    constructor(nume, tipRasă, colorPar, birthDay, vaccin, passport) {
        this.nume = nume;
        this.tipRasă = tipRasă;
        this.colorPar = colorPar;
        this.birthDay = birthDay;
        this.vaccin = vaccin;
        this.passport = passport;
    }
    descriptionRudy() {
        console.log(`${this.nume} are varsta de ${new Date().getFullYear() - new Date(this.birthDay).getFullYear()} ani, este un caine de rasa ${this.tipRasă}, are culoarea ${this.colorPar}, s-a nascut in anul ${this.birthDay} si ${!this.passport ? "nu" : ""}are voie sa iasa din Moldova si are ${this.vaccin.length} ${this.vaccin.length === 1 ? "vaccin" : "vaccinuri"} `)
    }
    adaugareVaccin(vaccin) {
        this.vaccin.push(vaccin);
    }
    afiseazaIstoriculVaccinarii() {
        for (let i = 0; i < this.vaccin.length; i++) {
            console.log("Vaccinul " + this.vaccin[i].nume + " a fost facut pe data de " + this.vaccin[i].data)
        }
    }
}
const dog2 = new Dog('Alex', 'Caucazian', 'maro', '2019-06-12', [{nume: 'DHPPiL-R', data: '2020-08-16'}], true)
console.log(dog2)
dog2.descriptionRudy()
dog2.adaugareVaccin({nume: "DHPPiL-R", data: "2020-03-17"})
dog2.afiseazaIstoriculVaccinarii()








const DogPrototip = {
    init(nume, tipRasă, colorPar, birthDay, vaccin, passport) {
        this.nume = nume;
        this.tipRasă = tipRasă;
        this.colorPar = colorPar;
        this.birthDay = birthDay;
        this.vaccin = vaccin;
        this.passport = passport;
    },
    descriptionRudy() {
        console.log(`${this.nume} are varsta de ${new Date().getFullYear() - new Date(this.birthDay).getFullYear()} ani, este un caine de rasa ${this.tipRasă}, are culoarea ${this.colorPar}, s-a nascut in anul ${this.birthDay} si ${!this.passport ? "nu" : ""}are voie sa iasa din Moldova si are ${this.vaccin.length} ${this.vaccin.length === 1 ? "vaccin" : "vaccinuri"} `)
    },
    adaugareVaccin(vaccin) {
        this.vaccin.push(vaccin);
    },
    afiseazaIstoriculVaccinarii() {
        for (let i = 0; i < this.vaccin.length; i++) {
            console.log("Vaccinul " + this.vaccin[i].nume + " a fost facut pe data de " + this.vaccin[i].data)
        }
    }
}
// const dog3 = Object.create(DogPrototip)
// dog3.init('Nero', 'Ciobanesc German', 'negru', '2021-12-01', [{nume: "hepatita canina", data: "2022-01-04"}], false)
// console.log(dog3)
// dog3.descriptionRudy()
// dog3.adaugareVaccin({nume: "hepatita canina", data: "2022-03-17"})
// dog3.afiseazaIstoriculVaccinarii()
