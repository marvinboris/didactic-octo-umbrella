<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'number', 'active',
    ];

    protected $appends = [
        'name', 'status', 'directory', 'deadline', 'days', 'completed',
    ];

    public function forms()
    {
        return $this->hasMany(Form::class);
    }

    public static function generateNumber()
    {
        return self::max('number') + 1;
    }

    public function getNameAttribute()
    {
        return 'Project ' . $this->number;
    }

    public function getStatusAttribute()
    {
        $totalForms = $this->forms()->count();
        $activeForms = $this->forms()->whereActive(1)->count();
        if ($activeForms === 0) return 0;

        $approvedForms = $this->forms()->whereStatus(2)->count();
        if ($totalForms === $approvedForms) return 2;

        return 1;
    }

    public function getDeadlineAttribute()
    {
        return $this->created_at->addDays(21);
    }

    public function getDirectoryAttribute()
    {
        return 'files/projects/' . $this->number;
    }

    public function getDaysAttribute()
    {
        $deadline = new Carbon($this->deadline);
        $diff = ($deadline->timestamp - $this->created_at->timestamp) / 86400;
        return $diff > 0 ? $diff : 0;
    }

    public function getCompletedAttribute()
    {
        return $this->forms()->whereStatus(2)->count();
    }
}
