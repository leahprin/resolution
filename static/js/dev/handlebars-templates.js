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
																	'<img src="{{templatePath}}/static/images/icons/editor/move.svg" alt="move card">' +
															'</div>' +
															'<div data-guid="{{guid}}" class="admin-actions__action admin-actions__action--hide HideBlogArticle" data-social="0">' +
																	'<span>HIDE</span>' +
																	'<img src="{{templatePath}}/static/images/icons/editor/hide.svg" alt="hide card">' +
															'</div>' +
															'<div data-position="{{position}}" data-social="0" data-id="{{articleId}}" title="{{pinTitle}}" class="{{pinClass}} admin-actions__action admin-actions__action--pin PinArticleBtn" data-status="{{isPinned}}">' +
																	'<span>{{pinTxt}}</span>' +
																	'<img src="{{templatePath}}/static/images/icons/editor/pin.svg" alt="pin card">' +
															'</div>' +
															'<div class="admin-actions__action admin-actions__action--edit editSocialPost" onclick="window.location = \'{{editUrl}}\'; return false;">' +
																	'<span>EDIT</span>' +
																	'<img src="{{templatePath}}/static/images/icons/editor/edit.svg" alt="edit card">' +
															'</div>' +
													'</div>' +
  										'{{else}}' +
													'<div class="admin-actions">' +
															'<div class="admin-actions__action admin-actions__action--move">' +
																	'<span>MOVE</span>' +
																	'<img src="{{templatePath}}/static/images/icons/editor/move.svg" alt="move card">' +
															'</div>' +
															'<div data-guid="{{social.guid}}" class="admin-actions__action admin-actions__action--hide HideBlogArticle" data-social="1">' +
																	'<span>HIDE</span>' +
																	'<img src="{{templatePath}}/static/images/icons/editor/hide.svg" alt="hide card">' +
															'</div>' +
															'<div data-position="{{position}}" data-social="0" data-id="{{socialId}}" title="{{pinTitle}}" data-status="{{isPinned}}" class="admin-actions__action admin-actions__action--pin PinArticleBtn">' +
																	'<span>{{pinTxt}}</span>' +
																	'<img src="{{templatePath}}/static/images/icons/editor/pin.svg" alt="pin card">' +
															'</div>' +
															'<div class="admin-actions__action admin-actions__action--edit editSocialPost" data-url="/admin/social-funnel/update-social?guid={{social.blogGuid}}&socialguid={{social.guid}}">' +
																	'<span>EDIT</span>' +
																	'<img src="{{templatePath}}/static/images/icons/editor/edit.svg" alt="edit card">' +
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
																			'<img class="card__play-button" src="{{templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
																	'</div>' +
															'{{else}}' +
																	'<div class="card__text-wrap">' +
																			'<h3 class="card__headline">{{ text }}</h3>' +
																			'{{#if thumbnail}}' +
																					'<div class="card__image" style="background-image: url({{ thumbnail }});background-size: cover;background-position:center center;">' +
																							'{{#if hasVideo}}' +
																									'<img class="card__play-button" src="{{templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
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
																							'<img class="card__play-button" src="{{templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
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
																	'<img class="card__play-button" src="{{templatePath}}/static/images/icons/play-white.svg" alt="Play video button">' +
															'{{/if}}' +
													'</div>' +
											'{{/if}}' +
									'</div>' +
							'</div>' +
					'</a>' +
			'</article>' +
	'</div>';

var socialModal =
	'<button type="button" class="close close__lg-modal" data-dismiss="modal" aria-label="Close">' +
			'<span aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><g stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M17.803 2L2 17.803M2.08 2.08l15.803 15.803"/></g></svg><div class="close__text">esc</div></span>' +
	'</button>' +
	'<div class="social-modal__content {{#unless hasImageVideo }}no_image{{/unless}}">' +
			'<button type="button" class="close close__sm-modal" data-dismiss="modal" aria-label="Close">' +
					'<span aria-hidden="true"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><g stroke="#FFF" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M17.803 2L2 17.803M2.08 2.08l15.803 15.803"/></g></svg></span>' +
			'</button>' +
			'<div class="social-modal__channel social-modal__channel--technology ">{{ channel }}</div>' +
			'<div class="social-modal__overflow">' +
					'<div class="social-modal__text">“<br>{{ text|striptags }}</div>' +
			'</div>' +
			'<div class="article__profile">' +
					'<span class="profile__user_image" style="background-image: url({{ authorImage }}); height: 56px; width: 56px; background-size: cover; display: inline-block; border-radius: 50%;"></span>' +
					'<div class="profile__author_wrap">' +
							'<span class="article__author">By @{{ author }}</span>' +
							'<div class="profile__button-wrap">' +
									'<a href="/user-posts/dev" class="button button-sm button__follow">Follow</a>' +
									'<a href="javascript:void(0)" class="button button-sm button__share">Share' +
											'<div class="share-popup">' +
													'<div class="share-popup__title-wrap">' +
															'<span class="share-popup__title">Share:</span>' +
															'<img class="share-popup__close" src="{{networkData.templatePath}}/static/images/icons/close-small.svg" alt="" />' +
													'</div>' +
													'<input type="text" name="share-link" value="{{ shareLink }}" readonly class="share-popup__share-link share-link">' +
													'<div class="share-popup__social-wrap">' +
															'<div class="social-icon_wrap--colored">' +
																	'<a href="https://www.facebook.com/sharer.php?u={{shareLink}}" target="_blank">' +
																			'<i class="fa fa-facebook"></i>' +
																	'</a>' +
																	'<a href="https://plus.google.com/share?url={{shareLink}}" target="_blank">' +
																			'<i class="fa fa-google-plus"></i>' +
																	'</a>' +
																	'<a href="https://twitter.com/intent/tweet?url={{shareLink}}">' +
																			'<i class="fa fa-twitter"></i>' +
																	'</a>' +
															'</div>' +
															'<span class="share-popup__copy-text">Copy Link</span>' +
													'</div>' +
											'</div>' +
									'</a>' +
							'</div>' +
					'</div>' +
			'</div>' +
	'</div>' +
	'{{#if hasImageVideo }}' +
			'<div class="social-modal__image_container">' +
					'<div class="social-modal__image_wrap">' +
							'{{#if hasVideo }}' +
									'<div class="social-modal__video-wrap">' +
											'<div>{{ embed|raw }}</div>' +
									'</div>' +
							'{{else if hasImage}}' +
									'<div class="social-modal__image" style="background-image: url({{ image }});">' +
											'<img class="social-modal__image_image" src="{{ image }}" alt="" />' +
									'</div>' +
							'{{/if}}' +
					'</div>' +
			'</div>' +
	'{{/if}}';
