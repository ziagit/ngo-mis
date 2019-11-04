<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Orgassociation extends Model
{
    public function organization(){
        return $this->belongsTo(Organization::class,"organization_id","id");
    }
}
