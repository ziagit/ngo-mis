<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReasonforregsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reasonforregs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("titleDr");
            $table->string("titleEn");
            $table->string("titlePa");
            $table->text("descriptionDr");
            $table->text("descriptionEn");
            $table->text("descriptionPa");
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
        Schema::dropIfExists('reasonforregs');
    }
}
