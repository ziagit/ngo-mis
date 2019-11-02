<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class EquipType extends Model
{
   public function equipment(){
       return $this->hasMany(Equipment::class,"equipmenttype_id","id");
   }
}
