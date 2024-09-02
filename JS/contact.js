const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    this.classList.toggle('active');

    setTimeout(() => {
        this.classList.remove('active');
    }, 3000)
})

// const submitButton = document.getElementById('submit-button');
// const requiredFields = document.querySelectorAll('[required]');

// submitButton.addEventListener('click', (e) => {
//     let allFieldsFilled = true;

//     requiredFields.forEach((field) => {
//         if (!field.value) {
//             allFieldsFilled = false;
//         }
//     });

//     if (!allFieldsFilled) {
//         e.preventDefault(); // Prevent form submission
//         // You can also add an error message or alert here
//     } else {
//         // Allow submission and animation to occur
//     }
// });

