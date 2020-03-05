<?php

namespace Tests\Unit;

use App\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use tyler36\isAdmin\isAdminMiddleware;
use tyler36\isAdmin\isAdminTrait;

/**
 * Class isAdminMiddelwareTest
 *
 * @test
 * @group unit
 * @group middleware
 * @group administrator
 */
class isAdminMiddelwareTest extends TestCase
{
    use DatabaseMigrations;

    protected $route;

    /**
     * Test setup
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->route = 'test/isAdministratorTest';

        \Route::get($this->route, function () {
            return 'Available';
        })->middleware(isAdminMiddleware::class);
    }

    /**
     * @test
     * @group guest
     */
    public function a_guest_can_NOT_access_route()
    {
        $this->assertGuest()
            ->get($this->route)
            ->assertRedirect(route('login'));
    }

    /**
     * @test
     * @group exception
     * @group 403
     */
    public function a_regular_member_can_NOT_access_route()
    {
        $this->actingAs(factory(User::class)->create())
            ->get($this->route)
            ->assertStatus(403);
    }

    /** @test */
    public function an_administrator_who_is_NOT_verified_can_NOT_access_route()
    {
        $user   = factory(User::class)->create(['email_verified_at' => null]);
        config()->set([
            'auth-admin.allow-unverified' => false,
            'auth-admin.administrators'   => $user->email,
        ]);

        $this->actingAs($user)
            ->get($this->route)
            ->assertStatus(403);
    }

    /** @test */
    public function a_verified_administrator_has_access()
    {
        $user   = factory(User::class)->create(['email_verified_at' => Carbon::now()]);

        config()->set('auth-admin.administrators', $user->email);

        $this->actingAs($user)
            ->get($this->route)
            ->assertStatus(200)
            ->assertSee('Available');
    }

    /** @test */
    public function a_column_can_be_selected_for_comparing()
    {
        $user   = factory(User::class)->create(['name' => 'Iam Administrator']);

        config()->set([
            'auth-admin.administrators' => $user->name,
            'auth-admin.column'         => 'name',
        ]);

        $this->actingAs($user)
            ->get($this->route)
            ->assertStatus(200)
            ->assertSee('Available');
    }

    /** @test */
    public function it_prefers_to_use_is_admin_trait_for_admin_check()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };
        $user->email = 'admin@example.com';
        config()->set([
            'auth-admin.administrators'   => $user->email,
            'auth-admin.allow-unverified' => true,
        ]);

        $this->actingAs($user)
            ->get($this->route)
            ->assertStatus(200)
            ->assertSee('Available');
    }

    /** @test */
    public function it_prefers_to_use_admin_trait_for_verification()
    {
        $user = new class() extends User {
            use isAdminTrait;
        };
        $user->email             = 'admin@example.com';
        $user->email_verified_at = '2020-02-29';
        config()->set([
            'auth-admin.administrators'   => $user->email,
            'auth-admin.allow-unverified' => false,
        ]);

        $this->actingAs($user)
            ->get($this->route)
            ->assertStatus(200)
            ->assertSee('Available');
    }
}
