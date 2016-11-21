<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

	'*' => array(
		'server' => 'localhost',
		'database' => 'boilerplate',
		'tablePrefix' => 'craft',
		'user' => 'boilerplate',
		'password' => 'boilerplate',
	),

	// Local development
	'.dev' => array(
		'user' => 'root',
		'password' => 'root',
	),

	// Staging
	'.xyz' => array(
		'user' => 'resolution',
		'database' => 'resolution',
		'password' => '2d7a880e02006b74',
	),


);
