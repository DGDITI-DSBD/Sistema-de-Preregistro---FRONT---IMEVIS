<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class si_cat_documentos extends Model
{
    use HasFactory;

    protected $table = 'si_cat_documentos';

    public $timestamps = false;

    protected $fillable = [
        'n_periodo',
        'id_documento',
        'desc_documento',
        'no_status'
    ];
}
