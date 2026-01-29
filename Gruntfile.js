module.exports = function ( grunt ) {
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		makepot: {
			target: {
				options: {
					domainPath: '/',
					mainFile: 'spectra.php',
					potFilename: 'languages/spectra.pot',
					potHeaders: {
						poedit: true,
						'x-poedit-keywordslist': true,
					},
					type: 'wp-plugin',
					updateTimestamp: true,
				},
			},
		},

		addtextdomain: {
			options: {
				textdomain: 'spectra',
				updateDomains: true,
			},
			target: {
				files: {
					src: [
						'*.php',
						'**/*.php',
						'!node_modules/**',
						'!vendor/**',
					],
				},
			},
		},
	} );

	grunt.loadNpmTasks( 'grunt-wp-i18n' );

	grunt.registerTask( 'i18n', [ 'addtextdomain', 'makepot' ] );
};
