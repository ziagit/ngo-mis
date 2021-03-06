<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("name");
            $table->string("fatherName");
            $table->Integer("TIN")->nullable();
            $table->string("job");
            $table->string("education");
            $table->string("specialty");
            $table->string("gender");
            $table->Integer("salary");
            $table->string("country");
            $table->string("email")->nullable();
            $table->string("identity");
            $table->unsignedBigInteger("province_id");
            $table->string("contractStartDate");
            $table->string("contractEndDate");
            $table->text("photo");
            $table->unsignedBigInteger("employeetype_id");
            $table->string("remarks");
            $table->unsignedBigInteger("project_id");
            $table->unsignedBigInteger("proemployeetype_id");
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
        Schema::dropIfExists('project_employees');
    }
}
