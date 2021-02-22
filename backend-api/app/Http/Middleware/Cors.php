<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')                                        /* <-- essa e as duas linhas abaixo são códigos feito por mim */
            ->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')  /* declaração dos metodos autorizados */
            ->header('Access-Control-Allow-Headers', 'Content-Type');                           /* tipo de conteúdo que são autorizados */
    }
}

/* Cors para que o frontend possa fazer requests para o backend */
/* Este arquivo foi criado com o comando 'php artisan make:middleware Cors' no terminal, dentro da pasta backend */
/* Registrar o Cors no arquivo 'Kernel.php' */
