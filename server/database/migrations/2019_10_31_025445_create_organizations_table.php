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
            $table->string('orgNameDari');
            $table->string('orgNameEng');
            $table->integer('orgAbrivation');
            $table->integer('regNo');
            $table->string('regDate');
            $table->string('orgAddress');
            $table->string('contactNo');
            $table->string("email");
            $table->integer('sector_id')->unsigned();
            $table->integer('orgs_types_id')->unsigned();
            $table->integer('dons_id')->unsigned();
            $table->string('goles');
            $table->integer('CurrentCashAmount');
            $table->string('house');
            $table->string('street');
            $table->integer("districts_id")->unsigned();
            $table->integer('provinces_id')->unsigned();
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
