<?php

namespace App;
use App\Delegation;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    public function Delegation() {
        return $this->hasMany('App\Delegation');
    }

    // public function OrgEvaluatoins() {
    //     return $this->hasOne('App\OrgEvaluatoin');
    // }

    // public function Bank(){
    //     return $this->hasMany('App\Bank');

    // }

    public function Sector() {
        return $this->belongsTo('App\Sector');
    }

    public function Districts() {
        return $this->belongsTo("App\Distrct");
    }

}
