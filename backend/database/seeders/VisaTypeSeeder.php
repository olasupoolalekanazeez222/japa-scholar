<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
 use App\Models\VisaType;
class VisaTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      
VisaType::insert([
[
'country_id'=>1,
'name'=>'Study Permit'
],


[
'country_id'=>1,
'name'=>'Work Permit'
],


[
'country_id'=>2,
'name'=>'Student Visa'
],


[
'country_id'=>2,
'name'=>'Job Seeker Visa'
],


[
'country_id'=>3,
'name'=>'Student Visa'
],


[
'country_id'=>3,
'name'=>'Work Visa'
],


[
'country_id'=>4,
'name'=>'Student Visa'
],


[
'country_id'=>4,
'name'=>'Work Permit'
]


]);
    }
}
