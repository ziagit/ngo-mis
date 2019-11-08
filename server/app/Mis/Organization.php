<?php


namespace App\Mis;


use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $fillable = [
        'nameDa',
        'nameEn',
        'abrivation',
        'registerNo',
        'registerDate',
        'contactNo',
        'email',
        'organizationtype_id',
        'goals',
        'currentCashAmount',
        'currency',
    ];
    

     public function orgType()
    {
        return $this->belongsTo(OrgType::class,"organizationtype_id","id");
    }

    public function sectors()
    {
        return $this->belongsToMany(Sector::class);
    }

    public function donners()
    {
        return $this->belongsToMany(Donner::class);
    }

    public function district()
    {
        return $this->belongsToMany(District::class,"district_id","id");
    }

    public function province()
    {
        return $this->belongsToMany(Province::class,"province_id","id");
    }

    public function orgassociation()
    {
        return $this->hasMany(Orgassociation::class,"organization_id","id");
    }

    public function employee()
    {
        return $this->hasMany(Employee::class,"organization_id","id");
    }

    public function project()
    {
        return $this->hasMany(Project::class,"organization_id","id");
    }

    public function delegation()
    {
        return $this->hasMany(Delegation::class,"organization_id","id");
    }

    public function keyspersonnel()
    {
        return $this->hasMany(Keyspersonnel::class,"organization_id","id");
    }

    public function orgevaluation()
    {
        return $this->hasMany(Orgevaluation::class,"organization_id","id");
    }

    public function bank()
    {
        return $this->hasMany(Bank::class,"organization_id","id");
    }

    public function currency () {
        
        return $this->hasOne(Currency::class);
    }

    public function internalAddress () {
        
        return $this->hasOne(InternalAddress::class,"organization_id","id");
    }

    public function externalAddress () {
        
        return $this->hasOne(ExternalAddress::class,"organization_id","id");
    }
}

