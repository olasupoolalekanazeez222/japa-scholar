<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{


protected $fillable=[

'name',
'flag'

];

public function posts()
{
return $this->hasMany(Post::class);
}
public function visaTypes()
{
return $this->hasMany(VisaType::class);
}
}
