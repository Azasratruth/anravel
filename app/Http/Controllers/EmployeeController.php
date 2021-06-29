<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function getEmployees(){
        return response()->json(Employee::all(), 200);
        // return response()->json(DB::table('employees')->get(), 200);
    }

    public function getEmployee($id){
        $emp = Employee::find($id);
        
        if(is_null($emp)){
            return response()->json(['message' => 'Employee not found'], 404);
        }
        else{
            return response()->json($emp, 200);
        }
    }

    public function addEmployee(Request $request){
        $emp = Employee::create($request->all());
        return response()->json($emp, 201);
    }

    public function updateEmployee(Request $request, $id){
        $emp = Employee::find($id);

        if(is_null($emp)){
            return response()->json(['message' => 'Employee not found'], 404);
        }
        else{
            $emp->update($request->all());
            return response()->json($emp, 200);
        }
    }

    public function deleteEmployee(Request $request, $id){
        $emp = Employee::find($id);

        if(is_null($emp)){
            return response()->json(['message' => 'Employee not found'], 404);
        }
        else{
            $emp->delete();
            return response()->json(null, 204);
        }
    }
}