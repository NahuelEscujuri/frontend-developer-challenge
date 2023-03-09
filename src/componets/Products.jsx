import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts, addKeyWord, clearProducts } from '../redux/action';
import ProductCard from './ProductCard';
import KeyWord from './KeyWord'
import { useState } from 'react';
import Loader from './Loader';

export default function Products(){
    const [currentProducts, setCurrentProducts] = useState([])
    const [currentKeywords, setCurrentKeywords] = useState([]);
    const [currentSearchBar, setCurrentSearchBar] = useState("");
  const dispatch = useDispatch();
  
  let products = useSelector(state=> state?.products);

  useEffect(()=>{
    dispatch(getAllProducts());
    console.log(products);
  },[])

  useEffect(()=>{
    console.log("Products",products)
    setCurrentProducts(products);
  },[products])

  useEffect(()=>{
    if(currentKeywords == 0){
        setCurrentProducts(products)
        return
    }

    //fitrado de Palabras claves
    let newProducts = [...products]
    newProducts = newProducts.filter(p=>{
        let result = true;
        currentKeywords.map(k=>{
            if(p.name.toLowerCase().includes(k.toLowerCase())==false)result=false
        })
        return result;
    })

    setCurrentProducts(newProducts);

  },[currentKeywords,products])


  
  
//#region Keywords methods
  function handleSearch(e){
    setCurrentSearchBar(e.target.value);
  }

  function addKeyWord(e){
    e.preventDefault();

    if(currentSearchBar == "")return
    if(currentKeywords.includes(currentSearchBar))return
    
    // setCurrentProducts([])
    // dispatch(clearProducts())
    // dispatch(getAllProducts())

    let newKeyWords = [...currentKeywords,currentSearchBar];
    setCurrentSearchBar("")
    setCurrentKeywords(newKeyWords)
  }

  function removeKeyWord(e){
    let newKeywords = [...currentKeywords]
    newKeywords = newKeywords.filter(k=>k != e.target.id)

    setCurrentKeywords(newKeywords);
  }
//#endregion

  return(
    <div className='center'>
    {/* Search Bar */}
    <form className='searchBar'>
        {/* Input */}
        <input
        placeholder='Buscar por Nombre'
        value={currentSearchBar}
        onChange={handleSearch}
        className="searchBar-input"/>

        {/* Btn */}
        <input
        onClick={addKeyWord}
        value="Buscar"
        type={"submit"}
        className="searchBar-btn"/>
    </form>

    {/* KeyWords */}
    <div className='keyword-container'>
        {
        currentKeywords.length > 0 &&
        currentKeywords.map(k=>
            (
            <p className='keyword'>
                {k}
                <b onClick={removeKeyWord} id={k}>x</b>
            </p>
            )
        )
        }
    </div>

    {/* Products */}
      <p className={`results-count ${currentProducts?.length == 0&&"desactive"}`}>
        {currentProducts?.length} resultados
      </p>
    <div className='card-container'>
    {
        currentProducts &&
        currentProducts.map(r=> (r?<ProductCard
        key = {currentProducts[r]}
        name = {r.name}
        img = {r.img}
        code = {r.code}
        price = {r.price}
        />:undefined))
    }

    {/* Not Found Result */}
    {currentProducts?.length == 0 &&
    <div className='not-found'>
      <h3>Not Found Result</h3>
    </div>
    }

    {/* Loader */}
    {!products && <Loader></Loader>}

    </div>
    </div>
  )
}