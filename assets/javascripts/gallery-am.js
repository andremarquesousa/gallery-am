(function($){
    $.fn.galleryAm = function(newOptions) {
        var $this = $(this),
            showImage = $('.show-image-am', $this),
            $list = $('.list-am', $this),
            item = $('.item-am', $this),
            indexItem = 0,
            options = {
                lightbox: false,
                items: false,
                fade: 400,
                navKey: false
            }

        if (newOptions) {
            $.extend( options, newOptions );
        }

        var init = function() {
            var activeItem = $('.item-am.active');

            item.each(function(index){
                $(this).attr('data-id', index);
            })

            if (options.lightbox) {
                carousel.init();
            } else {
                showImage.init();
            }

            pagination.init(options.items);
            getIndex();
        };

        var getIndex = function() {
            item.on('click', function() {
                var $element = $(this);

                indexItem = parseInt($element.data('id'));

                if (options.lightbox) {
                    carousel.open();
                } else {
                    showImage.change();
                    item.removeClass('active');
                    $element.addClass('active');
                };
                event.preventDefault();
            });
        };

        var showImage = {
            init: function(){
                if (showImage.length) {
                    $('.item-am', $this).eq(indexItem).addClass('active');
                } else {
                    $showImage = $('<div class="show-image-am"><img src="' + $('.item-am', $this).eq(indexItem).data('large') + '" alt="' + $('.item-am', $this).eq(indexItem).find('img').attr('alt') + '" /></div>');
                    $($showImage).prependTo($this);
                    $('.item-am', $this).eq(indexItem).addClass('active');
                }
            },
            change: function() {
                var $img = $('<img src="' + item.eq(indexItem).data('large') + '" alt="' + item.eq(indexItem).find('img').attr('alt') + '"/>');

                $showImage.addClass('loading');

                $img.load(function() {
                    $showImage
                        .removeClass('loading')
                        .addClass('hide');

                    setTimeout(function(){
                        $('img', $showImage).remove();
                        $showImage.append($img);
                        $showImage.removeClass('hide');
                    }, options.fade); 
                });
            }
        };

        var pagination = {
            init: function(number) {
                var $wrapper = $('<div class="wrapper-am"><div class="slide-wrapper-am"></div></div>'),
                    $nav = $('<nav class="nav-pag-am"><ul></ul></nav>'),
                    $prev = $('<button class="prev-am nav-am" type="button"></button').text($list.data('prev')),
                    $next = $('<button class="next-am nav-am" type="button"></button').text($list.data('next')),
                    ul = item.parent(),
                    slice = number,
                    total = Math.ceil(item.length / number),
                    width = $list.outerWidth();

                for(i = 0; i < total; i++) {
                    var itemPag = $('<li><button type="button">' + (i + 1) + '</button></li>')
                        newUl = ul.clone().empty(),
                        newLis = item.slice(i * slice, (i * slice) + slice);

                    itemPag.appendTo($('ul', $nav));
                    newLis.appendTo(newUl);
                    newUl
                        .appendTo($('.slide-wrapper-am', $wrapper))
                        .outerWidth(width);
                }
                ul.remove();
                $wrapper
                    .appendTo($list)
                    .find('.slide-wrapper-am')
                    .outerWidth(width * total)
                    .find('>ul')
                    .eq(0)
                    .addClass('active');

                $nav.appendTo($wrapper);
                $('ul', $nav).before($prev);
                $('ul', $nav).after($next);

                $('ul li', $nav).eq(0).addClass('active');
                navSlide($wrapper, width);
                paginationSlide($wrapper, width);
            },
            execute: function() {
                var $wrapper = $('div.wrapper-am', $list),
                    width = $list.outerWidth();

                navSlide($wrapper, width);
                paginationSlide($wrapper, width);
            }
        };

        var paginationSlide = function(parent, width) {
            $('.nav-pag-am ul li button', parent).on('click', function() {
                indexItem = $(this).parent().index();

                $(this)
                    .parent()
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

                $('.slide-wrapper-am', parent)
                    .children()
                    .eq(indexItem)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

                

                animationSlide($('.slide-wrapper-am', parent), width);
            });
        }

        var navSlide = function(parent, width) {
            function getElemment(elem, keyCode) {
                var $element = elem || false,
                    keyCode = keyCode || false,
                    newActive,
                    itemActive = $('.slide-wrapper-am', parent).find('>.active');

                if (($element != false && $element.hasClass('prev-am')) || (keyCode != false && keyCode == 37)) {
                    if (itemActive.prev().length) {
                        newActive = itemActive.prev();
                        execute();
                    }
                } else if(($element != false && $element.hasClass('next-am')) || (keyCode != false && keyCode == 39)) {
                    if (itemActive.next().length) {
                        newActive = itemActive.next();
                        execute();
                    }
                }

                function execute() {
                    if (newActive) {
                        indexItem = newActive.index();

                        itemActive.removeClass('active');
                        newActive.addClass('active');

                        animationSlide($('.slide-wrapper-am', parent), width);

                        if ($('.nav-pag-am', parent).length) {
                            $('.nav-pag-am li')
                                .eq(indexItem)
                                .addClass('active')
                                .siblings()
                                .removeClass('active');
                        }
                    }
                }
            }
            $(document).off().on('click', '.nav-am', function() {
                getElemment($(this));
            });
            $(document).keyup(function(e){
                getElemment(false, e.keyCode);
            })
        }

        var animationSlide = function(parent, width) {
            parent
                .css({
                    '-webkit-transform' : 'translateX(' + (- width * indexItem) + 'px)',
                    '-moz-transform'    : 'translateX(' + (- width * indexItem) + 'px)',
                    '-ms-transform'     : 'translateX(' + (- width * indexItem) + 'px)',
                    '-o-transform'      : 'translateX(' + (- width * indexItem) + 'px)',
                    'transform'         : 'translateX(' + (- width * indexItem) + 'px)'
                });
        }

        var carousel = {
            carousel: false,
            init: function() {
                var $prev = $('<button class="prev-am nav-am" type="button"></button').text($list.data('prev')),
                    $next = $('<button class="next-am nav-am" type="button"></button').text($list.data('next')),
                    $close = $('<button class="close-carousel-am" type="button"></button>').text($this.data('close'));

                this.carousel = $('<div class="carousel-am"><div class="wrapper-am"><ul class="slide-wrapper-am"></ul></div></div>');

                for (var i = 0; i < item.length; i++) {
                    var li = $('<li><img src="' + $(item[i]).data('large') + '" alt="' + $(item[i]).find('img').attr('alt') + '" /></li>');
                    li.appendTo($('ul', this.carousel));
                }

                $('.wrapper-am', this.carousel).before($prev);
                $('.wrapper-am', this.carousel).after($next);
                $close.appendTo(this.carousel);
            },
            open: function() {
                var width;

                if (!$('body .carousel-am').length) {
                    this.carousel.appendTo('body');

                    this.close();
                }

                width = $('.wrapper-am', this.carousel).outerWidth();
                $('.wrapper-am ul', this.carousel).outerWidth(width * item.length);
                $('.wrapper-am ul li', this.carousel).outerWidth(width);

                $('.slide-wrapper-am', this.carousel)
                    .css({
                        '-webkit-transform' : 'translateX(' + (- width * indexItem) + 'px)',
                        '-moz-transform'    : 'translateX(' + (- width * indexItem) + 'px)',
                        '-ms-transform'     : 'translateX(' + (- width * indexItem) + 'px)',
                        '-o-transform'      : 'translateX(' + (- width * indexItem) + 'px)',
                        'transform'         : 'translateX(' + (- width * indexItem) + 'px)'
                    });

                navSlide($('.carousel-am'), width);


                $('.carousel-am')
                    .addClass('active')
                    .find('li')
                    .eq(indexItem)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            },
            close: function() {
                var $carousel = $('.carousel-am');

                function close() {
                    $carousel.removeClass('active');
                }

                $carousel.on('click', '.close-carousel-am', function() {
                    close();
                    pagination.execute();
                    event.preventDefault();
                });

                $('.carousel-am').on('click', function(event) {
                    if (!$(event.target).parents('.carousel-am').length) {
                        close();
                        pagination.execute();
                    }
                    if ($(event.target).not('img').parents('.slide-wrapper-am').length) {
                        close();
                        pagination.execute();
                    }
                    event.preventDefault();
                });
            }
        };

        init();

        return this
    };
})(jQuery);