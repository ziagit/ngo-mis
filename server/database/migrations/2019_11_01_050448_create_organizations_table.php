<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("nameDa");
            $table->string("nameEn");
            $table->string("abrivation");
            $table->integer("registerNo");
            $table->string("registerDate");
            $table->string("contactNo");
            $table->string("email");
            $table->unsignedBigInteger("organizationtype_id");
            $table->text("goals");
            $table->integer("currentCashAmount");
            $table->integer("currency_id");
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
        Schema::dropIfExists('organizations');
    }
}
