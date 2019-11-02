<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEvalquestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evalquestions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text("question");
            $table->unsignedBigInteger("organizationtype_id");
            $table->unsignedBigInteger("evaluationtype_id");
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
        Schema::dropIfExists('evalquestions');
    }
}
