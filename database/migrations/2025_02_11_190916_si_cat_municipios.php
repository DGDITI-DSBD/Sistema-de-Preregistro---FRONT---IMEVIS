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
        Schema::create('si_cat_municipios', function(Blueprint $table){

            $table -> id();
            $table -> double('entidadfederativaid');
            $table -> double('municipioid');
            $table -> string('municipionombre');
            $table -> string('gm_2020');
            $table -> integer('regionid');
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
