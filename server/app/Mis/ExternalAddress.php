<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class ExternalAddress extends Model
{
    public function organization() {
        
        return $this->belongsTo(ExternalAddress::class);
    }
}
