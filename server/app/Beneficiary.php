<?php

namespace App;

use App\Mis\Project;
use Illuminate\Database\Eloquent\Model;

class Beneficiary extends Model
{
   public function BeneficiaryType(){
          return $this->belongsTo(BeneficiariesType::class,'beneficiariesType_id','id');
   }
   public function directIndirect(){
       return $this->belongsTo(DirectIndirect::class,'directIndirect_id','id');
       }
   public function project(){
       return $this->belongsTo(Project::class,'project_id','id');
       }
}
