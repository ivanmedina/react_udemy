import { getHeroeById } from './bases/08-imp_exp'
// import {getHer eById} from './bases/08-imp_exp';

// const promesa= new Promise( (resolve, reject)=>{
//     setTimeout( ()=>{
//         const p1=getHeroeById(2);
//         resolve(p1);
//     })
// },2000);

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch(err=>console.warn(err));

const getHeroesByIdAsync =(id)=>{

    return new Promise( (resolve, reject)=>{
            setTimeout( ()=>{
                const p1=getHeroeById(id);
                if(p1){
                    resolve( p1 );
                }else{
                    reject("No se pudo encontrar el heroe");
                }
            })
        },2000);

}

getHeroesByIdAsync(20)
.then(heroe=>console.log('Heroe', heroe))
.catch(console.warn)

// const promesa=