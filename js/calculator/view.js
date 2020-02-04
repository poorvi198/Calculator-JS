var CalculatorView = function(model,display,numberButtons,operatorButtons)
{
    var id = model.id;
    var calculatorDiv;

    var init = function(){
        renderCalculator();
    }


    var renderCalculator = function(){
        calculatorDiv = document.createElement('div');
        calculatorDiv.id = id;
        calculatorDiv.tabIndex='0';
        calculatorDiv.className ='calculator';
        calculatorDiv.style.margin ='20px';
        calculatorDiv.appendChild(display);
        operatorButtonDiv=document.createElement('div');

        for(i=0;i<operatorButtons.length;i++)
        {
            operatorButtonDiv.appendChild(operatorButtons[i]);
            if(operatorButtons[i].innerHTML==='=')
            {
                operatorButtons[i].className = 'result'
            }
        }
        numberButtonDiv = document.createElement('div');
        numberButtonDiv.className = 'number-div';
        for(i=0;i<numberButtons.length;i++)
        {
            numberButtonDiv.appendChild(numberButtons[i]);
        }
        calculatorDiv.appendChild(numberButtonDiv);
        calculatorDiv.appendChild(operatorButtonDiv)
        render();

    }

   render = function(){
        document.body.appendChild(calculatorDiv);

    }

    this.getCalculator = function(){
        return calculatorDiv;
    }
    init();
    
    return this;
}