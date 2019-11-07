<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    public function organization() {
        return $this->belongsTo(Organization::class);
    }
}
