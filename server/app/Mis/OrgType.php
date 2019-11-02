<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class OrgType extends Model
{
    public function organizaion(){
        return $this->hasMany(Organization::class,"organizationtype_id","id");

    }

    public function evalquestion()
    {
        return $this->hasMany(Evalquestion::class,"organizationtype_id","id");
    }
}
