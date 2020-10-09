// Find the button
document.querySelector("#add-time")
// When click the button
.addEventListener('click', cloneField)

// Execute action
function cloneField() {

    // Duplicate the fields. What fields?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Clear the fields. What fields?

    const fields = newFieldContainer.querySelectorAll('input')
        
    // For each field i clear
    fields.forEach(function(field){
        //catch the actual field and clear
        field.value = ""
    })

    // Put on the page. Where?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

    