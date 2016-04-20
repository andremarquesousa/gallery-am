# gallery-am
Studying Jquery


HTML EXAMPLE

```html
<div class="gallery-am" data-button-close="Close">
    <div class="list-am" data-prev="anterior" data-next="próximo">
        <ul>
            <li class="item-am" data-large="assets/images/large/image-1.jpg"><img src="assets/images/thumb/thumb-image-1.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-2.jpg"><img src="assets/images/thumb/thumb-image-2.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-3.jpg"><img src="assets/images/thumb/thumb-image-3.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-4.jpg"><img src="assets/images/thumb/thumb-image-4.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-5.jpg"><img src="assets/images/thumb/thumb-image-5.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-6.jpg"><img src="assets/images/thumb/thumb-image-6.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-7.jpg"><img src="assets/images/thumb/thumb-image-7.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-8.jpg"><img src="assets/images/thumb/thumb-image-8.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-9.jpg"><img src="assets/images/thumb/thumb-image-9.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-10.jpg"><img src="assets/images/thumb/thumb-image-10.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-11.jpg"><img src="assets/images/thumb/thumb-image-11.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-12.jpg"><img src="assets/images/thumb/thumb-image-12.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-13.jpg"><img src="assets/images/thumb/thumb-image-13.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-14.jpg"><img src="assets/images/thumb/thumb-image-14.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-15.jpg"><img src="assets/images/thumb/thumb-image-15.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-16.jpg"><img src="assets/images/thumb/thumb-image-16.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-17.jpg"><img src="assets/images/thumb/thumb-image-17.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-18.jpg"><img src="assets/images/thumb/thumb-image-18.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-19.jpg"><img src="assets/images/thumb/thumb-image-19.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-20.jpg"><img src="assets/images/thumb/thumb-image-20.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-21.jpg"><img src="assets/images/thumb/thumb-image-21.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-22.jpg"><img src="assets/images/thumb/thumb-image-22.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-23.jpg"><img src="assets/images/thumb/thumb-image-23.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-24.jpg"><img src="assets/images/thumb/thumb-image-24.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-25.jpg"><img src="assets/images/thumb/thumb-image-25.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-26.jpg"><img src="assets/images/thumb/thumb-image-26.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-27.jpg"><img src="assets/images/thumb/thumb-image-27.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-28.jpg"><img src="assets/images/thumb/thumb-image-28.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-29.jpg"><img src="assets/images/thumb/thumb-image-29.jpg" alt="image-thumb"></li>
            <li class="item-am" data-large="assets/images/large/image-30.jpg"><img src="assets/images/thumb/thumb-image-30.jpg" alt="image-thumb"></li>
        </ul>
    </div>
</div>
```

CSS EXAMPLE

```css
.wrapper-am {
  overflow: hidden;
}

.wrapper-am .slide-wrapper-am {
  -moz-transition: -moz-transform 0.6s;
  -o-transition: -o-transform 0.6s;
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  height: 100%;
  overflow: hidden;
}

.wrapper-am .slide-wrapper-am > ul
, .wrapper-am .slide-wrapper-am > li {
  float: left;
  height: 100%;
}

.gallery-am {
  width: 875px;
  margin: 20px auto 0;
}

.gallery-am .show-image-am {
  width: 800px;
  height: 530px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.gallery-am .show-image-am.loading:before {
  content: '';
  background-image: url('../images/loading.gif?1460750670');
  width: 62px;
  height: 62px;
  z-index: 3;
}

// CAROUSEL ON LIGHTBOX
.carousel-am {
  visibility: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.carousel-am.active {
  visibility: visible;
}

.carousel-am.active .wrapper-am .slide-wrapper-am {
  display: block;
}

.carousel-am:before
, .carousel-am .wrapper-am {
  position: absolute;
  left: 0;
  top: 0;
}

.carousel-am:before {
  background: rgba(0, 0, 0, 0.6);
  content: '';
  width: 100%;
  height: 100%;
}

.carousel-am .wrapper-am .slide-wrapper-am {
  display: none;
}

```

USAGE

$('.gallery-am').galleryAm();

OPTIONS

items: 
    - type number;
    - number of items;

lightbox:
    - type boolean;
    - for open images on gallery lightbox;

fade
    - type number;
    - animation time for change image;
    
navKey
    - type boolean;
    - for navigation with keyboard;




