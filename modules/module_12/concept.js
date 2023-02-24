const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => show(data))
    .catch((err) => {
        console.log(err)
    })
}

//const showData


loadData();