<?php

namespace App;

use App\Mis\RelatedGoals;
use Illuminate\Database\Eloquent\Model;

class SustainableResult extends Model
{
    public function relatedGoal()
    {
        return $this->blongsToMany(RelatedGoals::class,"relatedGoals_id","Id");
    }
    public function project()
    {
        return $this->blongsToMany(Project::class,"project_id","Id");
    }
}
