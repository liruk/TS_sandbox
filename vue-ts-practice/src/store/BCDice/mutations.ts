import {MutationTree} from 'vuex';
import {BCDicesState, BCDice} from '@/store/types'

const mutations: MutationTree<BCDicesState>={
    containResponse(state, payload: {res: {[s: string]: string};index: number}){
        if(payload.index===undefined){
            return
        }else{
            state.bcdices[payload.index].response=payload.res.result;
        }
    },
    writeCommand(state,payload: {command: string;system: string;id: string; index: number}){
        if(payload.index===undefined){
            return
        }else{
            state.bcdices[payload.index].command=payload.command;
            state.bcdices[payload.index].system=payload.system;
        }
    },
    add(state: BCDicesState){
        const entity: BCDice={id:String(state.bcdices.length),
            done:false,
            system:'Cthulhu',
            command:'1d100',
            response:""};
        state.bcdices.push(entity);
        return;
    }
};
export default mutations;