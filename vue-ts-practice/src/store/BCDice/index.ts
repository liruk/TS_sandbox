import { Module } from 'vuex';
import { RootState } from '../types';
import { BCDicesState } from '../types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: BCDicesState = {
    bcdices: [],//bcdicesはローカル変数？
};

export const bcdices: Module<BCDicesState, RootState> = {
    namespaced:true,
    state,
    getters,
    actions,
    mutations,
};