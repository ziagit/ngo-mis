<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKeyspersonnelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('keyspersonnels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("name");
            $table->string("fatherName");
            $table->string("possition");
            $table->string("phone");
            $table->string("email");
            $table->string("NIC");
            $table->string("gender");
            $table->string("education");
            $table->string("address");
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
        Schema::dropIfExists('keyspersonnels');
    }
}
