<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryArticle extends Model
{
    protected $table = "gallery_articles";

    protected $fillable = ['category_id', 'title', 'thumb', 'status', 'slug'];

    public function category(){
    	return $this->belongsTo('App\GalleryCategory');
    }

    public function images(){
    	return $this->hasMany('App\GalleryImage', 'article_id');
    }
}
