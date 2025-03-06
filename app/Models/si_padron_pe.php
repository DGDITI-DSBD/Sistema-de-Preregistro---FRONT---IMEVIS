<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class si_padron_pe extends Model
{
    use HasFactory;

    protected $table = 'si_padron_pre';


    protected $fillable = [
        'curp',
        'primer_apellido',
        'segundo_apellido',
        'nombre',
        'sexo',
        'cve_entidad_nacimiento',
        'fecha_nacimiento',
        'edad',
        'cve_programa'
    ];


}
