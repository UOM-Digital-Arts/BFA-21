"use strict";

function photoSwipe(index) {

    let pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    let items = [

        {

            src: '../img/projects/shaniacamenzuli/shaniacamenzuli-project-1.png', // path to image
            w: 1080, // image width
            h: 1080, // image height

            title: 'Image Caption'  // used by Default PhotoSwipe UI
                                    // if you skip it, there won't be any caption


            // You may add more properties here and use them.
            // For example, demo gallery uses "author" property, which is used in the caption.
            // author: 'John Doe'

        },

        {
            src: '../img/projects/shaniacamenzuli/shaniacamenzuli-project-2.png', 
            w: 1080,
            h: 1080,

        },

        {
            src: '../img/projects/shaniacamenzuli/shaniacamenzuli-project-3.png', 
            w: 1080,
            h: 1080,

        }
    ];

    // define options (if needed)
    let options = {
        index: index
    };
    
    // Initializes and opens PhotoSwipe
    let gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}