import _ from 'lodash';
import { FETCH_PRODUCT,FETCH_PRODUCTS, EDIT_PRODUCT,DELETE_PRODUCT,PRODUCT_FAILED,PRODUCT_LOADING } from '../actions/types';

export const productsReducer = (state={},action)=>{
    switch(action.type){
        case FETCH_PRODUCT:
        case EDIT_PRODUCT:
            return {...state,[action.payload.id]:action.payload};
        case DELETE_PRODUCT:
            return _.omit(state,action.payload);
        case FETCH_PRODUCTS:
            return {...state,..._.mapKeys(action.payload,"id")};
        default:
            return state;
    }
};

export const Products=(state={
    isLoading:true,
    errMess:null,
    products:[]},action)=>{
       switch(action.type){
        case PRODUCT_LOADING:
            return {...state,isLoading:true,errMess:null,products:[]};
        case PRODUCT_FAILED:
            return{...state,isLoading:false,errMess:action.payload,products:[]};
        default:
            return state;
    }
}