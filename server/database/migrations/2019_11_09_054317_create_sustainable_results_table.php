<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSustainableResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sustainable_results', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger("reletedGols_id"); 
            $table->unsignedBigInteger("project_id");
            $table->text("target"); 
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
        Schema::dropIfExists('sustainable_results');
    }
}
