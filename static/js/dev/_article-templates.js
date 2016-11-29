/**
 * Handlebar Article templates for listing
 */

var systemCardTemplate = '<div itemscope itemtype="http://schema.org/NewsArticle"  class="{{containerClass}} ">'+
	'<meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/WebPage" itemid="https://google.com/article"/>'+
	'<div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">'+
		'<meta itemprop="url" content="{{imageUrl}}"/>'+
		'<meta itemprop="width" content="500"/>'+
		'<meta itemprop="height" content="500"/>'+
	'</div>'+
	'<div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">'+
		'<meta itemprop="name" content="{{blog.title}}"/>'+
		'<div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">'+
			'<meta itemprop="url" content="{{blog.media.thumb.path}}"/>'+
			'<meta itemprop="width" content="500"/>'+
			'<meta itemprop="height" content="500"/>'+
		'</div>'+
	'</div>'+
	'<meta itemprop="datePublished" content="{{metaPublishDate}}"/>'+
	'<meta itemprop="dateModified" content="{{metaUpdateDate}}"/>'+
	'<a itemprop="url" href="{{url}}" class="card swap card--category {{cardClass}} {{hasArticleMediaClass}} {{promotedClass}} {{blogClass}}" data-id="{{articleId}}" data-position="{{position}}" data-social="0" data-article-image="{{{imageUrl}}}" data-article-text="{{title}}">'+
		'{{#if hasMedia}}  '+
		  '<div class="card__image" style="background-image:url({{imageUrl}});"></div>'+
		'{{/if}}'+
		'<div class="card__content">'+
			'<div class="card__category">{{blog.title}}</div>'+
			'<h1 itemprop="headline" class="card__heading">{{{title}}}</h1>'+
			'<p itemprop="description" class="card__text">{{{excerpt}}}</p>'+
			'<div class="card__caption">'+
				'<div class="card__icon-social card__social-share">'+
					'<div class="tooltip">'+
                                            '<div onClick="window.open(\'http://www.facebook.com/sharer/sharer.php?u={{#encode}}{{url}}&title={{title}}{{/encode}}\', \'_blank\', \'toolbar=yes,scrollbars=yes,resizable=yes,width=360,height=400\');" class="tooltip__link tooltip__link--facebook"></div>'+
                                            '<div onClick="window.open(\'http://twitter.com/intent/tweet?status={{#encode}}{{title}}{{url}}{{/encode}}\', \'_blank\', \'toolbar=yes,scrollbars=yes,resizable=yes,width=360,height=400\');" class="tooltip__link tooltip__link--twitter"></div>'+
                                            '<div onClick="window.open(\'https://plus.google.com/share?url={{#encode}}{{url}}{{/encode}}\', \'_blank\', \'toolbar=yes,scrollbars=yes,resizable=yes,width=360,height=400\');" class="tooltip__link tooltip__link--google-plus"></div>'+
                                        '</div>'+
				'</div>'+
                                '{{#if userImageUrl }}'+
                                    '<div class="card__avatar" style="background-image:url({{userImageUrl}});"></div>'+
				'{{/if}}'+
                                '<div class="card__author" itemprop="author" itemscope itemtype="https://schema.org/Person">By <span itemprop="author">{{createdBy.displayName}}</span></div>'+
				'<div class="card__date">{{publishDate}}</div>'+
			'</div>'+
		'</div>'+
		'{{#if userHasBlogAccess}}'+
			'<div class="btn_overlay articleMenu">'+
				'<button title="Hide" data-guid="{{guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="0">'+
					'<i class="fa fa-eye-slash"></i><span class="hide">Hide</span>'+
				'</button>'+
				'<button onclick="window.location=\'{{{editUrl}}}\'; return false;" title="Edit" class="btnhide social-tooltip" type="button">'+
					'<i class="fa fa-edit"></i><span class="hide">Edit</span>'+
				'</button>'+
				'<button data-position="{{position}}" data-social="0" data-id="{{articleId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn" type="button" data-status="{{isPinned}}">'+
					'<i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>'+
				'</button>'+
			'</div>'+
			"{{/if}}"+
		'</a>'+
	'</div>';
                                                
var socialCardTemplate =  
        '<div class="{{containerClass}}">' +
        '<a href="{{ social.url }}" target="_blank" class="card swap card__{{social.source}} card_social {{hasSocialMediaClass}}  {{cardClass}} caption_bottom">'+
        '{{#if social.hasMedia}}'+
            '<div class="card__image" style="background-image:url({{social.media.path}})"></div>' +
        '{{/if}}'+
        '<div class="card__content">'+
            '<div class="card__category">{{social.source}}</div>'+
            '<p class="card__text" id="updateSocial{{socialId}}" data-update="0">{{{social.content}}}</p>'+
            '<div class="card__caption">'+
            '{{#if social.user.media.path }}'+
                '<div class="card__avatar" style="background-image:url({{social.user.media.path}})"></div>'+
            '{{/if}}'+  
            '<div class="card__author">{{social.user.name}}</div>'+
            '<div class="card__date">{{social.publishDate}}</div>'+
            '</div>'+
        '</div>'+
            '{{#if userHasBlogAccess}}'+
                '<div class="btn_overlay socialMenu">'+
                    '<button title="Hide" data-guid="{{social.guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="1">'+
                        '<i class="fa fa-eye-slash"></i><span class="hide">Hide</span>'+
                    '</button>'+
                    '<button title="Edit" class="btnhide social-tooltip editSocialPost" type="button" data-url="/admin/social-funnel/update-social?guid={{blog.guid}}&socialguid={{social.guid}}">'+
                    '<i class="fa fa-edit"></i><span class="hide">Edit</span>'+
                    '</button>'+
                    '<button data-position="{{position}}" data-social="1" data-id="{{socialId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn" type="button" data-status="{{isPinned}}">'+
                        '<i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>'+
                    '</button>'+
                '</div>'+
            '{{/if}}'+   
        '</a>' +
    '</div>';

var cardTemplate =
	'<div class="{{containerClass}}">' +
			'<article class="card--{{ cardType }}">' +
					'<a href="{{link}}" data-slug="{{ slug }}" class="{{cardLinkClasses}}" data-article-image="{{ thumbnail }}" data-position="{{position}}" ' +
							'{{#if isArticle}}' +
							'data-article-text="{{headline}}" data-id="{{article.articleId}}" data-social="0" ' +
							'{{else}}' +
							'data-article-text="{{text}}" data-id="{{article.socialId}}" data-social="1"/>' +
							'<div class="card__overlay">' +
									'<div class="card__content_wrap">' +
											'<div class="card__content">' +
													'<div class="card__channel-wrap">' +
															'{{#if channel}}<div class="card__channel">{{ channel }}</div>{{/if}}' +
													'</div>' +
													'{{#if isSocial}}' +
															'{{#if hasVideo}}' +
																	'<div class="card__text-wrap">' +
																			'<h3 class="card__headline">{{ text }}</h3>' +
																			'<img class="card__play-button" src="{{networkData.templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
																	'</div>' +
															'{{else}}' +
																	'<div class="card__text-wrap">' +
																			'<h3 class="card__headline">{{ text }}</h3>' +
																			'{{#if thumbnail}}' +
																					'<div class="card__image" style="background-image: url({{ thumbnail }});background-size: cover;background-position:center center;">' +
																							'{{#if hasVideo}}' +
																									'<img class="card__play-button" src="{{networkData.templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
																							'{{/if}}' +
																					'</div>' +
																			'{{/if}}' +
																	'</div>' +
															'{{/if}}' +
															'<p class="card__author"><i class="card__network-icon fa {{#if youtube }}fa-youtube-play{{else if facebook}}fa-facebook{{else}}fa-{{ network }}{{/if}}"></i> @{{ author }}</p>' +
															'<p class="card__read-more">By {{ author }}</p>' +
													'{{else if isArticle }}' +
															'<div class="card__text-wrap">' +
																	'<h3 class="card__headline">{{ headline }}</h3>' +
																	'{{# unless thumbnail }}' +
																			'<div class="card__image" style="background-image: url({{ thumbnail }});background-size: cover;background-position:center center;">' +
																					'{{#if hasVideo}}' +
																							'<img class="card__play-button" src="{{networkData.templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
																					'{{/if}}' +
																			'</div>' +
																	'{{/unless}}' +
															'</div>' +
															'<p class="card__text">{{ text }}</p>' +
															'<div class="author-profile">' +
																	'<img src="{{ authorImage }}" alt="" class="author-profile__image">' +
																	'<div class="author-profile__name">' +
																			'<div class="author-profile__first-name">By {{ author }}</div>' +
																			'<div class="author-profile__last-name">{{ date }}</div>' +
																	'</div>' +
															'</div>' +
													'{{/if}}' +
											'</div>' +
											'{{#if thumbnail}}' +
													'<div class="card__big-image" style="background-image: url({{ thumbnail }});background-size: cover;background-position:center center;">' +
															'{{#if hasVideo }}' +
																	'<img class="card__play-button" src="{{networkData.templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
															'{{/if}}' +
													'</div>' +
											'{{/if}}' +
									'</div>' +
							'</div>' +
					'</a>' +
			'</article>' +
	'</div>'