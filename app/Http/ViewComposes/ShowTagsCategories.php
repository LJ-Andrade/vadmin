<?php 

namespace App\Http\ViewComposers;

use Illuminate\Contracts\View\View;
use App\CatalogCategory;
use App\CatalogTag;

class ShowTagsCategories
{
	public function compose(View $view)
	{
		$categories = CatalogCategory::orderBy('name', 'desc')->get();
		$tags       = CatalogTag::orderBy('name', 'asc')->get();
		
		$view->with('categories', $categories)->with('tags', $tags);
	}
}