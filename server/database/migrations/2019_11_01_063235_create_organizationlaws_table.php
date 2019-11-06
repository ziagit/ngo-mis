<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationlawsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizationlaws', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('titleDr');
            $table->string('titleEn');
            $table->string('titlePa');
            $table->text('descriptionDr');
            $table->text('descriptionEn');
            $table->text('descriptionPa');
            $table->string('PDFLink');
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
        Schema::dropIfExists('organizationlaws');
    }
}
