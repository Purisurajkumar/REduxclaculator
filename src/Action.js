export const Getvalue=(value)=>{
   return{ 
       type:'GET-VALUE',
    item:value
}
}
export const Solvevalue=(item)=>{
   return{ 
       type:"SOLVE-VALUE",
     item:item
}
}
export const Deletevalue=(item)=>{
    return{
        type:'DELETE-VALUE',
        item:item
    }
}