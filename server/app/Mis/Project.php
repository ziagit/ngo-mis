<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
   public function equipment(){

    return $this->hasMany(Equipment::class,"project_id","id");
   }

   public function vehicle(){

    return $this->hasMany(Vehicle::class,"project_id","id");
   }

   public function plan(){

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

     public function budjetType(){

      return $this->belongsTo(BudjetType::class,"budjettype_id","id");
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
}
