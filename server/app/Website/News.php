<?php

namespace App\Website;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    public function newstype(){
        return $this->blongsTo(Newstype::class,'newstype_id','id');
    }
}
