import React, { useState } from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { downPriceRange, filteredSales, sort, upPriceRane } from '../../store/slice/productsSlice';


const FiterBar = () => {

    const dispatch = useDispatch();
    const [check, setCheck] = useState(!true)
    const location = document.location;
    
    const handleFilterMinPrice = (e) => {
        e.target.value > 0 
        ? dispatch(downPriceRange(+e.target.value))
        : e.target.value = 0
    }

    const handleFilterMaxPrice = (e) => {
        e.target.value > 0 
        ? dispatch(upPriceRane(+e.target.value))
        : e.target.value = 0
    }
    

    const sortOnChange = (e) => {
        dispatch(sort(+e.target.value))
    }
 
 const changeCheck = () => {
     setCheck(!check)
     dispatch(filteredSales(!check))
    }

   
  return (
    <div className={s.container}>
        <div className={s.filterPrice}>
            <p>Price</p>
            <input 
                type="number" 
                name="minPrice" 
                id='minPrice' 
                placeholder='from' 
                onChange={handleFilterMinPrice}
            />
            <input 
                type="number" 
                name="maxPrice" 
                id='maxPrices' 
                placeholder='to' 
                onChange={handleFilterMaxPrice}
            />
        </div>
        <div className={s.filterDiscontProduct}>
            {
                location.pathname === '/sales' 
                ? ''   
                : <>
                    <p>Discounted items</p>
                    <input 
                        type="checkbox" 
                        checked={check} 
                        onChange={changeCheck} 
                    /> 
                </>
                
            }
        </div>
        <div className={s.sortProduct}>
            <p>Sorted</p>
            <select name="sort" id="sort" onChange={sortOnChange}>
                <option value="default">by Default</option>
                <option value="1">By price up</option>
                <option value="2">By price down</option>
            </select>
        </div>
    </div>
  )
}

export default FiterBar