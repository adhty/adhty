data = [{
    'img1' : 'assets/poster1.jpeg',
    'img2' : 'assets/poster2.jpeg',
    'title' : 'Web e -commerce',
    'subtitle' : 'Zenit',
    'desc' : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore molestias ducimus quod debitis earum magni?"
}, {
    'img1' : 'assets/poster1.jpeg',
    'img2' : 'assets/poster2.jpeg',
    'title' : 'Web e -commerce',
    'subtitle' : 'Zenit',
    'desc' : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore molestias ducimus quod debitis earum magni?"
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=

    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`"alt="">
        <img src="${element.img2}"alt="">
    <div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}<p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni neque fuga omnis odio asperiores!<p>
    </div>
    <div><button class="read-more">Read more</button>
</div>`
});

