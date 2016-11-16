<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

define('URI_SCHEME',  ( isset($_SERVER['HTTPS'] ) ) ? "https://" : "http://" );
define('BASE_URL',    URI_SCHEME . $_SERVER['SERVER_NAME'] . '/');
define('BASE_PATH', 	  realpath(dirname(__FILE__) . '/../') . '/');

return array(

	'*' => array(
		'devMode' => true,
		'siteName' => 'Future Marketer Theme - Cognitives',
		'extraAllowedFileExtensions' => 'json',
		'environmentVariables' => array(
				'basePath' =>  BASE_PATH,
				'baseUrl'  => BASE_URL,
				'userSessionDuration' => false,
				'omitScriptNameInUrls' => true,
		),
	),

);
