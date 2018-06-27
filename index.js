var katzDeliLine={};
katzDeliLine.name={};

console.log(takeANumber(katzDeliLine,"Fred"))

function takeANumber(obj,value){
  return Object.assign({}, obj, { [names]: value })
}