/*Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider
ma questa volta usando Vue.

Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine
   automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e
   farlo riprendere quando esce  */

let app = new Vue({
    el: "#app",
    data: {
        images: [
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
        ],
        title: [
            'Svezia',
            'Svizzera',
            'Gran Bretagna',
            'Germania',
            'Paradise'
        ],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            'Lorem ipsum',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        ],
        activeOn: 0
    },
    methods: {

        //funzione per mostrare solo l'immagine grande selezionata
        bigImgActive: function(indexImg){
            if(indexImg == this.activeOn){
                return "active";
            }
            return "image";
        },
        
        //funzione per attivare la freccia verso su
        arrowUp: function(){
            this.activeOn --;
            if(activeOn < 0){
                this.activeOn = images.length-1;                
            }            
        },

        //funzione per attivare la freccia verso giù
        arrowDown: function(){
            this.activeOn++;
            if(activeOn == images.length){
                this.activeOn = 0;
            }
        },

        //funzione per il cambio opacità all'immagine piccola selezionata
        opacityOn: function(smImgAct){
            if(smImgAct == this.activeOn){
                return "dm-sm-opacity-on";
            }
            return "";
        }
    }
})












/*const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];*/



//Inserimento immagine grande e scritte
/*let bigItem = '';
let elementActive = 0;

for(let index=0; index < items.length; index++){
    bigItem += `<div class="image" id="item-${index}">
                    <img src=${items[index]}>
                    <div class="dm-txt">
                        <h3>${title[index]}</h3>
                        <span>${text[index]}</span>
                    </div>
                </div>`
}

const imageContainer = document.getElementById("big-image");
imageContainer.innerHTML = bigItem;

//Mostro una sola immagine
let imageActive = document.getElementById("item-"+elementActive);
imageActive.classList.add('active');


//Mostro solo una scritta
const txtActive = document.querySelector(".dm-txt");
txtActive.classList.add('active');

//Inserimento immagini piccole
let smallItemsContent = '';

for( let index=0; index < items.length; index++){
    if(index==0){
        smallItemsContent += `<div class="dm-sm-opacity-off" id="thumbnailsitem-${index}">                     
                        <img src="${items[index]}">
                    </div>
                    `;
    }else{
        smallItemsContent += `
        <div class="dm-sm-opacity-off" id="thumbnailsitem-${index}">
            <img src="${items[index]}">
        </div>
        `;
    }
    
}

//Inserisco le immagini piccole
const smallImages = document.getElementById("small-images");
smallImages.innerHTML = smallItemsContent;

//immagini opacità attiva
let smImageActive = document.getElementById("thumbnailsitem-"+elementActive);


//variabili per le frecce
const up = document.querySelector('.dm-arrow-up');
const down = document.querySelector('.dm-arrow-down');

/*click freccia GIU' rimuovo una classe dall'immagine precedente e la aggiungo alla successiva
sia per l'immagine grande che per quelle piccole*/
/*down.addEventListener('click', function(){
    elementActive++;
    if(elementActive > 4){
        elementActive = 0;
    }
    imageActive.classList.remove("active");
    imageActive = document.getElementById("item-"+elementActive);
    imageActive.classList.add("active");
    smImageActive.classList.remove("dm-sm-opacity-on");
    smImageActive = document.getElementById("thumbnailsitem-"+elementActive);
    smImageActive.classList.add("dm-sm-opacity-on");
});


/*click freccia SU rimuovo una classe dall'immagine precedente e la aggiungo alla successiva
sia per l'immagine grande che per quelle piccole*/
/*up.addEventListener('click', function(){
    elementActive--;
    if(elementActive < 0){
        elementActive = 4;
    }
    imageActive.classList.remove("active");
    imageActive = document.getElementById("item-"+elementActive);
    imageActive.classList.add("active");
    smImageActive.classList.remove("dm-sm-opacity-on");
    smImageActive = document.getElementById("thumbnailsitem-"+elementActive);
    smImageActive.classList.add("dm-sm-opacity-on");
});*/