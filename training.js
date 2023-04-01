/**callbacks */

/* const modificar = (array,callback)=>{
    array.push("mario");

    callback(array)
}


const nombres = ["petronila","arcadio","alberto"];



const recorrer = (nombres)=>{
    nombres.forEach(item=>{
        console.log(item);
    })
}
modificar(nombres,recorrer); */


/**promises: async y await */

const data = [
    {
        title:"Aprendiendo JavaScript",
        year:'2021',
        isbn:"979-87001793994",
        author: 'Carlos Azaustre'
    },
    {
        title:"React.js Practico",
        year:'2022',
        isbn:"TB12",
        author: 'Carlos Azaustre'
    },
    {
        title:"Clean JavaScript",
        year:'2020',
        isbn:"979-8700179994",
        author: 'Miguel A. Gomez'
    }
];

function getData(){
    return data;
}

getData();