<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class si_cat_sepomex extends Model
{
    use HasFactory;


    protected $table = 'si_cat_sepomex';

    public $timestamps = false;

    protected $fillable = [
        'cve_ent_fed',
        'cve_municipio',
        'cp_sipo',
        'desc_asenta',
        'id_asenta_cpcons'
    ];
}
