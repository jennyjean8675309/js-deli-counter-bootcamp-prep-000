function takeANumber(katzDeli){
  var lastCustomerNumber = katzDeli.length;
  var n = lastCustomerNumber + 1;
    katzDeli.length++;
  return `Welcome. You are number ${n} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
    if (line.length > 0){
        let i = 0;
        var lineOrder = [];
        while (i < line.length){
            lineOrder.push(` ${i + 1}. ${line[i]}`);
            i++;
            lineOrder;
        } return "The line is currently:" + lineOrder.toString();
    } else if (line.length === 0){
        return "The line is currently empty.";
    }
}













