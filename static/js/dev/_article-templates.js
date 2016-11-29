/**
 * Handlebar Article templates for listing
 */

var cardTemplate =
	'<div class="{{containerClass}}">' +
			'<article class="card--{{ cardType }}">' +
					'<a href="{{link}}" data-slug="{{ slug }}" class="card swap link {{#unless thumbnail}} card__no-image {{/unless}}{{#if isSocial}}card__{{network}}{{/if}}" data-article-image="{{ thumbnail }}" data-position="{{position}}" {{#if isArticle}} data-article-text="{{headline}}" data-id="{{article.articleId}}" data-social="0"{{else}} data-article-text="{{text}}" data-id="{{article.socialId}}" data-social="1" {{/if}}>' +
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
															'<p class="card__text">{{{ text }}}</p>' +
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
	'</div>';