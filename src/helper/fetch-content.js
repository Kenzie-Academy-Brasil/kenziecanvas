const fetchContent = url => {
    fetch(url)
        .then(res => res.text())
        .then(data => console.log(data))
}