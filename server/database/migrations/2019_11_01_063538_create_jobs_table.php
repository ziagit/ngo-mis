<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('description');
            $table->unsignedBigInteger('province_id');
            $table->string('nationality');
            $table->string('category');
            $table->string('employeeType');
            $table->Integer('salary');
            $table->string('vacancyNo');
            $table->Integer('nojobs');
            $table->string('city');
            $table->string('organization');
            $table->string('yearExperience');
            $table->string('contractDuration');
            $table->string('gender');
            $table->string('education');
            $table->string('closeDate');





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
        Schema::dropIfExists('jobs');
    }
}
