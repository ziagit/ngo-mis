<?php

namespace App\Mis;

use App\Revenue;
use Illuminate\Database\Eloquent\Model;

class BudjetType extends Model
{
    public function projects()
    {
        return $this->belongsToMany(Project::class);
        
    }
    public function revenue(){
        return $this->hasMany(Revenue::class,'budjetType_id','id');
    }
}
