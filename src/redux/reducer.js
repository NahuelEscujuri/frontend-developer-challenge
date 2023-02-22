import { GET_ALL_PRODUCTS, ADD_KEYWORDS, CLEAR_PRODUCTS } from "./action"

const initialState ={
    products:[],
    // keyWords:[]
}

export default function rootReducer(state = initialState, actions){
    switch(actions.type){
        case GET_ALL_PRODUCTS:{
            return{
                ...state,
                products:actions.payload
            }
        }
        case CLEAR_PRODUCTS:{
            return{
                ...state,
                products:actions.payload
            }
        }
        // case ADD_KEYWORDS:{
        //     if(keyWords == undefined)return
        //     return{
        //         ...state,
        //         keyWords:[...keyWords,actions.payload]
        //     }
        // }
    }
}