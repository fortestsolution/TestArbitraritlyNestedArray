/// <reference path="../angular/angular.min.js" />

var app = angular.module('plutoQuiver', []);

app.controller("plutoQuiverControl", ['$scope', function ($scope) {
    $scope.header = {
        topbar: {
            name: "Keep In Touch",
            socials: [
                { style: "fa fa-facebook", url: "https://www.facebook.com/plutosolutons/" },
                { style: "fa fa-twitter", url: "#" },
                { style: "fa fa-linkedin", url: "#" },
                { style: "fa fa-skype", url: "#" },
            ]
        },
        navbar: {
            logo: {
                image: "/bootstrap/images/logo.png",
                url: "http://www.plutosols.com/"
            },
            beforeList: [
                { style: "active", url: "#", name: "Home" },
                { style: "", url: "#", name: "Portfolio" },
                { style: "", url: "#", name: "Services" }
            ],
            middleList: {
                name: "Products",
                products: [
                    { url: "#", name: "Blog Single" },
                    { url: "#", name: "Pricing" },
                    { url: "#", name: "404" },
                    { url: "#", name: "Shortcodes" }
                ]
            },
            afterList: [
                { style: "", url: "#", name: "Blog" },
                { style: "", url: "#", name: "Contact" },
            ]
        }
    }

    $scope.mainSlide = {
        slides: [
            {
                style: "item active",
                backgroundImage: "background-image: url(bootstrap/images/slider/quiver/bg1.jpg)",
                title: "Pluto Quiver is a mean stack application using mongodb, express, angular.js, node.js, and bootstrap also for developing responsive, mobile-first web sites.",
                subTitle: "Bootstrap is completely free to download and use!",
                button: {
                    text: "Read More",
                    url: "#"
                },
                image: "bootstrap/images/slider/quiver/img1.png"
            },
            {
                style: "item",
                backgroundImage: "background-image: url(bootstrap/images/slider/bg2.jpg)",
                title: "What is Responsive Web Design?",
                subTitle: "Responsive web design is about creating web sites which automatically adjust themselves to look good on all devices, from small phones to large desktops.",
                button: {
                    text: "Read More",
                    url: "#"
                },
                image: "bootstrap/images/slider/img2.png"
            },
            {
                style: "item",
                backgroundImage: "background-image: url(bootstrap/images/slider/bg3.jpg)",
                title: "In Bootstrap 3, mobile-first styles are part of the core framework",
                subTitle: "Bootstrap is completely free to download and use!",
                button: {
                    text: "Read More",
                    url: "#"
                },
                image: "bootstrap/images/slider/img3.png"
            }
        ]
    }

    $scope.features = {

    }
}]);