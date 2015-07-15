// Need to wait until the DOM has been fully rendered before we can attach event handlers to the
// HTML elements
$(document).ready(function() {
    // Since there's only 1 form on the page, we can just use the 'form' tag as the selector; if 
    // there were more than 1, this would return an array of forms
    $('form').submit(function(){
        // Need to return false to keep the form from actually submitting
        return validateForm();
    });
});

function validateForm(){
    $('.error').remove();

    // Grab all the inputs, and loop over them - if we had some selects, this would NOT work!
    $('input').each(function() {
        // 'this' refers to the selector - in this case, the input element.
        // Basic validation - make sure the field has a value.
        if (!$.trim(this.value)) {
            addError(this);
            return false;
        }
        
        // Field-specific validation
        switch (this.name.toLowerCase()) {
            case 'email':
                // I had to look this up - just checks to make sure the email address is valid
                // ex: test@tester.com, test@tester.gov, test@tester.edu
                var pattern = /^.*@.*\.(com|net|gov|edu)$/;
                if (!pattern.test(this.value)) {
                    addError(this);
                    return false;
                }
                break;
            case 'password':
                // Basic password length check
                if (this.value.length < 10) {
                    addError(this);
                    return false;
                }
                break;
        }
    });

    // Return true to actually submit the form
    return true;
}	


function addError(selector) {
    $(selector).after('<span class="error"> Please enter your ' + selector.name + '</span>');
}
