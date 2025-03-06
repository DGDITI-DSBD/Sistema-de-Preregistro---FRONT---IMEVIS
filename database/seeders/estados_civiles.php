<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\si_cat_estado_civil;

class estados_civiles extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "cve_estado_civil"=> "0",
                "estado_civil"=> "NINGUNO"
            ],
            [
                "cve_estado_civil"=> "1",
                "estado_civil"=> "SOLTERO(A)"
            ],
            [
                "cve_estado_civil"=> "2",
                "estado_civil"=> "CASADO(A)"
            ],
            [
                "cve_estado_civil"=> "3",
                "estado_civil"=> "VIUDO(A)"
            ],
            [
                "cve_estado_civil"=> "4",
                "estado_civil"=> "DIVORCIADO(A)"
            ],
            [
                "cve_estado_civil"=> "5",
                "estado_civil"=> "UNION LIBRE"
            ],
            [
                "cve_estado_civil"=> "6",
                "estado_civil"=> "SEPARADO(A)"
            ],
            [
                "cve_estado_civil"=> "7",
                "estado_civil"=> "CONCUBINATO"
            ],
            [
                "cve_estado_civil"=> "8",
                "estado_civil"=> "OTRO"
            ]
        ];

        foreach($data as $key => $value){
            si_cat_estado_civil::create($value);
        }

    }
}
