import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd= () => {
        //setCategories([...categories,'HunterXHunter']);  //si quiero la nueva categoría primero sería: ['HunterXHunter', ...categories]
        setCategories( cats => [...cats,'HunterXHunter'] );  //callback 'cats' con el valor del estado anterior
    }*/

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories= { setCategories }/>
        <hr/>
        <ol>
            {
            //el map me va a servir para transformar cada uno de los elementos que están dentro de su arreglo
                categories.map( category=>(
                    //return <li key={ category }>{ category }</li>
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )) 
            }
        </ol>
      </>
  )
}
