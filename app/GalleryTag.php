<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryTag extends Model
{
    protected $table = "gallery_tags";

    protected $fillable = ['name'];

    public function article(){
		return $this->belongsToMany('App\GalleryItem');
	}

	public function scopeSearch($query, $name)
	{
		return $query->where('name', 'LIKE', "%$name%");
	}

	public function scopeSearchTag($query, $name)
    {
    	return $query->where('name','=', $name);
	}
	
	public function scopeSearchname($query, $name)
    {
        return $query->where('name','LIKE', "%$name%");
    }


}	
