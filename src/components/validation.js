
const regularExp = {
    contains_alphaNumeric : /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/,
    containsNumber : /\d+/,
    containsAlphabet : /[a-zA-Z]/,
    onlyLetters : /^[A-Za-z]+$/,
    onlyNumbers : /^[0-9]+$/,
    onlyMixOfAlphaNumeric : /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/,
    emailUsername:/^[a-zA-Z0-9._-]+/,
    containsAt:'@', 
  }
  
  export const validator={
    isUndefined:value=>{
      if(value==undefined)
        return true;
      return false;
    },
    isEmpty:value=>{
      if(value.length===0)
        return true;
      return false;
    },
    isCharacter:value=>{
      if(!regularExp.onlyLetters.test(value))
        return true;
      return false;
    },
    isNumeric:value=>{
      if(!regularExp.onlyNumbers.test(value))
        return true;
      return false;
    },
    isEmailUserName:value=>{
      if(!regularExp.emailUsername.test(value) || value.includes(regularExp.containsAt))
        return true;
      return false;
    },
   
    
  }
  