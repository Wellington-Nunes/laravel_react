<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $request, $taskListId)
    {
        $request->validate(['name' => 'required']);

        Task::create([
            'name' => $request->name,
            'task_list_id' => $taskListId,
        ]);
    
        return redirect()->route('home');
    }

    public function update(Request $request, Task $task)
    {
        $task->update($request->all());
        return $task;
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json(null, 204);
    }
}
