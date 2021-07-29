// We write the Modash library in this file in the Unit Testing chapter
const truncate=function(string,length){
    if(string.length>length){
        return string.slice(0,length)+'...'
    }else{
        return string
    }
}

const capitalize=function(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase()
}

const camelCase=function(string){
    let words=string.split(/[\s|\-|_]/);
    return [words[0].toLowerCase(),...words.slice(1).map((word)=>capitalize(word))].join('')
}

const Modash={
   truncate,
   capitalize,
   camelCase
}

export default Modash