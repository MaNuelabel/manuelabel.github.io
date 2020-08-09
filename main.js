const operator = ['+', '-', '÷', 'x', 'Cl', '='];
    let buffer = ''
    , currentResult = ''
    , currentOperation = '';

    function createKeys(){
        for(let i = 0; i < 11; i++)
        {
            const key = document.createElement('div');
            key.dataset.value = i;
            key.textContent = key.dataset.value;

            if(key.textContent === '10'){
                key.textContent = '.';
                key.dataset.value = '.';
            }
            
            key.addEventListener('click', (e)=>
            {
                buffer += key.dataset.value;
                document.getElementById('screentotal').textContent = buffer;
            })
            document.getElementById('numpads').appendChild(key)
        }

        operator.forEach((item)=>
        {
            const key = document.createElement('div');
            key.dataset.operation = item;
            key.textContent = key.dataset.operation;

            key.addEventListener('click', (e)=>
            {
                    currentOperation += key.dataset.operation;
                    
                if(key.dataset.operation === 'Cl')
                {
                    buffer = '';
                    currentResult = '';
                    currentOperation = '';
                    
                    document.getElementById('screentotal').textContent = '0';  
                    document.getElementById('screen').textContent = '0'; 
                }else{
                    
                    if(key.dataset.operation === '=')
                    {
                         currentOperation = currentOperation.charAt(0)

                        document.getElementById('screentotal').textContent = calcucate();
                        document.getElementById('screen').textContent = '0';
                    }else{
                        currentResult += buffer;
                        document.getElementById('screen').textContent = currentResult;
                        buffer = '';
                        document.getElementById('screentotal').textContent = '0';
                    }
                }
            })
            document.getElementById('operators').appendChild(key);
        })
    }
    
    function calcucate()
    {
        switch(currentOperation){
            case '+':
                return Number(buffer) + Number(currentResult);
                break;

            case '/':
                return Number(buffer) / Number(currentResult);
                break;
            
            case 'x':
                return Number(buffer) * Number(currentResult);
                break;
            case '-':
                return Number(currentResult) - Number(buffer)  ;
                break;
        }
    }



    window.addEventListener('load', createKeys)