<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Delegation extends Model
{
    public function delegationType(){
        return $this->belongsTo(DelegationType::class,"delegationtype_id","id");
        
    }

    public function province(){
        return $this->belongsTo(Province::class,"province_id","id");
        
    }

    public function organization(){
        return $this->belongsTo(Organization::class,"organization_id","id");
        
    }

    
   
}
