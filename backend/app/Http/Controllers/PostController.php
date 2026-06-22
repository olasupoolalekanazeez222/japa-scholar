<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
public function index()
{

return Post::with(
[
'user',
'country',
'visaType'
]
)
->latest()
->paginate(25);

}


}