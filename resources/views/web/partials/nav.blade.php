@php($current = '')
<div class="top-bar">
</div>
<div class="site-brand">
    <a href="@if($current == 'home') #Home @else {{ url('/#Home') }} @endif"><img src="{{ asset('images/web/logo-h.png') }}" alt="Vimana Studio"></a>
</div>
<div id="navfull-top-btn" class="navfull-button navfull-top-button">
    <div class="toggle-button">
        <span class="bar top"></span>
        <span class="bar middle"></span>
        <span class="bar bottom"></span>
    </div>
</div>

<nav id="navfull" class="main-navigation navfull col-md-12">
    <div class="menu-content">        
        <ul>
            <li><a href="@if($current == 'home') #Home @else {{ url('/#Home') }} @endif" onclick="toggleNav()">HOME</a><div class="nav-line"><div></div></div></li>    
            <li><a href="{{ route('web.portfolio') }}">PORTFOLIO</a><div class="nav-line"><div></div></div></li>
            <li><a href="@if($current == 'home') #Contact @else {{ url('/#Contact') }} @endif" onclick="toggleNav()">CONTACT</a><div class="nav-line"><div></div></div></li>
        </ul>
    </div>
    <div class="social">
        <div class="inner">
            <ul>
                <li><a href="https://www.instagram.com/studiovimana/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://ar.pinterest.com/admstudiovimana/" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
                <li><a href="https://www.facebook.com/studiograficovimana" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/StudioVimana" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.behance.net/studiovimana" target="_blank"><i class="fab fa-behance"></i></a></li>
            </ul>
        </div>
    </div>
</nav>