<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id', 'customer_id', 'number', 'body', 'file', 'status', 'active',
    ];

    protected $appends = [
        'name',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function getBodyAttribute($value)
    {
        return json_decode($value);
    }

    public function getFileAttribute($value)
    {
        return $this->project->directory . '/' . $value;
    }

    public function getNameAttribute()
    {
        return 'Form ' . $this->number;
    }
}
