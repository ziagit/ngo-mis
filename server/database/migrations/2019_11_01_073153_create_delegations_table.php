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
            $table->string("name");
            $table->string("fatherName");
            $table->string("job");
            $table->string("country");
            $table->string("NIC");
            $table->string("contractStartdate");
            $table->string("contractEnddate");
            $table->string("currentRendezous");
            $table->string("rendezousAccordingContract");
            $table->string("remainRendezous");
            $table->string("phone");
            $table->string("email");
            $table->unsignedBigInteger("delegationtype_id");
            $table->unsignedBigInteger("province_id");
            $table->unsignedBigInteger("organization_id");
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
