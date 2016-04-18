(function($){
    $.fn.galleryAm = function(newOptions) {
        var $this = $(this),
            showImage = $('.show-image-am', $this),
            $list = $('.list-am', $this),
            item = $('.item-am', $this),
            indexItem = 0,
            options = {
                lightbox: false,
                pagination: false,
                fade: 400
            }

        if (newOptions) {
            $.extend( options, newOptions );
        }

        var init = function() {
            var activeItem = $('.item-am.active');

            item.each(function(index){
                $(this).data('id', index)
            })

            if (options.lightbox) {
                carousel();
            } else {
                pagination(options.pagination);
            }

            showImage.init();
            getIndex();
        };

        var getIndex = function() {
            item.on('click', function() {
                var $element = $(this);

                item.removeClass('active');
                $element.addClass('active');

                indexItem = parseInt($element.data('id'));
                showImage.change(indexItem);
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
            change: function(index) {
                var $img = $('<img src="' + item.eq(index).data('large') + '" alt="' + item.eq(index).find('img').attr('alt') + '"/>');

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

        var carousel = function(index) {

        };

        var pagination = function(number) {
            var $wrapper = $('<div class="wrapper-am"></div>'),
                $nav = $('<nav class="nav-pag-am"><ul></ul></nav>'),
                $prev = $('<button class="pagination-prev-am nav-am" type="button"></button').text($list.data('prev')),
                $next = $('<button class="pagination-next-am nav-am" type="button"></button').text($list.data('next')),
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
                    .appendTo($wrapper)
                    .outerWidth(width);
            }
            ul.remove();
            $wrapper
                .appendTo($list)
                .outerWidth(width * total);

            $nav.appendTo($list);
            $('ul', $nav).before($prev);
            $('ul', $nav).after($next);

            $('ul li', $nav).eq(0).addClass('active');

            function slidePagination(index) {

            }

            $('ul li button', $nav).on('click', function() {
                $(this)
                    .parent()
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

                $wrapper
                    .css({
                        '-webkit-transform' : 'translateX(' + (- width * $(this).parent().index()) + 'px)',
                        '-moz-transform'    : 'translateX(' + (- width * $(this).parent().index()) + 'px)',
                        '-ms-transform'     : 'translateX(' + (- width * $(this).parent().index()) + 'px)',
                        '-o-transform'      : 'translateX(' + (- width * $(this).parent().index()) + 'px)',
                        'transform'         : 'translateX(' + (- width * $(this).parent().index()) + 'px)'
                    });
            });

            $(document).on('click', '.nav-am', function() {
                if ($(this).hasClass('pagination-prev-am')) {
                    if ($('li.active', $nav).prev().length) {
                        $('li.active', $nav)
                            .prev()
                            .addClass('active')
                            .siblings()
                            .removeClass('active');
                        console.log('tem');
                    }
                } /*else {
                    if (index < listItens.length -1) {
                        index += 1;
                    }
                }*/
            });
        };

        init();

        return this
    };
})(jQuery);