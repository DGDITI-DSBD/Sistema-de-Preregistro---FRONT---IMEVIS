<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\si_cat_entidad_federativa;
use App\Models\si_cat_localidades;
use App\Models\si_cat_municipios;
use App\Models\si_cat_nacionalidades;
use App\Models\si_cat_sepomex;

use App\Models\si_cat_documentos;
use App\Models\si_cat_estado_civil;
use App\Models\si_cat_dominios;
use App\Models\si_cat_grado_estudios;



class oCatalogosController extends Controller
{

    public function dominios(){

        $getDominios = si_cat_dominios::select('*')
                        ->orderBy('id_sigesp', 'asc')
                        ->get();

                        return response()->json($getDominios);

    }

    public function documentos(){

        $docsOficiales = si_cat_documentos::select('*')
                        ->orderBy('id_documento', 'asc')
                        ->get();

                        return response()->json($docsOficiales);

    }

    public function estados_civiles(){

        $getEdoCivil = si_cat_estado_civil::select('*')
                        ->orderBy('cve_estado_civil', 'asc')
                        ->get();

                        return response()->json($getEdoCivil);

    }

    public function grado_estudios(){

        $getGrado = si_cat_grado_estudios::select('*')
                        ->orderBy('cve_grado_estudio', 'asc')
                        ->get();

                        return response()->json($getGrado);

    }

    public function municipios(){

        $getCatFilMun = si_cat_municipios::select('entidadfederativaid', 'municipioid', 'municipionombre', 'gm_2020', 'regionid')
        ->where('entidadfederativaid', 15)
        ->orderBy('municipioid', 'asc')
        ->get();

            return response() -> json($getCatFilMun);

    }

    public function localidades(){
        $getCatLocalidades = si_cat_localidades::select('cve_entidad_federativa', 'nom_ent', 'cve_municipio', 'nom_mun', 'cve_localidad', 'desc_localidad', 'lat_decimal', 'lon_decimal')
            ->where('cve_entidad_federativa', 15)
            ->orderBy('cve_localidad', 'asc')
            ->get();

            return response() -> json($getCatLocalidades);
    }

    public function nacionalidades(){

        $getCatNac = si_cat_nacionalidades::select('*')
            ->orderBy('cve_pais', 'asc')
            ->get();

            return response() -> json($getCatNac);
    }

    public function codigos_postales(){

        $getCodigosPostales = si_cat_sepomex::select('cve_ent_fed', 'cve_municipio', 'cp_sipo', 'desc_asenta', 'id_asenta_cpcons')
            ->where('cve_ent_fed', 15)
            ->orderBy('cve_municipio', 'asc')
            ->get();

            return response() -> json($getCodigosPostales);
    }


    public function getInitCatalogos(){

        $getDominios = si_cat_dominios::select('*')
                        ->orderBy('id_sigesp', 'asc')
                        ->get();

        $getEdoCivil = si_cat_estado_civil::select('*')
                        ->orderBy('cve_estado_civil', 'asc')
                        ->get();

        $docsOficiales = si_cat_documentos::select('*')
                        ->orderBy('id_documento', 'asc')
                        ->get();

        $getCatFilMun = si_cat_municipios::select('municipioid', 'municipionombre', 'regionid')
        ->where('entidadfederativaid', 15)
        ->get();
        $entidades = si_cat_entidad_federativa::select('entidadfedid', 'entidadfed_desc','entidafed_abrev')
        ->orderBy('entidadfedid', 'asc')
        ->get();

        // return response()->json([
        //     'sucess' => true,
        //     'message' => 'Catálogos',
        //     'status'  => 200,
        //     'data'    => [
        //                     'dominios'      => $getDominios,
        //                     'estadocivil'   => $getEdoCivil,
        //                     'docsoficiales' => $docsOficiales,
        //                     'municipios'    => $getCatFilMun,
        //                     'entidades'     => $entidades
        //                     ]
        //     ]);

        return response()->json([
            'sucess' => true,
            'message' => 'Catálogos',
            'status'  => 200,
                            'dominios'      => $getDominios,
                            'estadocivil'   => $getEdoCivil,
                            'docsoficiales' => $docsOficiales,
                            'municipios'    => $getCatFilMun,
                            'entidades'     => $entidades
            ]);
    }

    public function getFilterPerMunicipio(){

        $getCatFilMun = si_cat_municipios::select('municipioid', 'municipionombre', 'regionid')
            ->where('entidadfederativaid', 15)
            ->get();

            return response() -> json([
                'sucess'  => true,
                'message' => 'Catálogo de municipios',
                'status'  => 200,
                'data'    => $getCatFilMun
            ]);

    }

    public function getFilterPerLocalidad(Request $request){

        
       $getMunicipio = $request -> cve_municipio;

       log::info('ENTRA ID MUNICIPIO', array($getMunicipio));

        $getCatLocalidad = si_cat_localidades::select('cve_localidad', 'desc_localidad')
        ->where('cve_entidad_federativa', 15)
        ->where('cve_municipio', $getMunicipio)
        ->orderBy('cve_municipio', 'desc')
        ->get();

        return response() -> json([
            'sucess'  => true,
            'message' => 'Catálogo de localidades',
            'status'  => 200,
            'data'    => $getCatLocalidad
        ]);
        
    }

    public function getFilterPerColoniaAndPostal(Request $request){

        $getMunicipio = $request -> cve_municipio;
        log::info('ENTRA ID MUNICIPIO en colonias', array($getMunicipio));

        $getCatCodigos = si_cat_sepomex::select('id_asenta_cpcons', 'cp_sipo', 'desc_asenta')
        ->where('cve_municipio', $getMunicipio)
        ->orderBy('cve_municipio', 'desc')
        ->orderBy('id_asenta_cpcons', 'desc')
        ->get();

        return response() -> json([
            'sucess'  => true,
            'message' => 'Catálogo de codigos postales',
            'status'  => 200,
            'data'    => $getCatCodigos
        ]);
        
    }   
        
    }


