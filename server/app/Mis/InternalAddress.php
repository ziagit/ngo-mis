<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class InternalAddress extends Model
{
    public function organization() {
        
        return $this->belongsTo(Organization::class);
    }
}
