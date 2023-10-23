<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function __construct()
    {
    }
    public function home ()
    {
        return Inertia::render('Pages/Home', []);
    }
    
}
