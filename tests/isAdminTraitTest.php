<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use tyler36\isAdmin\isAdminTrait;

/**
 * Class isAdminTraitTest
 *
 * @test
 */
class isAdminTraitTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_model_knows_if_they_are_an_administrator()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };
        $user->email = 'admin@example.com';
        $this->assertFalse($user->isAdmin());

        config()->set(['auth-admin.administrators' => $user->email]);
        $this->assertTrue($user->isAdmin());
    }

    /** @test */
    public function a_model_knows_if_given_model_is_an_administrator()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };

        $admin = new class() extends User {
            use isAdminTrait;
        };
        $admin->email = 'admin@example.com';
        config()->set(['auth-admin.administrators' => $admin->email]);

        $this->assertFalse($user->isAdmin());
        $this->assertFalse($user->isAdmin($user));
        $this->assertTrue($user->isAdmin($admin));
    }

    /** @test */
    public function the_column_checked_can_be_customized()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };
        $user->name = 'Iam Administrator';
        $this->assertFalse($user->isAdmin());

        config()->set([
            'auth-admin.column'         => 'name',
            'auth-admin.administrators' => $user->name,
        ]);
        $this->assertTrue($user->isAdmin());
    }

    /** @test */
    public function administrators_can_be_string_or_array()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };
        $user->email = 'admin@example.com';

        config()->set(['auth-admin.administrators' => $user->email]);
        $this->assertTrue($user->isAdmin());

        config()->set(['auth-admin.administrators' => [$user->email]]);
        $this->assertTrue($user->isAdmin());
    }

    /** @test */
    public function a_model_knows_if_it_is_verified()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };

        $this->assertFalse($user->isVerified());

        $user->email_verified_at = '2020-02-29';
        $this->assertTrue($user->isVerified());
    }

    /** @test */
    public function a_model_knows_if_given_model_is_verified()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };

        $admin = new class() extends User {
            use isAdminTrait;
        };
        $admin->email_verified_at = '2020-02-29';

        $this->assertFalse($user->isVerified());
        $this->assertFalse($user->isVerified($user));
        $this->assertTrue($user->isVerified($admin));
    }
}
