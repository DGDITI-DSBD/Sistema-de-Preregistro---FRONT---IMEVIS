<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('si_cat_localidades', function(Blueprint $table){

            $table -> id();
            $table -> integer('cve_entidad_federativa');
            $table -> string('nom_ent');
            $table -> integer('cve_municipio');
            $table -> string('nom_mun');
            $table -> integer('cve_localidad');
            $table -> string('desc_localidad');
            $table -> double('lat_decimal');
            $table -> double('lon_decimal');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
