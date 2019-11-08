<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrgLawsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('org_laws', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('titleDa');
            $table->string('titleEn');
            $table->string('titlePa');
            $table->text('descriptionDa');
            $table->text('descriptionEn');
            $table->text('descriptionPa');
            $table->string('pdfLink');
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
        Schema::dropIfExists('org_laws');
    }
}
