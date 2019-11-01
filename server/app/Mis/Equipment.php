<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    public function equipType(){
        return $this->belongsTo(EquipType::class,"equipmenttype_id","id");
    }

    public function project(){
        return $this->belongsTo(Project::class,"project_id","id");
    }
}
