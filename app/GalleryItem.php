<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryItem extends Model
{
    protected $table = "gallery_items";

    protected $fillable = ['category_id', 'user_id', 'title', 'status'];

    public function category(){
    	return $this->belongsTo('App\GalleryCategory');
    }

    public function user(){
    	return $this->belongsTo('App\User');
    }

    public function images(){
    	return $this->hasMany('App\GalleryImage', 'article_id');
    }

    public function tags(){
    	return $this->belongsToMany('App\GalleryTag');
    }

    public function featuredImageName(){
        $featuredImage = $this->images()->where('featured', true)->first();
        if(!$featuredImage){
            $featuredImage = $this->images()->first();
        }
        
        if($featuredImage){
            return 'webimages/gallery/'.$featuredImage->name;
        }
        return 'webimages/gen/catalog-gen.jpg';
    }

    public function scopeSearchTitle($query, $term)
    {
        return $query
            ->where('title', 'like', "%" . $term . "%");
    }

}
