/**JavaScript (promesas, Async, Await) */

/**callback: una funcion de callback es una funcion que se pasa a otra
 * funcion como un argumento, que luego se invoca dentro de la funcion
 * externa para completar algun tipo de rutina o accion
 * .Cada vez se ocupan menos
 * .Pasar una funcion como argumento
 */

/* const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];
 */
/* const findPostById = (id,callback)=>{
    const post = posts.find(p=>p.id===id);

    if(post){
        callback(null,post);
    }else{
        callback("no se encontro ese post con id " + id);
    }
    
}; */
/* 
const llamada = (post)=>{
    console.log(post);
}
findPostById(8,llamada);
 */
/**los callbacks reciben una funcion como parametro,
 * entonce yo lo simplifique creando una funcion en ves de hacerla por
 * parametro
 */

/* findPostById(5,(err,post)=>{
    if(err){
        return console.log(err)
    }
    console.log(post);
}) */


/**promesas: es un objeto que representa la terminacion o el fracaso
 * de una operacion asincrona
*/

/* const findPostById = (id)=>{
    const post = posts.find(p=>p.id===id);

    return new Promise((resolve,reject)=>{
        if(post){
            resolve(post);
        }else{
            reject("no se encontro el post con id " + id);
        }
    });
}; */

/* const findPostById = id=> new Promise((resolve,reject)=>{
    const post = posts.find(p=>p.id===id);
    if(post){
        resolve(post);
    }else{
        reject("no se encontro el post con id " + id);
    }
});
 */

/* findPostById(1)
    .then(post=>console.log(post))
    .catch(e=>console.log(e)); */

/**Async Await
 * async: la declaracion de funcion async define una funcion asincrona,
 * la cual devuelve una asyncFunction
 * await: el operador await es usado para esperar a una promise.
 * solo puede ser usado dentro de una funcion async function
 * 
 */

/* const buscarPost = (id)=> new Promise((resolve,reject)=>{
    setTimeout(() => {
        const post = posts.find(p=>p.id===id);
        if(post){
            resolve(post);
        }else{
            reject("no se encontro el post con id " + id);
        }
    }, 1000);
})

const buscar = async (id)=>{
    try {
        const post = await buscarPost(id);
        console.log(post);        
    } catch (error) {
        console.log(error);
    }
}

buscar(5);
 */


/**quizas habran casos en que quieras mandar varios post al mismo
 * tiempo
 */

/* const buscar2 = async ()=>{
    try {
        const post = await buscarPost(1);
        const post2 = await buscarPost(2);
        console.log(post,post2);        
    } catch (error) {
        console.log(error);
    }
} */
//Forma Incorrecta

//buscar2();  
/**la forma incorrecta hace que se acumulen los await por asi 
 * decirlo, en este caso en vez de durar 2 segundos para que se 
 * ejecute mi codigo, dura el doble(4)
 */

//Forma Correcta

/**tambien debes tener en cuenta de que si el post 1 no depende del
 * post 2, entonces hazlo de la forma correcta
 */
/* const buscar2 = async ()=>{
    try {
        const resPosts = await Promise.all([
            buscarPost(1),
            buscarPost(2)
        ])
        console.log(resPosts);
    }catch (error) {
        console.log(error);
    }
}

buscar2();
 */

/**Introduccion a Fetch: la API fetch proporciona una interfaz para recuperar recurso
 * (incluso a traves de la red). resultara familiar a cualquiera que
 * haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto
 * de caracteristicas mas potente y flexible
 * .El metodo fetch() toma un argumento obligatorio, la ruta de
 * acceso al recurso que desea recuperar
 * .Devuelve una promise que resuelve en response a esa peticion, sea
 * o no correcta.
 * .Una vez que response es recuperada, hay varios metodos disponibles
 * para definir cual es el contenido del cuerpo y como se debe
 * manejar
 */

const url = "https://jsonplaceholder.typicode.com/posts/";

/* fetch(url)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e))
    .finally(()=>console.log("first")); */


const findPostById = async (id)=>{
    try {
        const res = await fetch(url+id)
        const post = await res.json()
        console.log(post)
    } catch (error) {
        console.log(error)
    }
}

findPostById(11);

/**API: son construcciones disponibles en los lenguajes de programa-
 * cion que permiten a los desarrolladores crear funcionalidades
 * complejas de una manera simple. estas abstraen el codigo mas com-
 * plejo para proveer una sintaxis mas facil de usar en su lugar
 * 
 * si quisieras programar graficos 3D, seria mucho mas facil hacerlo
 * usando una API escrita en un lenguaje de alto nivel como
 * JavaScript o python, en lugar de intentar escribir codigo de bajo
 * nivel (por ejemplo: C o C++) que controle directamente la GPU del
 * equipo u otras funciones graficas
 */


/**API Rest: cuando queremos comunicar nuestro mundo del frontend
 * con el backend (por ejemplo con node.js) necesitamos alguna 
 * tecnica. aqui es donde nosotros podemos construir nuestra propia
 * API para que nuestras aplicaciones se comuniquen de manera efectiva
 * 
 * 
 * para que la comunicacion no sea un despelote existe el termino de
 * REST, que es un estandar para la construccion de API, una tecnica
 * de arquitectura de software usada para construir apis que permitan
 * comunicar a nuestro servidor con sus clientes usando el protocolo
 * HTTP mediante URIs lo suficientemente inteligentes para poder sa-
 * tisfacer la necesidad del cliente.
 *   
 */

/**Que es Resful?: RestFul es la implementacion y al crear un restful
 * creamos una API, la cual una API es un conjunto de funciones o 
 * procedimients para que sea utilizado por otro software
 */


/**Fetch: es una interfaz para hacer solicitudes Ajax en JavaScript
 * es usado generalmente para hacer una solicitud a un API. 
 * .El metodo fetch() toma un argumento obligatorio, la ruta de acceso
 * al recurso que desea recuperar 
 */

/**Ajax:
 * .JavaScript asincrono + XML(viejo, ahora utilizamos JSON)
 * .AJAX no es una tecnologia por si misma, es un termin que describe
 * un nuevo modo de utilizar conjuntamente varias tecnologias
 * existentes.
 * .Esto incluye HTML,CSS,JavaScript,DOM,JSON y lo mas importante,el 
 * Fetch
 * .cuando estas tecnologias se combinan en un modelo AJAX, es 
 * posible lograr aplicaciones web capaces de actualizarse continu-
 * amente sin tener que volver a cargar la pagina completa
 * .Esto crea aplicaciones mas rapidas y con mejor respuesta a las 
 * acciones del usuario
 */