<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    protected $table = 'boards';

    protected $fillable = [
        'title',
        'description',
        'category',
        'userId',
    ];

    protected function pins() {                     /* Um board contiene muchos pins */
        return $this->hasMany(Pin::class);  /* hasMany - > metodo laravel */
    }

    protected function user() {                        /* un board pertenece a una clase User */
        return $this->belongsTo(User::class);  /* funcción devolve un metodo belongsTo (pertence à) -> metodo de laravel */
    }                                                   /* Hay una clase de tipo User que está relacionada, através do belongsTo, com boards */
}
