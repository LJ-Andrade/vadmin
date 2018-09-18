<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
    protected $table = "gallery_images";

    protected $fillable = ['name', 'item_id'];

	public function item()
	{
	   	return $this->belongsTo('App\GalleryItem');
	}
}
