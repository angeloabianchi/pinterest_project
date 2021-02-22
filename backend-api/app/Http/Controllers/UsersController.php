<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function create(Request $request) {
        $data = $request->all();

        $userValidator = Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'min:8'],
        ]);

        if($userValidator->fails()) {
            $errors = $userValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY;
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password']
        ]);

        return response()->json($user);
    }

    public function findAll() {
        $users = User::all();

        return response()->json($users);
    }

    public function findById($id) {
        $user = User::where('id', $id)->first();

        return response()->json($user);
    }

    public function update(Request $request, $id) {
        $user = User::where('id', $id)->first();
        $newData = $request->all();
        $user->update($newData);

        return response()->json($user);
    }

    public function delete($id) {
        $user = User::where('id', $id)->first();
        $user->delete();

        return response()->json("User Deleted.");
    }

    public function findBoards($id) {
        $users = User::where('id', $id)->first();
        $boards = $users->boards;

        return response()->json($boards);
    }

    public function findPins($id) {
        $users = User::where('id', $id)->first();
        $pins = $users->pins;

        return response()->json($pins);
    }
}
