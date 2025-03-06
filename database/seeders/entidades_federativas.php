<?php

namespace Database\Seeders;

use App\Models\si_cat_entidad_federativa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class entidades_federativas extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'entidadfedid' => 0,
                'entidadfed_desc' => "SIN ESPECIFICAR",
                'entidafed_abrev' => "SE"
            ],
            [
                'entidadfedid' => 1,
                'entidadfed_desc' => "AGUASCALIENTES",
                'entidafed_abrev' => "AS"
            ],
            [
                'entidadfedid' => 2,
                'entidadfed_desc' => "BAJA CALIFORNIA",
                'entidafed_abrev' => "BC"
            ],
            [
                'entidadfedid' => 3,
                'entidadfed_desc' => "BAJA CALIFORNIA SUR",
                'entidafed_abrev' => "BS"
            ],
            [
                'entidadfedid' => 4,
                'entidadfed_desc' => "CAMPECHE",
                'entidafed_abrev' => "CC"
            ],
            [
                'entidadfedid' => 5,
                'entidadfed_desc' => "COAHUILA",
                'entidafed_abrev' => "CL"
            ],
            [
                'entidadfedid' => 6,
                'entidadfed_desc' => "COLIMA",
                'entidafed_abrev' => "CM"
            ],
            [
                'entidadfedid' => 7,
                'entidadfed_desc' => "CHIAPAS",
                'entidafed_abrev' => "CS"
            ],
            [
                'entidadfedid' => 8,
                'entidadfed_desc' => "CHIHUAHUA",
                'entidafed_abrev' => "CH"
            ],
            [
                'entidadfedid' => 9,
                'entidadfed_desc' => "DISTRITO FEDERAL",
                'entidafed_abrev' => "DF"
            ],
            [
                'entidadfedid' => 10,
                'entidadfed_desc' => "DURANGO",
                'entidafed_abrev' => "DG"
            ],
            [
                'entidadfedid' => 11,
                'entidadfed_desc' => "GUANAJUATO",
                'entidafed_abrev' => "GT"
            ],
            [
                'entidadfedid' => 12,
                'entidadfed_desc' => "GUERRERO",
                'entidafed_abrev' => "GR"
            ],
            [
                'entidadfedid' => 13,
                'entidadfed_desc' => "HIDALGO",
                'entidafed_abrev' => "HG"
            ],
            [
                'entidadfedid' => 14,
                'entidadfed_desc' => "JALISCO",
                'entidafed_abrev' => "JC"
            ],
            [
                'entidadfedid' => 15,
                'entidadfed_desc' => "ESTADO DE MEXICO",
                'entidafed_abrev' => "MC"
            ],
            [
                'entidadfedid' => 16,
                'entidadfed_desc' => "MICHOACAN",
                'entidafed_abrev' => "MN"
            ],
            [
                'entidadfedid' => 17,
                'entidadfed_desc' => "MORELOS",
                'entidafed_abrev' => "MS"
            ],
            [
                'entidadfedid' => 18,
                'entidadfed_desc' => "NAYARIT",
                'entidafed_abrev' => "NT"
            ],
            [
                'entidadfedid' => 19,
                'entidadfed_desc' => "NUEVO LEON",
                'entidafed_abrev' => "NL"
            ],
            [
                'entidadfedid' => 20,
                'entidadfed_desc' => "OAXACA",
                'entidafed_abrev' => "OC"
            ],
            [
                'entidadfedid' => 21,
                'entidadfed_desc' => "PUEBLA",
                'entidafed_abrev' => "PL"
            ],
            [
                'entidadfedid' => 22,
                'entidadfed_desc' => "QUERETARO",
                'entidafed_abrev' => "QT"
            ],
            [
                'entidadfedid' => 23,
                'entidadfed_desc' => "QUINTANA ROO",
                'entidafed_abrev' => "QR"
            ],
            [
                'entidadfedid' => 24,
                'entidadfed_desc' => "SAN LUIS POTOSI",
                'entidafed_abrev' => "SP"
            ],
            [
                'entidadfedid' => 25,
                'entidadfed_desc' => "SINALOA",
                'entidafed_abrev' => "SL"
            ],
            [
                'entidadfedid' => 26,
                'entidadfed_desc' => "SONORA",
                'entidafed_abrev' => "SR"
            ],
            [
                'entidadfedid' => 27,
                'entidadfed_desc' => "TABASCO",
                'entidafed_abrev' => "TC"
            ],
            [
                'entidadfedid' => 28,
                'entidadfed_desc' => "TAMAULIPAS",
                'entidafed_abrev' => "TS"
            ],
            [
                'entidadfedid' => 29,
                'entidadfed_desc' => "TLAXCALA",
                'entidafed_abrev' => "TL"
            ],
            [
                'entidadfedid' => 30,
                'entidadfed_desc' => "VERACRUZ",
                'entidafed_abrev' => "VZ"
            ],
            [
                'entidadfedid' => 31,
                'entidadfed_desc' => "YUCATAN",
                'entidafed_abrev' => "YN"
            ],
            [
                'entidadfedid' => 32,
                'entidadfed_desc' => "ZACATECAS",
                'entidafed_abrev' => "ZS"
            ],
            [
                'entidadfedid' => 33,
                'entidadfed_desc' => "NACIDO EN EL EXTRANJERO",
                'entidafed_abrev' => "NE"
            ]
        ];

        foreach ($data as $key => $value) {
            si_cat_entidad_federativa::create($value);
        }
    }
}
