const GetTrendingGifs = () => {
    var container = document.getElementById('image-container');
    const apiKey = `ZGEzOktO7mSe3rD9eWvg5kIO7Atksd17`;

    // maybe implement await here?
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`)
        .then(response => response.json())
            .then(json => {
                // console.log(json);
                // console.log(json.data)
                json.data.map(gif => gif.images.fixed_height.url)
                    .forEach(url => container.appendChild(UrlToImg(url)))
            })
    return container;
}

const UrlToImg = (url) => {
    var img = document.createElement('img');
    img.src = url;
    return img;
}

