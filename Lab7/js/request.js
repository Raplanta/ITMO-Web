async function addRandomTask() {
    document.querySelector(".monday-form button").setAttribute("disabled", "disabled");
    document.querySelector("#error").classList.add("none");
    document.querySelector("#preloader").classList.remove("none");
    let randint = Math.floor(Math.random() * 199) + 1
    let url = `https://jsonplaceholder.typicode.com/todos/${randint}`;
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        addTask(json.title);
    } else {
        document.querySelector("#error").classList.remove("none");
    }
    document.querySelector("#preloader").classList.add("none");
    document.querySelector(".monday-form button").removeAttribute("disabled");
}