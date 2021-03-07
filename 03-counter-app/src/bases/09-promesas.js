import { getHeroeById } from './08-imp_exp'

export const getHeroesByIdAsync =(id)=>{

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