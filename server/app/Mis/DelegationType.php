<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class DelegationType extends Model
{
   public function delegation(){

    return $this->hasMany(Delegation::class,"delegationtype_id","id");
   }
}
