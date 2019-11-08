<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExternalAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('external_addresses', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->integer('houseNo')->nullable();
            $table->integer('streetNo')->nullable();
            $table->string('province')->nullable();
            $table->string('district')->nullable();
            $table->unsignedBigInteger('organization_id');
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
        Schema::dropIfExists('external_addresses');
    }
}
