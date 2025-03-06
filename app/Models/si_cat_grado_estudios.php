<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class si_cat_grado_estudios extends Model
{
    use HasFactory;

    protected $table = 'si_cat_grado_estudios';

    protected $fillable = [
        'cve_grado_estudio',
        'grado_estudios'
    ];

    public $timestamps = false;
    public $incrementing = false;
}
