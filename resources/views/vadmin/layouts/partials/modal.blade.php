<!-- Modal -->
<div id="@yield('modal_id')" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">@yield('modal_title')</h4>
      </div>
      <div class="modal-body">
        @yield('modal_content')
      </div>
      <div class="modal-footer">
        @yield('modal_button')
        <button type="button" class="BtnCancel button buttonCancel" data-dismiss="modal">Cerrar</button>
      </div>
    </div>

  </div>
</div>