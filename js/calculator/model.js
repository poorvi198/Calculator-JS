var CalculatorModel = function(id,options)
{
    this.id = id;
    this.options = {
    operators : ['/','x','-','+'],
    numbers : ['1','2','3','4','5','6','7','8','9','0','.'],
    others : ['c','ce','<-','=']
    }
}