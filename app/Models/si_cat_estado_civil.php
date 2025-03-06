<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class si_cat_estado_civil extends Model
{
    use HasFactory;

    protected $table = 'cat_estado_civil';
    public $timestamps = false;

    protected $primaryKey = 'cve_estado_civil';

    protected $fillable = [
        'cve_estado_civil',
        'estado_civil'
    ];
}
