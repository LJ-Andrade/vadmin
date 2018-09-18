
# BRUNA
Implementar
//---------------------------------------------------------


## Errores - Fallas - Bugs
//---------------------------------------------------------
El script CheckImg genera loop infinito.
Cuando se quiere agregar imagenes hay error de permisos




RESUELTOS
//---------------------------------------------------------


Dev Permisos 
//---------------------------------------------
1 - 
sudo chown -R javzero.www-data CARPETA
2 - 
sudo chown -R $javzero:www-data storage;
sudo chown -R $javzero:www-data bootstrap/cache;
sudo chmod -R 775 storage;
sudo chmod -R 775 bootstrap/cache;
