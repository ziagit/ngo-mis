<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProEmployeeType extends Model
{
    public function projectEmployees(){
        return $this->hasMany(ProjectEmployee::class,'proemployeetype_id','id');
    }
}
