<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGuidesforOrgRegsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guidesfor_org_regs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("titleDr");
            $table->string("titleEn");
            $table->string("titlePa");
            $table->text("descriptionDr");
            $table->text("descriptionEn");
            $table->text("descriptionPa");
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
        Schema::dropIfExists('guidesfor_org_regs');
    }
}
