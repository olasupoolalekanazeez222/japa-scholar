<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
      protected $fillable = [

        'user_id',
        'country_id',
        'visa_type_id',
        'title',
        'description',
        'views'

    ];


    public function user()
    {

        return $this->belongsTo(User::class);

    }


    public function country()
    {

        return $this->belongsTo(Country::class);

    }


    public function visaType()
    {

        return $this->belongsTo(VisaType::class);

    }
}
