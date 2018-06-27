var katzDeliLine={};
katzDeliLine.names={};

console.log(takeANumber(katzDeliLine,"Fred"))

function takeANumber(obj,value){
  Object.assign(obj, { names: value })
  return obj.names.length
  
}