import React,{useState,useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage';
export const useDarkMode = (darkvalues)=>{
const [values,setValues]= useLocalStorage('darkModeOn',darkvalues);

useEffect(()=>{
    if (values === true){
      document.querySelector('body').classList.add('dark-mode') ;
    }else{
      document.querySelector('body').classList.remove('dark-mode');
    }
},[values]);

return [values,setValues];
}