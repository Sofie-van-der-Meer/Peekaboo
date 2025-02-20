document.body.onload = addElement;

var img_array = [
    ["women", "blue", "#01cfe6", "gezicht en handen van persoon zichtbaar die achter een papieren doek staat dat open gescheurd is"],
    ["man", "yellow", "#e9c201", "gezicht en handen van persoon zichtbaar die achter een papieren doek staat dat open gescheurd is"],
    ["man", "white", "#d4d4d4", "gezicht en handen van persoon zichtbaar die achter een papieren doek staat dat open gescheurd is"],
    ["womeneye", "orange", "#ca5d02", "gezicht en handen van persoon zichtbaar die achter een papieren doek staat dat open gescheurd is"],
    ["women", "pink", "#f2b8ce", "gezicht en handen van persoon zichtbaar die achter een papieren doek staat dat open gescheurd is"]
];

function addElement() {
    const newArticle = document.createElement('article');
    newArticle.className = 'big-screen__hidden';
    const currentArticle = document.getElementById('dontExcist');
    const parent = document.getElementById('main');
    newArticle.setAttribute('data-color', img_array[0][2]);
    parent.insertBefore(newArticle, currentArticle);


    for (let i = 0; i < img_array.length; i++) {
        const img_info = img_array[i];
        var number = i +1;

        // article
        const newArticle = document.createElement('article');
        newArticle.id = "model" + number;
        newArticle.className = "article--model" + number;
        newArticle.setAttribute('data-color', img_info[2]);
        newArticle.innerHTML = '<div id="div__model'+number+'"></div><h3>Model #'+number+'</h3><p><a href="#">BOOK THIS MODEL</a></p><p>see <a href="#">portfolio</a> of this model.</p>'
        const currentArticle = document.getElementById('dontExcist');
        const parent = document.getElementById('main');
        parent.insertBefore(newArticle, currentArticle);
    
        //image;
        var img = new Image();
        img.src = "/static/" + img_info[0] + "_" + img_info[1] + "-background.jpg";
        img.alt = img_info[3];
        document.getElementById('div__model'+number).appendChild(img);
    }
}

document.body.style.background = img_array[0][2];

document.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop;

    var allArticles = document.getElementsByTagName('article');
    for (let i = 0; i < allArticles.length; i++) {
        var curArticle = allArticles[i];
        var heightBefore = 0;
        if (i > 0) {
            heightBefore = allArticles[i-1].offsetHeight / 3;
        }
        if (scrollTop > curArticle.offsetTop - heightBefore) {
            color = curArticle.getAttribute('data-color');
            document.body.style.background = color;
        }
    }
}

var currElem = null;
function boldText(elem) {
    if (elem != currElem) {
        if (currElem) {
            document.getElementById(currElem).classList.remove('bold');
        }
        currElem = elem;
        document.getElementById(currElem).classList.add('bold');
    }
}




