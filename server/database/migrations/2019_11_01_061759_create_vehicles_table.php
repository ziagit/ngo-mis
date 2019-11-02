<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("vehicleType");
            $table->string("modelNo");
            $table->string("color");
            $table->string("plateType");
            $table->string("enginNo");
            $table->Integer("purchasePrice");
            $table->string("purchaseDate");
            $table->string("durationused");
            $table->string("location");
            $table->Integer("currentPrice");
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
        Schema::dropIfExists('vehicles');
    }
}
