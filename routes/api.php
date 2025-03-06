<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\oAuthController;
use App\Http\Controllers\oCatalogosController;
use App\Http\Controllers\oRegController;
use App\Http\Controllers\oRegEstudiosController;
use App\Http\Controllers\oConsultaEstadoController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('siprogem')->group(function(){

    //Validar CURP

    Route::post('auth/beneficiario', [oAuthController::class, 'verifiedBenef']);
    Route::post('auth/usuario', [oAuthController::class, 'logonAuthUser']);
    Route::get('checkCookie', [oAuthController::class, 'checkTokenCookie']);

    // BENEFICIARIOS
    
    Route::post('getFolio', [oAuthController::class, 'controlTokenFolio']);
    Route::post('getBeneficiario', [oAuthController::class, 'index']);

    //DATOS GENERALES
    
    Route::post('modificarGenerales', [oRegController::class, 'updateStatePreRegAccion']);

    //DATOS DOMICILIARIOS

    Route::post('modificarDomicilio', [oRegController::class, 'updateStatePreRegDomAccion']);

    // ESTUDIO SOCIECONÓMICO

    Route::post('modificarForms', [oRegEstudiosController::class, 'onUpdateFormMujeres']);

    // GENERAR DATOS PARA FORMATO FUB

    Route::post('generar_fub', [oConsultaEstadoController::class, 'generarFub']);

    // CATÁLOGOS 

    Route::get('catalogos', [oCatalogosController::class, 'getInitCatalogos']);
    Route::get('dominios', [oCatalogosController::class, 'dominios']);
    Route::get('documentos', [oCatalogosController::class, 'documentos']);
    Route::get('estado_civiles', [oCatalogosController::class, 'estados_civiles']);
    Route::get('grado_estudios', [oCatalogosController::class, 'grado_estudios']);
    Route::get('municipios', [oCatalogosController::class, 'municipios']);
    Route::get('localidades', [oCatalogosController::class, 'localidades']);
    Route::get('nacionalidades', [oCatalogosController::class, 'nacionalidades']);
    Route::get('codigos_postales', [oCatalogosController::class, 'codigos_postales']);

    //FILTRO LOCALIDAD

    Route::post('obLocalidad', [oCatalogosController::class, 'getFilterPerLocalidad']);

    //FILTRO COLONIAS

    Route::post('obColonias', [oCatalogosController::class, 'getFilterPerColoniaAndPostal']);


    Route::group(['middleware' => ['auth:sanctum', 'verified']], function(){



    });

});


