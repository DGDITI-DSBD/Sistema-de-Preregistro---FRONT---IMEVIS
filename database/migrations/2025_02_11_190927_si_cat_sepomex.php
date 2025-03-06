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
        Schema::create('si_cat_sepomex', function(Blueprint $table){

            $table -> id();
            $table -> integer('cve_ent_fed');
            $table -> integer('cve_municipio');
            $table -> integer('cp_sipo');
            $table -> string('desc_asenta');
            $table -> integer('id_asenta_cpcons');
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
