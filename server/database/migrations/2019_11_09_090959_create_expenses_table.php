<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->bigIncrements('id');
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
            $table->unsignedBigInteger("partner_id");
            $table->integer("partnerPay");

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
        Schema::dropIfExists('expenses');
    }
}
