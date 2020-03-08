import {ActionTree} from 'vuex';
import {BCDicesState, RootState, BCDice} from '@/store/types';
import axios from 'axios';

const actions: ActionTree<BCDicesState, RootState> = {
    async post({commit,state},index: number){
        const res: {[s: string]: object} = await axios.get(`https://bcdice.onlinesession.app/v1/diceroll`,
        {params:{system: state.bcdices[index].system,command: state.bcdices[index].command}})
        if(res!==undefined){
            commit('containResponse',{res: res.data,index: index});
            return true;
        }
        return false;
        
    },
    async add({commit}){
        function adding(){
            return new Promise((resolve)=> resolve(commit('add')));
        }
        await adding()
    }
};
export default actions;