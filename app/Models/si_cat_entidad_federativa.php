<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class si_cat_entidad_federativa extends Model
{
    use HasFactory;


    protected $table = 'cat_entidades_federativas';
    public $timestamps = false;
    protected $fillable = [
        'entidadfedid',
        'entidadfed_desc',
        'entidafed_abrev'
    ];
}
