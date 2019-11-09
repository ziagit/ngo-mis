<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BeneficiariesType extends Model
{
    public function beneficiaries(){
        return $this->hasMany(Beneficiary::class,'beneficiariesType_id','id');
    }
}
