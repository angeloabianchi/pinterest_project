<?php


namespace App\Http\Controllers;


use App\Models\Board;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class BoardsController extends Controller
{
    public function create(Request $request) {  /* en la request HTTP recibo un json con los datos del pin que desea crear */
        $data = $request->all();                /* <-- guardo los datos del json en una variable $data */

        $boardValidator = Validator::make($data, [
            'title' => ['required', 'string', 'max:255', 'min:3'],
            'description' => ['required', 'string', 'max:255', 'min:3'],
            'category' => ['required', 'string', 'max:255', 'min:3'],
            'userId' => ['required'],
        ]);

        if($boardValidator->fails()) {
            $errors = $boardValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY;
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }

        $board = Board::create([                    /* función crear pin */
            'title' => $data['title'],
            'description' => $data['description'],
            'category' => $data['category'],
            'userId' => $data['userId']
        ]);

        return response()->json($board);          /* <-- guarda el pin creado en un json */
    }

    public function findAll() {
        $boards = Board::all();

        return response()->json($boards);
    }

    public function findById($id) {
        $board = Board::where('id', $id)->first();

        return response()->json($board);
    }

    public function update(Request $request, $id) {
        $board = Board::where('id', $id)->first();
        $newData = $request->all();
        $board->update($newData);

        return response()->json($board);
    }

    public function delete($id) {
        $board = Board::where('id', $id)->first();
        $board->delete();

        return response()->json("Board deleted.");
    }

    public function findPins($id) {
        $boards = Board::where('id', $id)->first();
        $pins = $boards->pins;      /* utiliza a função pins() do Board.php que criamos */

        return response()->json($pins);
    }

}

