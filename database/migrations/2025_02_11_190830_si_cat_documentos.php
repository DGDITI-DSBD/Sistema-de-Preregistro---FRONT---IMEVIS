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
        Schema::create('si_cat_documentos', function(Blueprint $table){

            $table -> id();
            $table -> string('n_periodo');
            $table -> integer('id_documento');
            $table -> string('desc_documento');
            $table -> integer('no_status');
            
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
