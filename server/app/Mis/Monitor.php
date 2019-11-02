<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Monitor extends Model
{
    public function markmonitor()
    {
        return $this->hasMany(Markmonitor::class, "monitor_id","id");
    }
}
