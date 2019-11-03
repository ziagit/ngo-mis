<?php

namespace App\MIS;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function user()
    {
        return $this->belongsToMany(User::class,"role_id","id");
    }
}
