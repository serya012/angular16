export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export interface TableRows {
    fname: string,
    lname: string,
    uname: string,
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'mariana targini',
        gmail: 'mari@gmail.com',
        productName: 'Reação Flexível',
        status: 'perigo',
        weeks: 35,
        budget: '95 mil'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: 'Aterrissando pro React',
        status: 'informações',
        weeks: 35,
        budget: '95 mil'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'ana luiza',
        gmail: 'ana@gmail.com',
        productName: 'Reacção de Elite	',
        status: 'aviso',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'matheus cabral',
        gmail: 'matheus@gmail.com',
        productName: 'Ampla reação',
        status: 'sucesso',
        weeks: 35,
        budget: '95 mil'
    },

]

export const Employee : TableRows[] = [
    {
        fname: "Mark",
        lname: "Otto",
        uname: "@mdo",
    },
    {
        fname: "Jacob",
        lname: "Thornton",
        uname: "@fat",
    },
    {
        fname: "Larry",
        lname: "the Bird",
        uname: "@twitter",
    }
]