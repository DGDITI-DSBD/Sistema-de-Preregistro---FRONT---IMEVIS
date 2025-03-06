<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\si_cat_documentos;

class documentos extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "n_periodo"=> 2023,
                "id_documento"=> "0",
                "desc_documento"=> "NINGUNO",
                "no_status"=> "0"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "1",
                "desc_documento"=> "OTRO",
                "no_status"=> "0"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "2",
                "desc_documento"=> "CREDENCIAL INE",
                "no_status"=> "1"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "3",
                "desc_documento"=> "LICENCIA DE MANEJO",
                "no_status"=> "1"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "4",
                "desc_documento"=> "CARTILLA MILITAR",
                "no_status"=> "1"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "5",
                "desc_documento"=> "CREDENCIAL INAPAM",
                "no_status"=> "0"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "6",
                "desc_documento"=> "CREDENCIAL IMMS",
                "no_status"=> "0"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "7",
                "desc_documento"=> "CREDENCIAL ISSSTE",
                "no_status"=> "0"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "8",
                "desc_documento"=> "CREDENCIAL INSEN",
                "no_status"=> "0"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "9",
                "desc_documento"=> "PASAPORTE",
                "no_status"=> "1"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "10",
                "desc_documento"=> "RFC",
                "no_status"=> "1"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "11",
                "desc_documento"=> "CURP",
                "no_status"=> "1"
            ],
            [
                "n_periodo"=> 2023,
                "id_documento"=> "12",
                "desc_documento"=> "ACTA DE NACIMIENTO",
                "no_status"=> "0"
            ]
        ];

        foreach($data as $key => $value){
            si_cat_documentos::create($value);
        }
    }
}
