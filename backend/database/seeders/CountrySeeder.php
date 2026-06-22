<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{


    public function run(): void
    {
        //
        Country::insert([
[
'name'=>'Canada'
],

[
'name'=>'Germany'
],

[
'name'=>'Australia'
],

[
'name'=>'Poland'
],

[
'name'=>'USA'
],

[
'name'=>'UK'
],

[
'name'=>'Ireland'
],

[
'name'=>'Netherlands'
],

[
'name'=>'France'
],

[
'name'=>'Finland'
]

]);
    }
}
