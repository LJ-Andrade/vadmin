<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryCategory extends Model
{
    protected $table = "gallery_categories";

    protected $fillable = ['name'];

    public function articles()
    {
        return $this->hasMany('App\GalleryArticle', 'category_id');
    }

}
