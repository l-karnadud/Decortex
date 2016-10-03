angular.
module('gallery').
component('gallery', {
    templateUrl: "../gallery/gallery.template.html",
    controller: ['$routeParams',"$http",
        function GalleryController($routeParams, $http) {
            var self = this;
            self.loading1 = true;
            $http.get("../folder/" + $routeParams.galleryId + ".json")
                .success(function ($data) {
                    self.folders = $data;
                })
                .finally(function () {
                    self.loading1 = false;
                });

        self.getLike = function(id){
            //alert(id);
            var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            var xhr = new XHR();

// (2) запрос на другой домен :)
            xhr.open('GET', 'http://decortex.by/watch/index.php?getLike='+ id/*$routeParams.pictureId*/, true);

            xhr.onload = function() {
                $('#likes-' + id).html(this.responseText);
            }

            xhr.onerror = function() {
                alert( 'Ошибка ' + this.status );
            }

            xhr.send();
        },

        self.like = function(id){
            var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            var xhr = new XHR();

// (2) запрос на другой домен :)
            xhr.open('GET', 'http://decortex.by/watch/index.php?addLike='+id/*$routeParams.pictureId*/, true);

            xhr.onload = function() {
                if(this.responseText == 'error') {
                    alert('Невозможно поставить лайк, api недоступно!');
                }
            }

            xhr.onerror = function() {
                alert( 'Ошибка ' + this.status );
            }

            xhr.send();
            self.getLike(id);
        }
            self.setImg = function(modalId, direction) {
                var tempArray = [];
                var pos = 0;
                for(var key in self.folders.library){
                    if(direction == 1){
                        if(self.folders.library[key].id == modalId){
                            if(key == 0){
                                pos = self.folders.library.length - 1;
                            }
                            else{
                                pos = + key - 1;
                            }
                        }
                    }
                    if(direction == 2){
                        if(self.folders.library[key].id == modalId){
                            if(key == self.folders.library.length - 1){
                                pos = 0;
                            }
                            else{
                                pos = + key + 1;
                            }
                        }
                    }
                    //alert(self.folders.library[key].id);
                }
                //alert(self.folders.library[pos].id);
                var newModalId = self.folders.library[pos].id;
                $("#modal-" + modalId).modal('hide');
                $("#modal-" + newModalId).modal('show');
            }
}
]
});
