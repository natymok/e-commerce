import {fetch}from '../FetchLocalStorage/Local.js'
const tokens =fetch()
export const initialstate={
    token:tokens,
    catagories:null,
    product:null
    
    
}

