<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    public function Project(){
        return $this->belongsToMany(Project::class);
    }
    public function expenses(){
        return $this->hasMany(Expense::class,'partner_id','id');
    }
}
