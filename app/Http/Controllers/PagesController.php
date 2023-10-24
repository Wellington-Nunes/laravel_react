<?php

namespace App\Http\Controllers;

use App\Models\TaskList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function __construct()
    {
    }
    public function home()
    {
        $taskLists = TaskList::with('tasks')->get()->toArray();
        return Inertia::render('Pages/Home', [
            'taskLists' => $taskLists,
        ]);
    }
}
