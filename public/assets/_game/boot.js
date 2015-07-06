(function (Adama,undefined){
    Adama.Boot = function(game){};
    Adama.Boot.prototype = {
        init: function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        },
        preload: function () {
            //  Here we load the assets required for our preloader (in this case a background and a loading bar)
            this.load.image('preloaderBackground', '../assets/_images/test/sky2.png');
            this.load.image('preloaderBar', '../assets/_images/test/helix.png');
        },
        create: function () {
            this.state.start('Preloader');
        }
    };
}(window.Adama = window.Adama || {}));