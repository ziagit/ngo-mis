<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class RelatedGoals extends Model
{
    public function target()
    {
        return $this->hasMany(RelatedTarget::class,"RelatedGoalsId","Id");
    }
}
