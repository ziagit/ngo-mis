<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class RelatedGoals extends Model
{
    public function targets()
    {
        return $this->hasMany(RelatedTarget::class,"RelatedGoalsId","Id");
    }

    public function plans()
    {
        return $this->hasMany(Plan::class,"relatedGoals_id","Id");
    }
    public function sustainableResults()
    {
        return $this->hasMany(SustainableResult::class,"relatedGoals_id","Id");
    }

}
