angular.
module('pictureDetail').
component('pictureDetail', {
    templateUrl: "../picture-detail/picture-detail.template.html",
    //template: 'TBD: Detail view for <span>{{$ctrl.pictureId}}</span>',
    controller: ['$routeParams',"$http",
        function PictureDetailController($routeParams,$http) {
           // this.pictureId = $routeParams.pictureId;
            var self = this;
            $http.get("../picture/" + $routeParams.pictureId + ".json").then(function(responce){
                self.picture = responce.data;
            });

            self.getLike = function(){
                var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

                var xhr = new XHR();

// (2) запрос на другой домен :)
                xhr.open('GET', 'http://decortex.by/watch/index.php?getLike='+$routeParams.pictureId, true);

                xhr.onload = function() {
                    $('#likes').html(this.responseText);
                }

                xhr.onerror = function() {
                    alert( 'Ошибка ' + this.status );
                }

                xhr.send();
            }

            self.like = function(){
                var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

                var xhr = new XHR();

// (2) запрос на другой домен :)
                xhr.open('GET', 'http://decortex.by/watch/index.php?addLike='+$routeParams.pictureId, true);

                xhr.onload = function() {
                    if(this.responseText == 'error') {
                        alert('Невозможно поставить лайк, api недоступно!');
                    }
                }

                xhr.onerror = function() {
                    alert( 'Ошибка ' + this.status );
                }

                xhr.send();
                self.getLike();
            }
        }
    ]
});