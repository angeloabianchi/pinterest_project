<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Pin extends Model
{
    protected $table = 'pins';

    protected $fillable = [
      'title',
      'description',
      'imgUrl',
      'userId',
      'boardId'
    ];

    protected function board() {                        /* un pin pertenece a una clase Board */
        return $this->belongsTo(Board::class);  /* funcción devolve un metodo belongsTo (pertence à) -> metodo de laravel */
    }                                                   /* Hay una clase de tipo Board que está relacionada, através do belongsTo, com pins */
    protected function user() {
        return $this->belongsTo(User::class);
    }
}
