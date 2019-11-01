<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDelegationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delegations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('fatherName');
            $table->string('job');
            $table->string('country');
            $table->integer('nic');
            $table->string('contractStartDate');
            $table->string("contractEndDate");
            $table->string('currentRendezvous');
            $table->string('rAC');
            $table->string('remainRendezvous');
            $table->integer('phoneNo');
            $table->string('email');
            $table->integer('types_id')->unsigned();
            $table->integer('provences_id')->unsigned();
            $table->integer('orgs_id')->unsigned();
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
        Schema::dropIfExists('delegations');
    }
}
