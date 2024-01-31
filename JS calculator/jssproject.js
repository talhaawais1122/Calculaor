  
        function onButtonClick(value) {
            const input = document.getElementById("input-values");
            const currentValue = input.value;

            if (value === 'AC') {
                input.value = '';
            } else if (value === '=') {
                try {
                    input.value = eval(currentValue);
                } catch (error) {
                    input.value = 'Error';
                }
            } else {
                input.value = currentValue + value;
            }
        }
