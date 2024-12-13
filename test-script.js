$('button').on('click', () => {
    $.getJSON('/path/to/data')
        .then(data => {
            $('#my-list').html('results: ' + data.join(', '));
        });
});

       // Test script
        function testButtonClick() {
            // Simulate a click event
            const clickEvent = new Event('click');
            button.dispatchEvent(clickEvent);

            // Verify the expected behavior
            if (output.textContent === 'Button clicked!') {
                console.log('Test passed: Button click works as expected.');
            } else {
                console.error('Test failed: Button click did not produce the expected result.');
            }
        }