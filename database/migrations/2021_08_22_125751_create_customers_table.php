<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('language_id')->unsigned()->index();
            $table->string('name');
            $table->string('token')->unique();
            $table->string('password');
            $table->text('photo')->nullable();
            $table->tinyInteger('is_active')->default(1);
            $table->double('balance')->default(0.0);
            $table->string('email')->unique()->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->text('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('mobile_money_name')->nullable();
            $table->string('mobile_money_operator')->nullable();
            $table->string('mobile_money_phone')->nullable();
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
        Schema::dropIfExists('customers');
    }
}
