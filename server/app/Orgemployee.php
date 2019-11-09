<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Orgemployee extends Model
{
    public function province(){

        return $this->belongsTo(Province::class,"province_id","id");
    }

    public function employeetype(){

        return $this->belongsTo(EmployeType::class,"employeetype_id","id");
    }

    public function organization(){

        return $this->belongsTo(Organization::class,"organization_id","id");
    }
}
