import { heroes } from '../../data/heroes';
export const GetHeroesById=(id)=>{
    return heroes.filter(hero=> hero.id === id);
}