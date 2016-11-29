var UserArticlesController = (function ($) {
    return {
        load: function () {
            UserArticlesController.Load.init();
        }
    };
}(jQuery));

UserArticlesController.Load = (function ($) {

    var attachEvents = function () {
      
        /*
         * Load More Articles on My Post Page
         */
        $('.loadMoreMyArticles').on('click', function (e) {
            e.preventDefault();
            var btnObj = $(this);

            $.fn.Ajax_LoadMoreMyArticles({
                onSuccess: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        if (data.articles.length < 20) {
                            $(btnObj).css('display', 'none');
                        }
                        for (var i in data.articles) {
                          data.articles[i]['containerClass'] = 'col-third';
                          data.articles[i]['pinTitle'] = (data.articles[i].isPinned == 1) ? 'Un-Pin Article' : 'Pin Article';
                          data.articles[i]['pinText'] = (data.articles[i].isPinned == 1) ? 'Un-Pin' : 'Pin';
                          data.articles[i]['promotedClass'] = (data.articles[i].isPromoted == 1)? 'ad_icon' : '';
                          data.articles[i]['hasArticleMediaClass'] = (data.articles[i].hasMedia == 1)? 'withImage__content' : 'without__image';
                          data.articles[i]['channel']= '';
                          if(data.articles[i].blog['title'] !== null) {
                            data.articles[i]['blogClass']= data.articles[i].blog['title'].replace(' ', '').toLowerCase();
                          }


                          data.articles[i]['userImageUrl'] = '';
                          if (data.articles[i]['createdBy']['media']['id'] !== '') {
                            data.articles[i]['authorImage'] = $.image({media: data.articles[i]['createdBy']['media'], mediaOptions: {width: 100, height: 100, crop: 'thumb', gravity: 'face', radius: 'max'}});
                          }

                          Handlebars.registerHelper('encode', function(options) {
                            return encodeURIComponent(options.fn(this));
                          });

                          var articleId = parseInt(data.articles[i].articleId);
                          if (isNaN(articleId) || articleId <= 0) {
                            data.articles[i]['isSocial'] = true;
                            data.articles[i]['cardType'] = 'social';
                            data.articles[i]['hasSocialMediaClass'] = (data.articles[i].social.hasMedia == 1)? 'withImage__content' : 'without__image';
                            data.articles[i]['author'] = data.articles[i]['social']['user']['name'];
                            data.articles[i]['network'] = data.articles[i]['social']['source'].toLowerCase();
                            data.articles[i]['socialLink'] = data.articles[i]['social']['url'];
                            data.articles[i]['text'] = data.articles[i]['social']['content'];
                            data.articles[i]['thumbnail'] = data.articles[i]['social']['media']['path'];
                            data.articles[i]['link'] = data.articles[i]['social']['url'];
                          } else {
                            data.articles[i]['cardType'] = 'article';
                            data.articles[i]['isArticle'] = true;
                            data.articles[i]['headline'] = data.articles[i]['title'];
                            data.articles[i]['text'] = data.articles[i]['excerpt'];
                            data.articles[i]['author'] = data.articles[i]['createdBy']['displayName'];
                            data.articles[i]['link'] = data.articles[i]['url'];
                            data.articles[i]['text'] = data.articles[i]['excerpt'];
                            data.articles[i]['channel']= data.articles[i]['label'];
                            data.articles[i]['thumbnail'] = $.image({media:data.articles[i]['featuredMedia'], mediaOptions:{width: 500 ,height:350, crop: 'limit'} });;
                          }

                          if (!(data.articles[i]['thumbnail'])) {

                          }
                          var articleTemplate = Handlebars.compile(cardTemplate);
                          var article = articleTemplate(data.articles[i]);
                          $('.LoadMyArticles').append(article);
                        }
                        
                        bindSocialShareButton();
                    }
                },
                beforeSend: function (jqXHR, settings) {
                    $(btnObj).html("Please wait...");
                },
                onComplete: function (jqXHR, textStatus) {
                    $(btnObj).html("Load More");
                }
            });
        });
        
        var bindSocialShareButton = function () {
            $(".card__social-share").on("click", function (e) {
                e.preventDefault();
                var elem = $(this);
                if (elem.hasClass('selected')) {
                    $(elem).removeClass("selected");
                } else {
                    $(".card__social-share").removeClass('selected');
                    $(elem).addClass("selected");
                }
            });
        };
        
        /**
         *  See User Post Articles
         */

        var totalPosts = parseInt($('div#userArticleContainer').data('total-count'));
        
        if (totalPosts > _appJsConfig.articleOffset) {
            var waypoint = new Waypoint({
                element: $('#LoadMoreArticles'),
                offset: '80%',
                handler: function (direction) {
                    if (direction == 'down') {
                        $.fn.Ajax_LoadMoreUserArticles({
                            onSuccess: function (data, textStatus, jqXHR) {
                                if (data.userArticles.length > 0) {

                                    for (var i in data.userArticles) {
                                      data.articles[i]['containerClass'] = 'col-third';
                                      data.articles[i]['pinTitle'] = (data.articles[i].isPinned == 1) ? 'Un-Pin Article' : 'Pin Article';
                                      data.articles[i]['pinText'] = (data.articles[i].isPinned == 1) ? 'Un-Pin' : 'Pin';
                                      data.articles[i]['promotedClass'] = (data.articles[i].isPromoted == 1)? 'ad_icon' : '';
                                      data.articles[i]['hasArticleMediaClass'] = (data.articles[i].hasMedia == 1)? 'withImage__content' : 'without__image';
                                      data.articles[i]['channel']= '';
                                      if(data.articles[i].blog['title'] !== null) {
                                        data.articles[i]['blogClass']= data.articles[i].blog['title'].replace(' ', '').toLowerCase();
                                      }


                                      data.articles[i]['userImageUrl'] = '';
                                      if (data.articles[i]['createdBy']['media']['id'] !== '') {
                                        data.articles[i]['authorImage'] = $.image({media: data.articles[i]['createdBy']['media'], mediaOptions: {width: 100, height: 100, crop: 'thumb', gravity: 'face', radius: 'max'}});
                                      }

                                      Handlebars.registerHelper('encode', function(options) {
                                        return encodeURIComponent(options.fn(this));
                                      });

                                      var articleId = parseInt(data.articles[i].articleId);
                                      if (isNaN(articleId) || articleId <= 0) {
                                        data.articles[i]['isSocial'] = true;
                                        data.articles[i]['cardType'] = 'social';
                                        data.articles[i]['hasSocialMediaClass'] = (data.articles[i].social.hasMedia == 1)? 'withImage__content' : 'without__image';
                                        data.articles[i]['author'] = data.articles[i]['social']['user']['name'];
                                        data.articles[i]['network'] = data.articles[i]['social']['source'].toLowerCase();
                                        data.articles[i]['socialLink'] = data.articles[i]['social']['url'];
                                        data.articles[i]['text'] = data.articles[i]['social']['content'];
                                        data.articles[i]['thumbnail'] = data.articles[i]['social']['media']['path'];
                                        data.articles[i]['link'] = data.articles[i]['social']['url'];
                                      } else {
                                        data.articles[i]['cardType'] = 'article';
                                        data.articles[i]['isArticle'] = true;
                                        data.articles[i]['headline'] = data.articles[i]['title'];
                                        data.articles[i]['text'] = data.articles[i]['excerpt'];
                                        data.articles[i]['author'] = data.articles[i]['createdBy']['displayName'];
                                        data.articles[i]['link'] = data.articles[i]['url'];
                                        data.articles[i]['text'] = data.articles[i]['excerpt'];
                                        data.articles[i]['channel']= data.articles[i]['label'];
                                        data.articles[i]['thumbnail'] = $.image({media:data.articles[i]['featuredMedia'], mediaOptions:{width: 500 ,height:350, crop: 'limit'} });;
                                      }

                                      if (!(data.articles[i]['thumbnail'])) {

                                      }
                                      var articleTemplate = Handlebars.compile(cardTemplate);
                                      var article = articleTemplate(data.articles[i]);
                                        $('#userArticleContainer').append(article);
                                    }
                                    bindSocialShareButton();

                                    if (data.userArticles.length < _appJsConfig.articleOffset) {
                                        waypoint.destroy();
                                    } else {
                                        Waypoint.refreshAll();
                                    }
                                    
                                }
                            },
                            beforeSend: function (jqXHR, settings) {
                                $('div.loader').removeClass('hide');
                            },
                            onComplete: function (jqXHR, textStatus) {
                                $('div.loader').addClass('hide');
                            }
                        });
                    }
                }
            });
        }
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


