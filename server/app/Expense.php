<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    public function partner(){
        return $this->belongsTo(Partner::class,'partner_id','id');
    }
    public function project(){
        return $this->belongsTo(Project::class,'project_id','id');
    }
}
