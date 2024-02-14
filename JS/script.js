let isCelsius = true;

    function convertTemp() {
        let inputTemp = parseFloat(document.getElementById('inputTemp').value);
        if (isNaN(inputTemp)) {
            alert("Input tidak valid! Silakan masukkan angka yang valid.");
            return;
        }

        let outputTemp = document.getElementById('outputTemp');
        let calcMethod = document.getElementById('calcMethod');

        if (isCelsius) {
            let fahrenheit = (inputTemp * 9/5) + 32;
            outputTemp.value = fahrenheit.toFixed(2);
            calcMethod.value = `${inputTemp}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        } else {
            let celsius = (inputTemp - 32) * 5/9;
            outputTemp.value = celsius.toFixed(2);
            calcMethod.value = `(${inputTemp}°F - 32) * (5/9) = ${celsius.toFixed(2)}°C`;
        }
    }

    function resetFields() {
        document.getElementById('inputTemp').value = '';
        document.getElementById('outputTemp').value = '';
        document.getElementById('calcMethod').value = '';
    }

    function reverseConversion() {
        let labelInput = document.getElementById('labelInput');
        let labelOutput = document.getElementById('labelOutput');
        let temp = labelInput.textContent;
        labelInput.textContent = labelOutput.textContent;
        labelOutput.textContent = temp;

        isCelsius = !isCelsius;
    }
