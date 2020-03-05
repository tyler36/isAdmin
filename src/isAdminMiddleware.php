<?php

namespace tyler36\isAdmin;

use Closure;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;

class isAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth()->guest()) {
            throw new AuthenticationException();
        }

        if (!self::isAdmin()) {
            throw new AuthorizationException();
        }

        if (self::blockUnverified() && !self::isVerified()) {
            throw new AuthorizationException();
        }

        return $next($request);
    }

    /**
     * Check if user is administrator
     *
     * @return bool
     */
    public static function isAdmin()
    {
        if (self::usingTrait()) {
            return auth()->user()->isAdmin();
        }

        return (bool) preg_match('/' . auth()->user()[config('auth-admin.column')] . '/i', config('auth-admin.administrators', ''));
    }

    /**
     * Check if the user has been verified
     *
     * @return bool
     */
    public static function isVerified()
    {
        if (self::usingTrait()) {
            return auth()->user()->isVerified();
        }

        return auth()->user()[config('auth-admin.verified-column')];
    }

    /**
     * Detect if model is using isAdmin trait
     *
     * @return void
     */
    public static function usingTrait()
    {
        return in_array(__NAMESPACE__ . '\isAdminTrait', class_uses(auth()->user()), true);
    }

    /**
     * Check if unverified users should be blocked
     *
     * @return bool
     */
    public static function blockUnverified()
    {
        return !config('auth-admin.allow-unverified');
    }
}
