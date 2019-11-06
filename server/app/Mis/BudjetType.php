<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class BudjetType extends Model
{
    public function projects()
    {
        return $this->belongsToMany(Project::class);
        
    }
}
