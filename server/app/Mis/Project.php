<?php

namespace App\Mis;

use App\BudjetDivisan;
use App\Challeng;
use App\Expense;
use App\GovDirectorate;
use App\Income;
use App\Partner;
use App\PriorityProgram;
use App\ProjectEmployee;
use App\Revenue;
use App\StatisticInfo;
use Illuminate\Database\Eloquent\Model;
use PHPUnit\TextUI\ResultPrinter;

class Project extends Model
{
    public $timestamps = false;

   public function equipment(){

    return $this->hasMany(Equipment::class,"project_id","id");
   }

   public function vehicle(){

    return $this->hasMany(Vehicle::class,"project_id","id");
   }

   public function budjetD(){

      return $this->hasOne(Plan::class,"project_id","id");
     }

     public function province(){

      return $this->belongsToMany(Province::class,"province_id","id");
     }

     
     public function district(){

      return $this->belongsToMany(District::class,"district_id","id");
     }

     public function organization(){

      return $this->belongsTo(Organization::class,"organization_id","id");
     }

     public function sector(){

      return $this->belongsTo(Sector::class,"sector_id","id");
     }

     public function budjetTypes(){

      return $this->belongsToMany(BudjetType::class);
     }

     public function inactivity(){

      return $this->hasMany(Inactivity::class,"project_id","id");
     }

     public function projectDocList(){

      return $this->hasMany(ProjectDocList::class,"project_id","id");
     }

     public function markmonitor(){

      return $this->hasMany(Markmonitor::class,"project_id","id");
     }

     public function bank(){

      return $this->hasMany(Bank::class,"project_id","id");
     }
     public function sustainableResults(){
         return $this->hasMany(Project::class,'project_id',id);

     } 
     public function projectEmployees(){
        return $this->hasMany(ProjectEmployee::class,'project_id','id');
    }
    public function projects(){
        return $this->hasMany(Project::class,'project_id','id');
    }
    public function govDirectorates(){
        return $this->belongsToMany(GovDirectorate::class);
    }
    public function budjetDivisan(){
        return $this->hasOne(BudjetDivisan::class,'project_id','id');
    }
    public function partners(){
        return $this->belongsToMany(Partner::class);
    }
    public function revenues(){
        return $this->hasMany(Revenue::class,'project_id','id');
    }
    public function resultPriority(){
        return $this->hasMany(ResultPrinter::class,'project_id,..','id');
    }
    public function incomes(){
        return $this->hasMany(Income::class,'project_id','id');
    }
    public function expenses(){
        return $this->hasMany(Expense::class,'project_id','id');
    }
    public function statisticinfos(){
        return $this->hasMany(StatisticInfo::class,'project_id','id');
    }
    public function challengs(){
        return $this->hasMany(Challeng::class,'project_id','id');
    }
    public function priorityProgram (){
        return $this->belongsToMany(PriorityProgram::class);
    }




}
