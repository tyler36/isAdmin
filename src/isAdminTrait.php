<?php

namespace tyler36\isAdmin;

trait isAdminTrait
{
    /**
     * Check if user is configured to be an admininstrator
     *
     * @param null|\App\User $user
     *
     * @return bool
     */
    public function isAdmin($user = null)
    {
        $user    = $user ?? $this;
        $pattern = '/' . $user[config('auth-admin.column', 'email')] . '/i';
        if ('//i' === $pattern) {
            return false;
        }

        return (bool) preg_match($pattern, $this->getAdmins());
    }

    /**
     * Get a comma-separated string of administrators
     *
     * @return string
     */
    public function getAdmins()
    {
        $list   = config('auth-admin.administrators', '');
        if ('array' === gettype($list)) {
            return implode(',', $list);
        }

        return $list;
    }

    /**
     * Check if the user has been verified
     *
     * @param null|mixed $user
     *
     * @return bool
     */
    public function isVerified($user = null)
    {
        $user   = $user ?? $this;

        return (bool) $user[config('auth-admin.verified-column', 'email_verified_at')];
    }
}
