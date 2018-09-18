<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryCategory extends Model
{
    protected $table = "gallery_categories";

    protected $fillable = ['name'];

    public function items()
    {
        return $this->hasMany('App\GalleryItem', 'category_id');
    }

    public function scopeSearchCategory($query, $name)
    {
    	return $query->where('name','=', $name);
    }
    
    public function scopeSearchname($query, $name)
    {
        return $query->where('name','LIKE', "%$name%");
    }
}
