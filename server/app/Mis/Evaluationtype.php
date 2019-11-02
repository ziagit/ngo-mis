<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Evaluationtype extends Model
{
    public function evalquestion()
    {
        return $this->hasMany(Evalquestion::class,"evaluationtype_id","id");
    }
}
