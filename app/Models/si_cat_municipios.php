<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class si_cat_municipios extends Model
{

    protected $table = 'si_cat_municipios';

    public $timestamps = false;

    protected $fillable = [
        'entidadfederativaid',
        'municipioid',
        'municipionombre',
        'gm_2020',
        'regionid'
    ];
}
