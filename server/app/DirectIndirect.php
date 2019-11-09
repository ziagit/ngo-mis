<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DirectIndirect extends Model
{
    public function beneficiariaries(){
        return $this->hasMany(Beneficiary::class,'directIndirect_id','id');
    }
}
