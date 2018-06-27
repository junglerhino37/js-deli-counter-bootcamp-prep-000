var katzDeliLine={};
katzDeliLine.names={};

console.log(takeANumber(katzDeliLine,"Fred"))

function takeANumber(obj,value){
  return Object.assign({}, obj, { names: value })
}