<nav class="portfolio-filter navbar-default">
	<div class="container-fluid">
	<!-- Brand and toggle get grouped for better mobile display -->
	<div class="navbar-header">
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#portfolio-navbar" aria-expanded="false">
			<span class="sr-only">Toggle navigation</span>
			{{-- <span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span> --}}
			<i class="ion-ios-search"></i>
		</button>
	</div>

	<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="portfolio-navbar">
			<ul class="nav navbar-nav portfolio-filter-left">
				<li class="title">Portfolio de Trabajos</li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					<i class="ion-ios-folder-outline icons-menu"></i> Categorías 
					<span class="caret"></span></a>
					<ul class="dropdown-menu dropdown-items">
						@foreach($categories as $category)
						<li>
							<a href="{{ route('web.search.category', $category->name ) }}"> 
								<span class="badge"> {{ $category->article->count() }}</span>
								{{ $category->name }}
							</a>
						</li>
						@endforeach
					</ul>
				</li>

				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					<i class="ion-ios-pricetag-outline icons-menu"> Tags </i>
					<span class="caret"></span></a>
					<ul class="dropdown-menu dropdown-items">
						@foreach($tags as $tag)
						<li>
							<a href="{{ route('web.search.tag', $tag->name )}}"> {{ $tag->name }}
								{{-- <span class="badge"> {{ $tag->name->count() }}</span> --}}
							</a>
						</li>
						@endforeach
					</ul>
				</li>
				<li><a href="{{ route('web.portfolio') }}"><i class="ion-ios-infinite-outline icons-menu"></i> Todos</a></li>
			</ul>

			<ul class="nav navbar-nav navbar-right portfolio-filter-right">
				{{-- Search --}}
				{!! Form::open(['route' => 'web.portfolio', 'method' => 'GET', 'class' => 'navbar-form navbar-left']) !!}
					<div class="form-group">
						{!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Buscar por título', 'aria-describedby' => 'search']) !!}
						<button type="submit" class="btn search-btn"><i class="ion-ios-search"></i></button>
					</div>
				{!! Form::close() !!}
				{{-- /Search --}}

{{-- 				<form class="navbar-form navbar-left">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Buscar...">
					</div>
					<button type="submit" class="btn search-btn"><i class="ion-ios-search"></i></button>
				</form> --}}
			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</nav>