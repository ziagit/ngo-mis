<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    public function province()
    {
        return $this->belongsTo(Province::class,"ProvinceId","Id");
    }
}
