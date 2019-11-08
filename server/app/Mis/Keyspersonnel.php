<?php

namespace App\Mis;

use Illuminate\Database\Eloquent\Model;

class Keyspersonnel extends Model
{
    protected $fillable = [ 
        'name',
        'fatherName',
        'possition',
        'phone',
        'email',
        'NIC',
        'gender',
        'education',
        'address',
        'organization_id',
    ];
    
    public function organization()
    {

        return $this->belongsTo(Organization::class,"organization_id","id");
    }

    public function bank(){
        return $this->hasOne(Bank::class,"keypersonnel_id","id");
        
    }
}
