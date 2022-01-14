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
        elements: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
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
