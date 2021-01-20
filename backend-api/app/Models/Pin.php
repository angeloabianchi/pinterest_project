<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Pin extends Model
{
    protected $table = 'pins';

    protected $fillable = [
      'name',
      'description',
      'img_url',
    ];
}
