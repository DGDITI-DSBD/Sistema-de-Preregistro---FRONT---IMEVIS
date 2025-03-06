<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    
        $this->call([
            codigos_postales::class,
            documentos::class,
            dominios::class,
            entidades_federativas::class,
            estados_civiles::class,
            localidades::class,
            municipios::class,
            nacionalidades::class,
        ]);
    }
}
