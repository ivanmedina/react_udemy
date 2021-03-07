import heroes from '../tests/data/heroes'
// console.log(heroes);
// const getHeroeById=(id)=>{
//     return heroes.find( (heroe)=>{
//         if(heroe.id===id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

// const getHeroeById=(id)=>{
//     return heroes.find( (heroe)=>heroe.id===id);
// }
// console.log(owners);

export const getHeroeById=(id)=> heroes.find( (heroe)=>heroe.id===id);



// console.log(getHeroeById(2));


