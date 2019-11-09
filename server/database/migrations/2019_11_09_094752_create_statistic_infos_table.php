<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatisticInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statistic_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('intTknCount');
            $table->integer('intTknPaydAmount');
            $table->integer('intSprtCount');
            $table->integer('intSprtPaydAmount');
            $table->integer('extTknCount');
            $table->integer('extTknPaydAmount');
            $table->integer('extSprtCount');
            $table->integer('extSprtPaydAmount');
            $table->integer('expensByProvince');
            $table->integer('expensBySector');
            $table->integer('expensByMinistry');
            $table->unsignedBigInteger("project_id");


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('statistic_infos');
    }
}
