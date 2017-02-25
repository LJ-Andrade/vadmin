  <!-- Home Contact Data -->
    <div class="container contactDiv">
      <div class="row indexContact">
        <h3>No dude en contactarse con nosotros</h3>
        <hr>
        <div class="col-md-5 col-xs-12 formcontacto center-block">
          <form action="enviar.php" method="post" enctype="multipart/form-data">
            <div class="form-group1">
            <!--       Name         -->
            <input name="name" class="form-control placeholderblack" required="required" placeholder="Nombre / Empresa">
            <p class="help-block text-danger"></p>
            </div>
            <!--       EMail         -->
            <div class="form-group1"><input name="email" class="form-control placeholderblack" required="required" type="email" required="required" placeholder="E-mail">
            <p class="help-block text-danger"></p>
            </div>
            <!--       Phone         -->
            <div class="form-group1"><input name="tel" class="form-control placeholderblack" type="tel" required="tel" placeholder="Tel&eacute;fono"><p class="help-block text-danger"></p>
            </div>
            <!--       Text-area         -->
            <div class="form-group1"><textarea name="message" class="form-control placeholderblack textarea1" cols="15" rows="0" required="required" placeholder="Mensaje"></textarea>
            <p class="help-block text-danger"></p>
            </div>
            <div class="clearfix"></div>
            <!--       Send Button        -->
            <div class="col-lg-12 txC">
                <input id="submit" class="btn btn-xl btncontacto" name="submit" type="submit" value="Enviar">
            </div>
          </form>
        </div>
        <div class="col-md-7 col-xs-12 contactData">
          <img src="{{ asset('webimages/home/logo3.png') }}" alt="Fascination Logo" class="img-responsive" />
          <div class="contactSubtit">
            <p>Su consulta <strong>no molesta</strong></p>
          </div>
          <div class="row contactDataTels">
            <span><i class="fa fa-phone"></i> (011) 4671-1721</span> <span><i class="fa fa-phone"></i> (011) 4642-0769</span> <span><i class="fa fa-mobile"></i> 11-5147-9196</span>
          </div>
          <div class="row contactDataDirs">
              <strong> Aranguren 4507 </strong>- C.A.B.A <br><br>
              <a href="mailto:walteravak@hotmail.com">walteravak@hotmail.com</a> <br>
          </div>
          <!-- Contact Logo -->
        </div>
      </div>
    </div>