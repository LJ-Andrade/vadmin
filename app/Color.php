<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    protected $table = "colors";

    protected $fillable = ['name', 'article_id'];

    public function article(){
		return $this->belongsTo('App\Article');
	}

	// public function scopeSearch($query, $name)
	// {
	// 	return $query->where('name', 'LIKE', "%$name%");
	// }

}	
