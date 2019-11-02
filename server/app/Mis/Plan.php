<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
 public function project()
    {
       return $this->belongsTo(Project::class,"project_id","id");

    }

    public function relatedGoal()
    {
       return $this->belongsTo(RelatedGoal::class,"relatedGoals_id","id");
       
    }

    public function relatedTarget()
    {
       return $this->belongsTo(RelatedTarget::class,"relatedTarget_id","id");
       
    }
}
