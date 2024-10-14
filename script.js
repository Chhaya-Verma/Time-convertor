function convertTime() {
    const input = document.querySelector('.input').value; // Get the input value
    const resultDiv = document.getElementById('result'); // Get the result div

    let result = '';
    if (input.includes('AM') || input.includes('PM')) {
        // 12-hour format to 24-hour format
        const [timePart, period] = input.split(' '); // Split time and period (AM/PM)
        let [hour, minute] = timePart.split(':'); // Split hour and minute
        hour = parseInt(hour);
        minute = parseInt(minute);

        if (period === 'PM' && hour < 12) {
            hour += 12; // Convert PM to 24-hour format
        } else if (period === 'AM' && hour === 12) {
            hour = 0; // Convert midnight case
        }

        // Format the result as railway time
        result = `Railway Time: ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
    } else {
        // 24-hour format to 12-hour format
        let [hour, minute] = input.split(':'); // Split hour and minute
        hour = parseInt(hour);
        minute = parseInt(minute);
        let period = 'AM';

        if (hour >= 12) {
            period = 'PM';
            if (hour > 12) {
                hour -= 12; // Convert hours greater than 12
            }
        } else if (hour === 0) {
            hour = 12; // Midnight case (00:00 becomes 12:00 AM)
        }

        // Format the result as 12-hour format with AM/PM
        result = `12-Hour Format: ${hour}:${minute < 10 ? '0' + minute : minute} ${period}`;
    }

    // Display the result in the convertor div
    resultDiv.textContent = result;
}
