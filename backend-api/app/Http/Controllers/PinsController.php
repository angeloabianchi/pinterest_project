<?php


namespace App\Http\Controllers;


use App\Models\Pin;
use http\Client\Response;
use Illuminate\Http\Request;

class PinsController extends Controller
{
    public function create(Request $request) {
        $data = $request->all();

        $pin = Pin::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'img_url' => $data['img_url']
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
}

