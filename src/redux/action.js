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
                            img:"https://s3-alpha-sig.figma.com/img/c7fe/9e47/798f77c39bb5f19567714c57a1a0ec38?Expires=1678060800&Signature=Y30NQOV0Nv1H8peqXf~uCoI2d5A~KT8YfLGFuOL-dPRQoBsm4X1HguLgd0nztnA3MVRxTGIa6jpJ3gijiqpSKHweB82NVNbG1bwJcP0WsDd6FYzWnAzQU3UDaQkvPE4hlDiJLUD98eTdP-C9Ni25SHFY0yez46LD9Vh9CEok6M4jb-Ed5iYmraKhV~A~p1m9TFn-C4S4uaNeaKHJNLyWx~zTR1Jq6rvoGRzVVVwjTN3ux3K~61z3yAZuGeSvKG1GHfhwvALd-lcA2atUa4vwLBaeQ5aOExT9z7KdYhartICsj1W7JkGYVckD8Wu7WCXYh9lNaSZ5Z56V~9hk2zigpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9170/6977/164372f84f76836c30cb4fb87a9a205d?Expires=1678060800&Signature=XisX1yCD~dL6tH92EJVu9bOzgFihP2HdAK3cbnHvOR5eVnIz79W69k-pwA0pllcyaL7s5-ATqI0v4uY~LrP2MLzXMMs0KoTwOfvGrjG6EYE31v2nI5BMnt4kSdPHjIpUqZul0J2N9JgEsxdbp6E8sUgSXlnE3TVD8CUHOP~HUweUqMF6alJt4TyubUDDKC7v5s2K3EIQ3Vc7UehqMJVVddP3UjUEqs1rX5w6wqgZ75o-F48ibHa~d1b3iO0wrKBceTYiHqD54Hvj3GQcwEmOV0SEWS1FG31Bz-f8uqlttZFXoVUlu0hspQofKysUS44grmHbQEEsfuvKo0s3BOcNLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://s3-alpha-sig.figma.com/img/f85f/ac01/34901196d476c20732a41de70995bec9?Expires=1678060800&Signature=qDS4vtuL~XDhPvc3wWXVPzeJx4fqPSJmIfuwssGL0yQgH6TUIxoyG5dNoKPuYiHkOhk5eNBfgGdSR9WLSYZPl4mqlJea7uTZ~xD3Vn0pN2E8UzLyW8rKOgeAh3-RuL7OmqTRCIElsE2y8EbKZVR2KPjJeJHjdUKwYB94QDeUkeNM3uvC9uusH8IlXPnu5ptqlO2FF1EtSfSGYAXr35~LqkZDN18iBomvxMMnOYexGVgvLt7-bXU9sijSfs4Wo3AdJGVqosBlCi2S8wrNi8kQSnDp9rbvQZjAFdDyJIOWrntkz6mycyvQlUYJs8B8q5e2kHMswFvehXgeuv-ifZOH2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9f83/fba8/5b70f5ac16502b6749778c5f4444c583?Expires=1678060800&Signature=AjzUag757cpi1rxXqf6-HfNSUxDQ2gK3A3T7J6Tb9KRi~cjvRfULjMw3tNg~ac6A0ApbBanKGaJpYelv009jm4qHusOXMcrriaIovScSI4g3zKLkCW~tO58~B8xHo-W1v-73jvW3peTD12dd33JtLUch-8sMkYi7Fsd128mq5BImLWJo7m8o10oDA9zooMStrMXYSR~nkd99tIpWulXLTcpzYMp6e4FEAX--E3N0QZYVVzuH3oNhEV4qzvpqxHS8e7nEb4uL8E5OmakA~TMJ3kULqJeNnGTpMxMO1etyEXLfafyI7difWD0~B9FtolVEmX2wfsQktfD46OBpp7Nj~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE895432",
                            price:1500
                        },
                        {
                            name:"HEADSET GAMER HAVIT HV-H2232 D",
                            img:"https://s3-alpha-sig.figma.com/img/c7fe/9e47/798f77c39bb5f19567714c57a1a0ec38?Expires=1678060800&Signature=Y30NQOV0Nv1H8peqXf~uCoI2d5A~KT8YfLGFuOL-dPRQoBsm4X1HguLgd0nztnA3MVRxTGIa6jpJ3gijiqpSKHweB82NVNbG1bwJcP0WsDd6FYzWnAzQU3UDaQkvPE4hlDiJLUD98eTdP-C9Ni25SHFY0yez46LD9Vh9CEok6M4jb-Ed5iYmraKhV~A~p1m9TFn-C4S4uaNeaKHJNLyWx~zTR1Jq6rvoGRzVVVwjTN3ux3K~61z3yAZuGeSvKG1GHfhwvALd-lcA2atUa4vwLBaeQ5aOExT9z7KdYhartICsj1W7JkGYVckD8Wu7WCXYh9lNaSZ5Z56V~9hk2zigpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9170/6977/164372f84f76836c30cb4fb87a9a205d?Expires=1678060800&Signature=XisX1yCD~dL6tH92EJVu9bOzgFihP2HdAK3cbnHvOR5eVnIz79W69k-pwA0pllcyaL7s5-ATqI0v4uY~LrP2MLzXMMs0KoTwOfvGrjG6EYE31v2nI5BMnt4kSdPHjIpUqZul0J2N9JgEsxdbp6E8sUgSXlnE3TVD8CUHOP~HUweUqMF6alJt4TyubUDDKC7v5s2K3EIQ3Vc7UehqMJVVddP3UjUEqs1rX5w6wqgZ75o-F48ibHa~d1b3iO0wrKBceTYiHqD54Hvj3GQcwEmOV0SEWS1FG31Bz-f8uqlttZFXoVUlu0hspQofKysUS44grmHbQEEsfuvKo0s3BOcNLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://s3-alpha-sig.figma.com/img/f85f/ac01/34901196d476c20732a41de70995bec9?Expires=1678060800&Signature=qDS4vtuL~XDhPvc3wWXVPzeJx4fqPSJmIfuwssGL0yQgH6TUIxoyG5dNoKPuYiHkOhk5eNBfgGdSR9WLSYZPl4mqlJea7uTZ~xD3Vn0pN2E8UzLyW8rKOgeAh3-RuL7OmqTRCIElsE2y8EbKZVR2KPjJeJHjdUKwYB94QDeUkeNM3uvC9uusH8IlXPnu5ptqlO2FF1EtSfSGYAXr35~LqkZDN18iBomvxMMnOYexGVgvLt7-bXU9sijSfs4Wo3AdJGVqosBlCi2S8wrNi8kQSnDp9rbvQZjAFdDyJIOWrntkz6mycyvQlUYJs8B8q5e2kHMswFvehXgeuv-ifZOH2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9f83/fba8/5b70f5ac16502b6749778c5f4444c583?Expires=1678060800&Signature=AjzUag757cpi1rxXqf6-HfNSUxDQ2gK3A3T7J6Tb9KRi~cjvRfULjMw3tNg~ac6A0ApbBanKGaJpYelv009jm4qHusOXMcrriaIovScSI4g3zKLkCW~tO58~B8xHo-W1v-73jvW3peTD12dd33JtLUch-8sMkYi7Fsd128mq5BImLWJo7m8o10oDA9zooMStrMXYSR~nkd99tIpWulXLTcpzYMp6e4FEAX--E3N0QZYVVzuH3oNhEV4qzvpqxHS8e7nEb4uL8E5OmakA~TMJ3kULqJeNnGTpMxMO1etyEXLfafyI7difWD0~B9FtolVEmX2wfsQktfD46OBpp7Nj~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE895432",
                            price:1500
                        },
                        {
                            name:"HEADSET GAMER HAVIT HV-H2232 D",
                            img:"https://s3-alpha-sig.figma.com/img/c7fe/9e47/798f77c39bb5f19567714c57a1a0ec38?Expires=1678060800&Signature=Y30NQOV0Nv1H8peqXf~uCoI2d5A~KT8YfLGFuOL-dPRQoBsm4X1HguLgd0nztnA3MVRxTGIa6jpJ3gijiqpSKHweB82NVNbG1bwJcP0WsDd6FYzWnAzQU3UDaQkvPE4hlDiJLUD98eTdP-C9Ni25SHFY0yez46LD9Vh9CEok6M4jb-Ed5iYmraKhV~A~p1m9TFn-C4S4uaNeaKHJNLyWx~zTR1Jq6rvoGRzVVVwjTN3ux3K~61z3yAZuGeSvKG1GHfhwvALd-lcA2atUa4vwLBaeQ5aOExT9z7KdYhartICsj1W7JkGYVckD8Wu7WCXYh9lNaSZ5Z56V~9hk2zigpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9170/6977/164372f84f76836c30cb4fb87a9a205d?Expires=1678060800&Signature=XisX1yCD~dL6tH92EJVu9bOzgFihP2HdAK3cbnHvOR5eVnIz79W69k-pwA0pllcyaL7s5-ATqI0v4uY~LrP2MLzXMMs0KoTwOfvGrjG6EYE31v2nI5BMnt4kSdPHjIpUqZul0J2N9JgEsxdbp6E8sUgSXlnE3TVD8CUHOP~HUweUqMF6alJt4TyubUDDKC7v5s2K3EIQ3Vc7UehqMJVVddP3UjUEqs1rX5w6wqgZ75o-F48ibHa~d1b3iO0wrKBceTYiHqD54Hvj3GQcwEmOV0SEWS1FG31Bz-f8uqlttZFXoVUlu0hspQofKysUS44grmHbQEEsfuvKo0s3BOcNLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://s3-alpha-sig.figma.com/img/f85f/ac01/34901196d476c20732a41de70995bec9?Expires=1678060800&Signature=qDS4vtuL~XDhPvc3wWXVPzeJx4fqPSJmIfuwssGL0yQgH6TUIxoyG5dNoKPuYiHkOhk5eNBfgGdSR9WLSYZPl4mqlJea7uTZ~xD3Vn0pN2E8UzLyW8rKOgeAh3-RuL7OmqTRCIElsE2y8EbKZVR2KPjJeJHjdUKwYB94QDeUkeNM3uvC9uusH8IlXPnu5ptqlO2FF1EtSfSGYAXr35~LqkZDN18iBomvxMMnOYexGVgvLt7-bXU9sijSfs4Wo3AdJGVqosBlCi2S8wrNi8kQSnDp9rbvQZjAFdDyJIOWrntkz6mycyvQlUYJs8B8q5e2kHMswFvehXgeuv-ifZOH2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9f83/fba8/5b70f5ac16502b6749778c5f4444c583?Expires=1678060800&Signature=AjzUag757cpi1rxXqf6-HfNSUxDQ2gK3A3T7J6Tb9KRi~cjvRfULjMw3tNg~ac6A0ApbBanKGaJpYelv009jm4qHusOXMcrriaIovScSI4g3zKLkCW~tO58~B8xHo-W1v-73jvW3peTD12dd33JtLUch-8sMkYi7Fsd128mq5BImLWJo7m8o10oDA9zooMStrMXYSR~nkd99tIpWulXLTcpzYMp6e4FEAX--E3N0QZYVVzuH3oNhEV4qzvpqxHS8e7nEb4uL8E5OmakA~TMJ3kULqJeNnGTpMxMO1etyEXLfafyI7difWD0~B9FtolVEmX2wfsQktfD46OBpp7Nj~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE895432",
                            price:1500
                        },
                        {
                            name:"HEADSET GAMER HAVIT HV-H2232 D",
                            img:"https://s3-alpha-sig.figma.com/img/c7fe/9e47/798f77c39bb5f19567714c57a1a0ec38?Expires=1678060800&Signature=Y30NQOV0Nv1H8peqXf~uCoI2d5A~KT8YfLGFuOL-dPRQoBsm4X1HguLgd0nztnA3MVRxTGIa6jpJ3gijiqpSKHweB82NVNbG1bwJcP0WsDd6FYzWnAzQU3UDaQkvPE4hlDiJLUD98eTdP-C9Ni25SHFY0yez46LD9Vh9CEok6M4jb-Ed5iYmraKhV~A~p1m9TFn-C4S4uaNeaKHJNLyWx~zTR1Jq6rvoGRzVVVwjTN3ux3K~61z3yAZuGeSvKG1GHfhwvALd-lcA2atUa4vwLBaeQ5aOExT9z7KdYhartICsj1W7JkGYVckD8Wu7WCXYh9lNaSZ5Z56V~9hk2zigpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE1234",
                            price:3000
                        },
                        {
                            name:"HEADSET GAMER NOGA STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9170/6977/164372f84f76836c30cb4fb87a9a205d?Expires=1678060800&Signature=XisX1yCD~dL6tH92EJVu9bOzgFihP2HdAK3cbnHvOR5eVnIz79W69k-pwA0pllcyaL7s5-ATqI0v4uY~LrP2MLzXMMs0KoTwOfvGrjG6EYE31v2nI5BMnt4kSdPHjIpUqZul0J2N9JgEsxdbp6E8sUgSXlnE3TVD8CUHOP~HUweUqMF6alJt4TyubUDDKC7v5s2K3EIQ3Vc7UehqMJVVddP3UjUEqs1rX5w6wqgZ75o-F48ibHa~d1b3iO0wrKBceTYiHqD54Hvj3GQcwEmOV0SEWS1FG31Bz-f8uqlttZFXoVUlu0hspQofKysUS44grmHbQEEsfuvKo0s3BOcNLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE185756",
                            price:2550
                        },
                        {
                            name:"HEADSET GAMER CONSTRICTOR",
                            img:"https://s3-alpha-sig.figma.com/img/f85f/ac01/34901196d476c20732a41de70995bec9?Expires=1678060800&Signature=qDS4vtuL~XDhPvc3wWXVPzeJx4fqPSJmIfuwssGL0yQgH6TUIxoyG5dNoKPuYiHkOhk5eNBfgGdSR9WLSYZPl4mqlJea7uTZ~xD3Vn0pN2E8UzLyW8rKOgeAh3-RuL7OmqTRCIElsE2y8EbKZVR2KPjJeJHjdUKwYB94QDeUkeNM3uvC9uusH8IlXPnu5ptqlO2FF1EtSfSGYAXr35~LqkZDN18iBomvxMMnOYexGVgvLt7-bXU9sijSfs4Wo3AdJGVqosBlCi2S8wrNi8kQSnDp9rbvQZjAFdDyJIOWrntkz6mycyvQlUYJs8B8q5e2kHMswFvehXgeuv-ifZOH2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE143456",
                            price:2700
                        },
                        {
                            name:"MOUSE GAMER STORMER",
                            img:"https://s3-alpha-sig.figma.com/img/9f83/fba8/5b70f5ac16502b6749778c5f4444c583?Expires=1678060800&Signature=AjzUag757cpi1rxXqf6-HfNSUxDQ2gK3A3T7J6Tb9KRi~cjvRfULjMw3tNg~ac6A0ApbBanKGaJpYelv009jm4qHusOXMcrriaIovScSI4g3zKLkCW~tO58~B8xHo-W1v-73jvW3peTD12dd33JtLUch-8sMkYi7Fsd128mq5BImLWJo7m8o10oDA9zooMStrMXYSR~nkd99tIpWulXLTcpzYMp6e4FEAX--E3N0QZYVVzuH3oNhEV4qzvpqxHS8e7nEb4uL8E5OmakA~TMJ3kULqJeNnGTpMxMO1etyEXLfafyI7difWD0~B9FtolVEmX2wfsQktfD46OBpp7Nj~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                            code:"CODE895432",
                            price:1500
                        }
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
