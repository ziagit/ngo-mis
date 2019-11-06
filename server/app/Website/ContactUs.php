<?php

namespace App\Website;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
     public function phone(){
        return $this->hasMany(Phone::class,'contact_id','id');
    }
}
