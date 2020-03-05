# isAdmin

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Total Downloads][ico-downloads]][link-downloads]
[![Build Status][ico-travis]][link-travis]
[![StyleCI][ico-styleci]][link-styleci]

This is where your description should go. Take a look at [contributing.md](contributing.md) to see a to do list.

## Installation

Via Composer

```bash
$ composer require tyler36/isadmin
```

Update your ```.ENV``` file to include the administators email. Use a comma-separated string if there are multuple accounts.

```
AUTH_ADMINS_ADMINISTRATORS=admin@example.com
```

The default configuration might not be suitable for everyone.
To change it, publish the configuration using the following command.

```bash
$ php artiasn vendor:publish --provider=Tyler36\isAdmin\isAdminServiceProvider
```


## Usage: Middleware
1. Register the middleware in the ```app/Http/Kernel.php```. You can change the middleware short name by replacing ```auth.admin```.

```php
    protected $routeMiddleware = [
        ...
        'auth.admin'    => \tyler36\isAdmin\isAdminMiddleware::class,
        ...
    ];
```

## Usage: Trait
1. Add the trait to your user model

```php
class User extends Authenticatable
{
    use Tyler36\isAdmin\isAdminTrait;
    ....
```

2. You can know verify users on a model

```php
$user = new User();

// Check if user is an admin
$user->isAdmin();

// Check if user is verified
$user->isVerified();

// Check if another user model ($someone) is an admin
$user->isAdmin($someone);
```

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [author name][link-author]
- [All Contributors][link-contributors]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/tyler36/isadmin.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/tyler36/isadmin.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/tyler36/isadmin/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/tyler36/isadmin
[link-downloads]: https://packagist.org/packages/tyler36/isadmin
[link-travis]: https://travis-ci.org/tyler36/isadmin
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/tyler36
[link-contributors]: ../../contributors
