<?php

namespace App;

use App\Mis\EmployeeType;
use Illuminate\Database\Eloquent\Model;

class ProjectEmployee extends Model
{
    public function project(){
        return $this->belongsTo(Project::class,'project_id','id');
    }
    public function province(){
        return $this->belongsTo(Province::class,"province_id","id");
    }
    public function employeeType(){
        return $this->belongsTo(EmployeeType::class,"employee_id","id");
    }
    public function proEmployeeType(){
        return $this->belongsTo(ProEmployeeType::class,"proemployeetype_id","id");
    }
}
