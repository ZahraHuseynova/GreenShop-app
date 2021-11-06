import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    PRODUCT_LOADING,
    PRODUCT_FAILED
} from "./types";
import products from "../components/api/unsplash";
import history from "history";


export const signIn = (userId)=>{
    return {
        type:SIGN_IN,
        payload:userId,
    };
};

export const signOut=()=>{
    return{
        type:SIGN_OUT,
    }
    
}

export const fetchProducts=()=> async(dispatch)=>{
    const { data } = await products.get("/pages");

    dispatch({type:FETCH_PRODUCTS,payload:data});
};

export const fetchProduct=(id)=> async (dispatch)=>{
    const {data} =await products.get(`/pages/${id}`);
    dispatch({type:FETCH_PRODUCT,payload:data});
};

export const editProduct=(id,formValues)=>async(dispatch)=>{
    const {data} = await products.patch(`/pages/${id}`,formValues);
    dispatch({type:EDIT_PRODUCT,payload:data});
    history.push("/");
};

export const deleteProduct = (id)=>async(dispatch)=>{
    await products.delete(`/pages/${id}`);

    dispatch({type:DELETE_PRODUCT,payload:id});
    history.push("/");
};

export const productFailed = (errmess)=>({
    type:PRODUCT_FAILED,
    payload:errmess
});

export const productLoading = () =>({
    type:PRODUCT_LOADING,
    payload:products
})