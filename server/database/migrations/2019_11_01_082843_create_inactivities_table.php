<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInactivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inactivities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("inactiveYear");
            $table->string("inactiveperiod");
            $table->Integer("budjetAmount");
            $table->Integer("officialExpenses");
            $table->Integer("remainbudjet");
            $table->text("inactivityReason");
            $table->unsignedBigInteger("project_id");
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
        Schema::dropIfExists('inactivities');
    }
}
