import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const CLEAR_PRODUCTS = "GET_ALL_PRODUCTS";
export const ADD_KEYWORDS = "ADD_KEYWORDS";


export function getAllProducts(){
    
    
    return function(dispatch){
        setTimeout(
            ()=>
            dispatch({
                    type: GET_ALL_PRODUCTS, payload: [
                        {
                            name:"HEADSET GAMER HAVIT HV-H2232 D",
                            img:"https://www.volpatocentro.com.ar/images/28760.JPG",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://http2.mlstatic.com/D_NQ_NP_935645-MLA31024702074_062019-O.jpg",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://http2.mlstatic.com/D_NQ_NP_750922-MLA47396780764_092021-O.jpg",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://www.qloud.ar/SITES/ryr/fotos/5876-0.jpg",
                            code:"CODE895432",
                            price:1500
                        },
                        {
                            name:"HEADSET GAMER HAVIT HV-H2232 D",
                            img:"https://www.volpatocentro.com.ar/images/28760.JPG",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://http2.mlstatic.com/D_NQ_NP_935645-MLA31024702074_062019-O.jpg",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://http2.mlstatic.com/D_NQ_NP_750922-MLA47396780764_092021-O.jpg",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://www.qloud.ar/SITES/ryr/fotos/5876-0.jpg",
                            code:"CODE895432",
                            price:1500
                        },
                        {
                            name:"HEADSET GAMER HAVIT HV-H2232 D",
                            img:"https://www.volpatocentro.com.ar/images/28760.JPG",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://http2.mlstatic.com/D_NQ_NP_935645-MLA31024702074_062019-O.jpg",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://http2.mlstatic.com/D_NQ_NP_750922-MLA47396780764_092021-O.jpg",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://www.qloud.ar/SITES/ryr/fotos/5876-0.jpg",
                            code:"CODE895432",
                            price:1500
                        },
                        {
                            name:"HEADSET GAMER HAVIT HV-H2232 D",
                            img:"https://www.volpatocentro.com.ar/images/28760.JPG",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://http2.mlstatic.com/D_NQ_NP_935645-MLA31024702074_062019-O.jpg",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://http2.mlstatic.com/D_NQ_NP_750922-MLA47396780764_092021-O.jpg",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://www.qloud.ar/SITES/ryr/fotos/5876-0.jpg",
                            code:"CODE895432",
                            price:1500
                        },
                    ]
            }),
            3000    
        )
    }
}

export function clearProducts(){
    return function(dispatch){
        dispatch({
            type: CLEAR_PRODUCTS, payload:[]
        })
    }
}
// export function addKeyWord(keyWord){
//     return function(dispatch){
//         dispatch({
//         type: ADD_KEYWORDS, payload:keyWord
//     })
//     }
// }
