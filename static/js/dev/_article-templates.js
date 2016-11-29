/**
 * Handlebar Article templates for listing
 */

var cardTemplate =
	'<div class="{{containerClass}}">' +
			'<article class="card--{{ cardType }}">' +
					'<a href="{{link}}" data-slug="{{ slug }}" class="card swap link {{#unless thumbnail}} card__no-image {{/unless}}{{#if isSocial}}card__{{network}}{{/if}}" data-article-image="{{ thumbnail }}" data-position="{{position}}" {{#if isArticle}} data-article-text="{{headline}}" data-id="{{articleId}}" data-social="0"{{else}} data-article-text="{{text}}" data-id="{{socialId}}" data-social="1" {{/if}}>' +
							'<div class="card__overlay">' +
									'<div class="card__content_wrap">' +
											'{{#if isArticle}}' +
													'<div class="admin-actions">' +
															'<div class="admin-actions__action admin-actions__action--move">' +
																	'<span>MOVE</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/move.svg" alt="move card">' +
															'</div>' +
															'<div data-guid="{{guid}}" class="admin-actions__action admin-actions__action--hide HideBlogArticle" data-social="0">' +
																	'<span>HIDE</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/hide.svg" alt="hide card">' +
															'</div>' +
															'<div data-position="{{position}}" data-social="0" data-id="{{articleId}}" title="{{pinTitle}}" class="{{pinClass}} admin-actions__action admin-actions__action--pin PinArticleBtn" data-status="{{isPinned}}">' +
																	'<span>{{pinTxt}}</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/pin.svg" alt="pin card">' +
															'</div>' +
															'<div class="admin-actions__action admin-actions__action--edit editSocialPost" onclick="window.location = \'{{editUrl}}\'; return false;">' +
																	'<span>EDIT</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/edit.svg" alt="edit card">' +
															'</div>' +
													'</div>' +
  										'{{else}}' +
													'<div class="admin-actions">' +
															'<div class="admin-actions__action admin-actions__action--move">' +
																	'<span>MOVE</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/move.svg" alt="move card">' +
															'</div>' +
															'<div data-guid="{{social.guid}}" class="admin-actions__action admin-actions__action--hide HideBlogArticle" data-social="1">' +
																	'<span>HIDE</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/hide.svg" alt="hide card">' +
															'</div>' +
															'<div data-position="{{position}}" data-social="0" data-id="{{socialId}}" title="{{pinTitle}}" data-status="{{isPinned}}" class="admin-actions__action admin-actions__action--pin PinArticleBtn">' +
																	'<span>{{pinTxt}}</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/pin.svg" alt="pin card">' +
															'</div>' +
															'<div class="admin-actions__action admin-actions__action--edit editSocialPost" data-url="/admin/social-funnel/update-social?guid={{social.blogGuid}}&socialguid={{social.guid}}">' +
																	'<span>EDIT</span>' +
																	'<img src="{{networkData.templatePath}}/static/images/icons/editor/edit.svg" alt="edit card">' +
															'</div>' +
													'</div>' +
  										'{{/if}}' +
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