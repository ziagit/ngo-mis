<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class BudjetType extends Model
{
    public function project()
    {
        return $this->belongsToMany(Project::class,"budgettype_id","id");
        
    }
}
