<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Evalquestion extends Model
{
  public function orgType()
  {
      return $this->belongsTo(OrgType::class,"organizationtype_id","id");

  }

  public function evaluationtype()
  {
      return $this->belongsTo(Evaluationtype::class,"evaluationtype_id","id");

  }

  public function orgevaluation()
  {
      return $this->hasMany(Orgevaluation::class,"evalquestion_id","id");

  }
}
