<?php

namespace App\Mis;
use DB;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    public function project(){
        return $this->belongsTo(Project::class,"project_id","id");
        
    }

    public function keyspersonnel(){
        return $this->belongsTo(Keyspersonnel::class,"keyspersonnel_id","id");
        
    }

    public function organization(){
        return $this->belongsTo(Organization::class,"organization_id","id");
        
    }


}
