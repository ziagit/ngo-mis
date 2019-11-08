<?php

namespace App\Website;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
     public function contact(){
        return $this->blongsTo(ContactUs::class,'contact_id','id');
    }
}
