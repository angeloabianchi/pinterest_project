<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password'
    ];


    protected function boards() {                     /* Um user contiene muchos boards */
        return $this->hasMany(Board::class);  /* hasMany - > metodo laravel */
    }
    protected function pins() {                     /* Um user contiene muchos pins */
        return $this->hasMany(Pin::class);  /* hasMany - > metodo laravel */
    }

}
