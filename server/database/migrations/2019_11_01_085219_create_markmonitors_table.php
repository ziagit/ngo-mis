<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarkmonitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('markmonitors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger("project_id");
            $table->unsignedBigInteger("monitor_id");
            $table->string("remarks");
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
        Schema::dropIfExists('markmonitors');
    }
}
