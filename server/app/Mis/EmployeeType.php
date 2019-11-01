<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class EmployeeType extends Model
{
    public function employee()
    {
        return $this->hasMany(Employee::class,"employeetype_id","id");
    }
}
