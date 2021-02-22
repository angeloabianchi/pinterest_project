<?php


namespace App\Http\Controllers;


use App\Models\Pin;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class PinsController extends Controller
{
    public function create(Request $request) {  /* en la request HTTP recibo un json con los datos del pin que desea crear */
        $data = $request->all();                /* <-- guardo los datos del json en una variable $data */

        $pinValidator = Validator::make($data, [                    /* <-- validar os dados que querem entrar no backend.  */
            'title' => ['required', 'string', 'max:255', 'min:4'],            /* <-- nome requerido, tem que ser string e com max 255 caracteres e mínimo de 4  */
            'description' => ['required', 'string', 'max:255', 'min:4'],
            'imgUrl' => ['required', 'url'],                         /* <-- imgUrl é requerido e precisa ser uma url  */
            'userId' => ['required'],
            'boardId' => ['required'],
        ]);

        if($pinValidator->fails()) {                            /* <-- me envia o erro caso não cumpra algum dos requisitos do pinValidator  */
            $errors = $pinValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY;    //406
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }

        $pin = Pin::create([                    /* función crear pin */
            'title' => $data['title'],
            'description' => $data['description'],
            'imgUrl' => $data['imgUrl'],
            'userId' => $data['userId'],
            'boardId' => $data['boardId']
        ]);

        return response()->json($pin);
    }

    public function findAll() {
        $pins = Pin::all();

        return response()->json($pins);
    }

    public function findById($id) {
        $pin = Pin::where('id', $id)->first();

        return response()->json($pin);
    }

    public function update(Request $request, $id) {
        $pin = Pin::where('id', $id)->first();
        $newData = $request->all();
        $pin->update($newData);

        return response()->json($pin);
    }

    public function delete($id) {
        $pin = Pin::where('id', $id)->first();
        $pin->delete();

        return response()->json("Pin deleted.");
    }

    public function findBoard($id) {
        $pin = Pin::where('id', $id)->first();
        $board = $pin->board;       /* <-- utiliza a função board() do Pin.php que criamos */

        return response()->json($board);
    }
}

