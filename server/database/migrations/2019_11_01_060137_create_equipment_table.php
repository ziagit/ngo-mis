<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipment', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("code");
            $table->string("name");
            $table->unsignedBigInteger("equipmenttype_id");
            $table->string("model");
            $table->string("serialNo");
            $table->Integer("price");
            $table->string("purchaseDate");
            $table->Integer("age");
            $table->string("location");
            $table->string("status");
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
        Schema::dropIfExists('equipment');
    }
}
