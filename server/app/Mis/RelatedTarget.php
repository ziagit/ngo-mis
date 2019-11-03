<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class RelatedTarget extends Model
{
    public function goal()
    {
        return $this->belongsTo(RelatedGoals::class,"RelatedGoalsId","Id");
    }

    public function plan()
    {
        return $this->hasMany(Plan::class,"relatedGoals_id","Id");
    }
}
