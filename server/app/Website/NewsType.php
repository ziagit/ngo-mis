<?php

namespace App\Website;

use Illuminate\Database\Eloquent\Model;

class NewsType extends Model
{
    public function news(){
        return $this->hasMany(News::class,'newstype_id','id');
    }
}
