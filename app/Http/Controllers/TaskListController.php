<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskListController extends Controller
{
    public function index()
    {

    }

    public function store(Request $request)
    {
        $validateData = [
            'name'       => ['required'],
        ];

        $request->validate($validateData);
        $taskList = TaskList::create($request->all());
        return redirect()->route('home');
    }

    // public function update(Request $request, $taskListId)
    // {
    //     $validateData = [
    //         'name'       => ['required'],
    //     ];

    //     $request->validate($validateData);

    //     $taskList = TaskList::findOrFail($taskListId);
    //     $taskList->update($request->all());
    //     return redirect()->route('home');

    // }

    // public function destroy(TaskList $taskList)
    // {
    //     $taskList->delete();
    //     return response()->json(null, 204);
    // }
}
