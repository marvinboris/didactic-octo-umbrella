<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Customer extends Authenticatable
{
    use Notifiable, HasFactory, HasApiTokens;

    protected $directory = '/images/customers/';

    protected $fillable = [
        'language_id', 'name', 'token', 'password', 'photo', 'is_active', 'balance',
        'email', 'country', 'city', 'address', 'phone',
        'mobile_money_name', 'mobile_money_operator', 'mobile_money_phone', 'paypal_email'
    ];

    protected $appends = [
        'affiliate_link',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    public static function personalAccessToken()
    {
        return 'Customer Personal Access Token';
    }

    public static function type()
    {
        return 'customer';
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function forms()
    {
        return $this->hasMany(Form::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? public_path($this->directory . $value) : 'https://dummyimage.com/100.png/09f/fff';
    }

    public function getAffiliateLinkAttribute()
    {
        return url('/register/?ref=' . $this->token);
    }
}
