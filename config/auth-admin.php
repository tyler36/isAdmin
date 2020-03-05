<?php

return [
    /*
     * By default, administrators who have NOT verified their email are blocked.
     * Change to true to allow all administrators regardless.
     */
    'allow-unverified' => env('AUTH_ADMINS_UNVERIFIED', false),

    /*
     * 'isAdmin' checks this column to see if someone is verified by converting it to boolean.
     * This is NOT needed if 'allow-unverified' is set to TRUE.
     */
    'verified-column'  => 'email_verified_at',

    /*
     * A comma-separated string or an array of administrators.
     * By default, it checks these against the 'column' specified in this file.
     */
    'administrators' => env('AUTH_ADMINS_ADMINISTRATORS', ''),

    /*
     * Name of column to match 'administratros' against.
     */
    'column'         => 'email',
];
