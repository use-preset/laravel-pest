import { color, Preset } from 'apply';

Preset.setName('Pest for Laravel');

// Installs the dependencies.
Preset.execute('composer')
	.withArguments([
		'require',
		'pestphp/pest',
		'pestphp/pest-plugin-laravel',
		'--dev',
		'--with-all-dependencies',
		'--no-interaction',
	])
	.withTitle(`Installing ${color.magenta('composer')} dependencies...`);

// Runs the Pest artisan command.
Preset.execute('php')
	.withArguments(['artisan', 'pest:install', '--no-interaction'])
	.withTitle(`Setting up ${color.magenta('Pest')}...`);

// Displays instructions.
Preset.instruct([
	`Write your own helpers in ${color.magenta('tests/Helpers.php')}`,
	`Make new tests with ${color.magenta('php artisan pest:test')}`,
	`Run ${color.magenta('php artisan test')} to start your test suite`,
]).withHeading("What's next?");
