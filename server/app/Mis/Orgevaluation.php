<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Orgevaluation extends Model
{
    public function organization()
    {
        return $this->belongsTo(Organization::class,"organization_id","id");
    }

    public function evalquestion()
    {
        return $this->belongsTo(Evalquestion::class,"evalquestion_id","id");
    }
}
