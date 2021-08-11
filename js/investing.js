// Arrays de libros por subcategoría
const cryptocurrency = [
    {
        title: 'The Age of Cryptocurrency',
        author: 'Paul Vigna & Michael J. Casey',
        img_cover: 'img/book_covers/age_cryptocurrency.jpg',
        summary_link: 'investing/age_cryptocurrency.html',
    },
    {
        title: 'The Internet of Money',
        author: 'Andreas M. Antonopoulos',
        img_cover: 'img/book_covers/internet_money1.jpg',
        summary_link: '#',
    }
]

const money = [
    {
        title: 'Debt: The First 5.000 Years',
        author: 'David Graeber',
        img_cover: 'img/book_covers/debt.jpg',
        summary_link: '#',
    },
    {
        title: 'Money: The Unauthorized Biography',
        author: 'Felix Martin',
        img_cover: 'img/book_covers/money_biography.jpg',
        summary_link: '',
    },
    {
        title: 'Gratis: El futuro de un precio radical',
        author: 'Chris Anderson',
        img_cover: 'img/book_covers/gratis.jpg',
        summary_link: '#',
    },
    {
        title: 'Cheap: The High Cost of Discount Culture',
        author: 'Ellen Ruppel Shell',
        img_cover: 'img/book_covers/cheap.jpg',
        summary_link: '#',
    }
];

const technicalAnalysis = [
    {
       title: 'Getting Started in Technical Analysis',
       author: 'Jack D. Schwager',
       img_cover: 'img/book_covers/getting_started.jpg',
       summary_link: 'investing/getting_started.html',
    },
    {
        title: 'Análisis técnico de los mercados financieros',
        author: 'John Murphy',
        img_cover: 'img/book_covers/analisis_tecnico.jpg',
        summary_link: '#',
    },
    {
        title: 'El fabuloso mundo del dinero y la bolsa',
        author: 'André Kostolany',
        img_cover: 'img/book_covers/fabuloso_mundo_bolsa.jpg',
        summary_link: '#',
    },
    {
        title: 'El inversor inteligente',
        author: 'Benjamin Graham',
        img_cover: 'img/book_covers/inversor_inteligente.jpg',
        summary_link: '#',
    },
    {
        title: 'How to Make Money in Stocks',
        author: "William J. O'Neil",
        img_cover: 'img/book_covers/money_stocks.jpg',
        summary_link: '#',
    },
    {
        title: 'Come Into My Trading Room',
        author: 'Alexander Elder',
        img_cover: 'img/book_covers/trading_room.jpg',
        summary_link: '#',
    }
];

const work = [
    {
        title: 'Bullshit Jobs: A Theory',
        author: 'David Graeber',
        img_cover: 'img/book_covers/bullshit_jobs.jpg',
        summary_link: 'investing/bullshit_jobs2.html'
    },
    {
        title: 'Working the Phones',
        author: 'Jamie Woodcock',
        img_cover: 'img/book_covers/working_phones.jpg',
        summary_link: '#',
    },
    {   
        title: 'The Mythology of Work',
        author: 'Peter Fleming',
        img_cover: 'img/book_covers/mythology_work.jpg',
        summary_link: '#',
    },
    {
        title: 'Not Working: Why We Have to Stop',
        author: 'Josh Cohen',
        img_cover: 'img/book_covers/not_working.jpg',
        summary_link: '#',
    },
    {
        title: 'El fin del trabajo',
        author: 'Jeremy Rifkin',
        img_cover: 'img/book_covers/fin_trabajo.jpg',
        summary_link: '#'
    }
]

// Arrays que tienen el nombre de los ids y arrays de la categoría investing
const investingArrays = [
    cryptocurrency,
    money,
    technicalAnalysis,
    work,
];

const investingIds = [
    'cryptocurrency',
    'money',
    'technicalAnalysis',
];

// Ordenar arrays alfabeticamente
function sortArrayAlphabetically(arr){
    arr.sort(function(a, b) {
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();
    
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB){
            return 1;
        }
        return 0;
    });
}

// Recorrer array investing y mandar a llamar función sortArrayAlphabetically para cada elemento del array
for(const subcategory of investingArrays){
    let sub = subcategory;
    sortArrayAlphabetically(sub);
}

// Imprimir libros subcategoría cryptocurrency
document.getElementById('cryptocurrency').innerHTML = `
${cryptocurrency.map(function(book){
    return `
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
        <div class="card h-100 card--summary">
            <div class="card__img">
                <img src="../${book.img_cover}" alt="Tapa de ${book.title}">
            </div>
            <h3 class="card__title">${book.title}</h3>
            <p class="card__author">${book.author}</p>
            <a href="${book.summary_link}" class="btn">Read Summary</a>
        </div>
    </div>
    `;
}).join('')}`;

// Imprimir libros subcategoría money
document.getElementById('money').innerHTML = `
${money.map(function(book){
    return `
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
        <div class="card h-100 card--summary">
            <div class="card__img">
                <img src="../${book.img_cover}" alt="Tapa de ${book.title}">
            </div>
            <h3 class="card__title">${book.title}</h3>
            <p class="card__author">${book.author}</p>
            <a href="${book.summary_link}" class="btn">Read Summary</a>
        </div>
    </div>
    `;
}).join('')}`;

// Imprimir libros subcategoría technicalAnalysis
document.getElementById('technicalAnalysis').innerHTML = `
${technicalAnalysis.map(function(book){
    return `
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
        <div class="card h-100 card--summary">
            <div class="card__img">
                <img src="../${book.img_cover}" alt="Tapa de ${book.title}">
            </div>
            <h3 class="card__title">${book.title}</h3>
            <p class="card__author">${book.author}</p>
            <a href="${book.summary_link}" class="btn">Read Summary</a>
        </div>
    </div>
    `;
}).join('')}`;

// Imprimir libros subcategoría work
document.getElementById('work').innerHTML = `
${work.map(function(book){
    return `
    <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
        <div class="card h-100 card--summary">
            <div class="card__img">
                <img src="../${book.img_cover}" alt="Tapa de ${book.title}">
            </div>
            <h3 class="card__title">${book.title}</h3>
            <p class="card__author">${book.author}</p>
            <a href="${book.summary_link}" class="btn">Read Summary</a>
        </div>
    </div>
    `;
}).join('')}`;