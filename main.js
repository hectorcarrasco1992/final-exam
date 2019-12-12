const makeParagraph = (arr) => {
  let newStr = ''

  for (const item of arr){
    newStr += item
  }

  return newStr
}

const averageDogAge = (dog) => {

  let arr =  (dog.filter((arr)=> arr.species === 'dog'))
  let count = 0
  for(item of arr){
    count += item.age
  }

  return count / arr.length


}

const addToDigits = (num1,num2) => {
  for(let i =0; i<num2.length;i++){
    return num1 + num2
  }


}

const nightOwls = (people) => {

  return people.map((item)=> {
    if(item.localTime >= 330 || item.localTime<= 400){
       item.asleep===false
    } 
  })
    


}

const nap = (people) => {

  return people.map((item)=> {
    if(item.localTime >= 330 || item.localTime<= 400){
       item.asleep===true
    } 
  })

}

const findIndices = (arr,func) => {

  for (let i = 0; i<arr.length; i++){
      return arr[i].filter(func)
    }
  
   

}

const Faqtory = () => {
  return{
    questions:[],
    length:0,

    addQuestion:function(text){
      let count = 0 
      this.questions.push(`${count}${text}`)
      count ++
      this.length ++
    }
  }
  
}


class Dog {
  constructor(name,breed,color){

    this.name = name;
    this.breed= breed;
    this.color= color;

  }
  
    makeNoise() {
      return 'Woof.'
    }
 }
  
  
     
  



class GreatDane extends Dog {
  constructor(name, color){
    
      super(name,"Great Dane",color)
      this.color = color

    
    
    
    }

    makeNoise(){
      return "WOOF."
    }

    
  }
  
  
    

    
    
    




class Beagle extends GreatDane{
  constructor(name,color){
    
    super(name,"Beagle",color)
    this.color = color
    
  }

  makeNoise(){
    return 'Awooooooooo.'
  }
  

}

class Pointer extends Dog {

  constructor(name,color,pointer){
    super(name,'Pointer',color)
    this.pointer === pointer
  }

}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}