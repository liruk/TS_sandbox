import {GetterTree} from 'vuex';
import {BCDicesState, RootState} from '@/store/types';
 
const getters: GetterTree<BCDicesState, RootState>={
    arraysize(state: BCDicesState){
        return state.bcdices.length;
    },
    getBCDice: (state,getters)=>(id: string)=>{
        const items = state.bcdices.filter((item)=>{
            return item.id === id
        })
        return items[0];
    }
};
export default getters;