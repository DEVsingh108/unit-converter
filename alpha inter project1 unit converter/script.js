document.getElementById('convert-btn').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    let result;

    if (fromUnit === 'meter') {
        if (toUnit === 'centimeter') {
            result = inputValue * 100;
        } else if (toUnit === 'millimeter') {
            result = inputValue * 1000;
        } else if (toUnit === 'foot') {
            result = inputValue * 3.28084;
        } else if (toUnit === 'yard') {
            result = inputValue * 1.09361;
        } else if (toUnit === 'inch') {
            result = inputValue * 39.3701;
        } else if (toUnit === 'kilometer') {
            result = inputValue / 1000;
        } else {
            result = inputValue;
        }
    } else if (fromUnit === 'centimeter') {
        if (toUnit === 'meter') {
            result = inputValue / 100;
        } else if (toUnit === 'millimeter') {
            result = inputValue * 10;
        } else if (toUnit === 'foot') {
            result = inputValue * 0.0328084;
        } else if (toUnit === 'yard') {
            result = inputValue * 0.0109361;
        } else if (toUnit === 'inch') {
            result = inputValue * 0.393701;
        } else if (toUnit === 'kilometer') {
            result = inputValue / 100000;
        } else {
            result = inputValue;
        }
    } else if (fromUnit === 'millimeter') {
        // Similar logic for other units...
    }

    document.getElementById('result').innerText = `${inputValue} ${fromUnit} = ${result} ${toUnit}`;
});