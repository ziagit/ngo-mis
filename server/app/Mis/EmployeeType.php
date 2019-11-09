<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class EmployeeType extends Model
{
    public function orgemployees()
    {
        return $this->hasMany(Orgemployee::class,"employeetype_id","id");
    }
    public function employeeTypes()
    {
        return $this->hasMany(EmployeeType::class,"employeetype_id","id");
    }
}
