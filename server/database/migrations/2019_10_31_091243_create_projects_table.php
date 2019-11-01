<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("projectCode");
            $table->string("projectName");
            $table->string("projectPrice");
            $table->unsignedBigInteger("budjet_id");
            $table->unsignedBigInteger("govDirectorate");
            $table->unsignedBigInteger("province_id");
            $table->unsignedBigInteger("district_id");
            $table->string("projectStartDate");
            $table->string("projectEndDate");
            $table->string("projectStatus");
            $table->unsignedBigInteger("sector_id");
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
        Schema::dropIfExists('projects');
    }
}
