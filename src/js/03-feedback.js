const formRef = document.querySelector(".feedback-form");

const onFormInput = event => {
    console.log(event.target.name)
}

formRef.addEventListener("input", onFormInput);

