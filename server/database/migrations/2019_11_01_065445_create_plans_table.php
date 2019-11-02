<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text("goals");
            $table->text("objectives");
            $table->unsignedBigInteger("project_id");
            $table->Integer("emplsalaryProjectbase");
            $table->Integer("emplsalaryInternal");
            $table->Integer("emplsalaryExternal");
            $table->Integer("budgetwithoutsalary");
            $table->integer("budgetsalaryInternal");
            $table->integer("budgetsalaryExternal");
            $table->integer("equipmentBudget");
            $table->integer("equipmentBudgetInternal");
            $table->integer("equipmentBudgetExternal");
            $table->text("projectIndicators");
            $table->unsignedBigInteger("relatedGoals_id");
            $table->unsignedBigInteger("relatedTarget_id");
            $table->Integer("directBeneficiarymen");
            $table->Integer("directBeneficiarywomen");
            $table->Integer("directBeneficiarychaildren");
            $table->Integer("indirectBeneficiarymen");
            $table->Integer("indirectBeneficiarywonen");
            $table->Integer("indirectBeneficiarychaildren");
            $table->string("realTimeStart");
            $table->string("realTimeEnd");
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
        Schema::dropIfExists('plans');
    }
}
