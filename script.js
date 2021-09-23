const getSafe = () => {
    alert('Are you safe from Covid-19?');
}
// Function to show either of the result
const getResult = (style, status) => {
    const result = document.getElementById('result');
    if (status) {
        result.innerHTML = `
        <h1 class="text-danger">The person is Covid Positive</h1>
    `;
    } else {
        result.innerHTML = `
        <h1>The person is Covid negative</h1>
    `;
    }
    result.style.display = style;
}
// Button click to see results
const getStatus = () => {
    const response = confirm('Are you covid positive?');
    if (response) {
        getResult('block', true);
    } else {
        getResult('block', false);

    }
}

// function for time period
const timeDuration = (style, days) => {
    const duration = document.getElementById('period');
    if (days < 14) {
        duration.innerHTML = `
        <h1 class="text-danger">The person is Covid Positive for ${days} days</h1>
    `;
        getResult('block', true);
    } else {
        duration.innerHTML = `
        <h1>The person is Safe from Covid</h1>
        `;
        getResult('block', false);
    }
    duration.style.display = style;
}

// To get a time period
const getPeriod = () => {
    const period = prompt('How long have you been affected?');
    if (period) {
        timeDuration('block', period);
    }
}

