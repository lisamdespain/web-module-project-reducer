export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const STORE_TO_MEMORY = "STORE_TO_MEMORY";
export const MEMORY_TO_TOTAL = "MEMORY_TO_TOTAL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
return ({type: CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return ({type: CLEAR_DISPLAY});
    }

export const storeToMemory = () =>{
    return ({type: STORE_TO_MEMORY});
}

export const memoryToTotal = () =>{
    return ({type: MEMORY_TO_TOTAL});
}

export const memoryClear = () =>{
    return ({type: MEMORY_CLEAR});
}