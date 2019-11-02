<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrgassociationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orgassociations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger("organization_id");
            $table->string("assocDued");
            $table->string("assocAccordingToContract");
            $table->string("assocDuedDate");
            $table->string("assocMinut");
            $table->string("assocMustDuedDate");
            $table->string("assocDelegSelected");
            $table->string("assocMinutDirectorate");
            $table->string("assocRemarks");
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
        Schema::dropIfExists('orgassociations');
    }
}
