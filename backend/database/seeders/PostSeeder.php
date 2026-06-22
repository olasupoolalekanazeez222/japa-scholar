<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
     use App\Models\Post;
class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
  
Post::insert([
[
'user_id'=>1,

'country_id'=>1,

'visa_type_id'=>1,

'title'=>'Canada Student Visa 2027',

'description'=>'Everything you need to know about applying for Canada study permit',

'views'=>120

],


[

'user_id'=>1,

'country_id'=>2,

'visa_type_id'=>3,

'title'=>'Germany Universities Without Tuition',

'description'=>'A guide for Nigerian students applying to Germany',

'views'=>250

]
]);
    }
}
