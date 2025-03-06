<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class si_cat_localidades extends Model
{
    use HasFactory;

    protected $table = 'si_cat_localidades';

    public $timestamps = false;

    protected $fillable = [
        'cve_entidad_federativa',
        'nom_ent',
        'cve_municipio',
        'nom_mun',
        'cve_localidad',
        'desc_localidad',
        'lat_decimal',
        'lon_decimal'
    ];
}
