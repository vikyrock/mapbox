// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'imageupload',
    'ngMap',
    'internationalPhoneNumber',
    'jsonservicemod',
    'summernote',
    'datePicker',
    'angular-flot',
    'rzModule',
    'ngFileUpload'
])

//L.mapbox.accessToken = 'pk.eyJ1IjoibmFyZ2lzLXNoYWlraCIsImEiOiJjajVsMWdjbTgyN2t0MzBuejY0YWZvYnU1In0.sxNSmPeAZRDks6p3JmRUkw'
mapboxgl.accessToken = 'pk.eyJ1IjoidmlrYXMxOTk1IiwiYSI6ImNqaTVwcXoyczA3eHYzcXFsMjJ5NXp5bXIifQ.R5_yQEGIFuJHTtwc7_cqVw';

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session

    var tempateURL = 'views/login.html' // Default Template URL

    $httpProvider.defaults.withCredentials = true
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'headerctrl'
        })
        .state('login1', {
            url: '/login1/:userId',
            templateUrl: 'views/template.html',
            controller: 'login1ctrl'
        })

    .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/template.html',
        controller: 'DashboardCtrl'
    })

    .state('ticket-history', {
            url: '/ticket-history/:ticketId',
            templateUrl: 'views/template.html',
            controller: 'TicketHistoryCtrl'
        })
        .state('support', {
            url: '/support',
            templateUrl: 'views/template.html',
            controller: 'SupportCtrl'
        })
        .state('product-detail', {
            url: '/product-detail/:productId',
            templateUrl: 'views/template.html',
            controller: 'ProductDetailCtrl'
        })

    .state('missions', {
            url: '/missions',
            templateUrl: 'views/template.html',
            controller: 'MissionsCtrl'
        })
        .state('shipping', {
            url: '/shipping/:cadId',
            templateUrl: 'views/template.html',
            controller: 'ShippingCtrl'
        })

    .state('mission-details', {
            url: '/mission-details/:missionId',
            templateUrl: 'views/template.html',
            controller: 'MissionsDetailsCtrl'
        })
        .state('mail-detail', {
            url: '/mail-detail',
            templateUrl: 'views/template.html',
            controller: 'MailDetailCtrl'
        })
        .state('mail-compose', {
            url: '/mail-compose',
            templateUrl: 'views/template.html',
            controller: 'MailComposeCtrl'
        })

    .state('issue-tracker', {
            url: '/issue-tracker',
            templateUrl: 'views/template.html',
            controller: 'IssueTrackerCtrl'
        })
        .state('invoice-view', {
            url: '/invoice-view',
            templateUrl: 'views/template.html',
            controller: 'InvoiceViewCtrl'
        })
        .state('invoice', {
            url: '/invoice',
            templateUrl: 'views/template.html',
            controller: 'InvoiceCtrl'
        })
        .state('forgot-password', {
            url: '/forgot-password',
            templateUrl: 'views/template.html',
            controller: 'ForgotPasswordCtrl'
        })
        .state('create-mission', {
            url: '/create-mission',
            templateUrl: 'views/template.html',
            controller: 'CreatemissionCtrl'
        })
        .state('cadfile-request', {
            url: '/cadfile-request',
            templateUrl: 'views/template.html',
            controller: 'CadFileRequestCtrl'
        })
        .state('cadfile-details', {
            url: '/cadfile-details/:cadId',
            templateUrl: 'views/template.html',
            controller: 'CadfileDetailsCtrl'
        })
        .state('acc-and-sub', {
            url: '/acc-and-sub',
            templateUrl: 'views/template.html',
            controller: 'AccandSubCtrl'
        })
        .state('500', {
            url: '/500',
            templateUrl: 'views/template.html',
            controller: '500Ctrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'views/template.html',
            controller: '404Ctrl'
        })
        // <****************** for admin only ************>
        .state('users', {
            url: '/users',
            templateUrl: 'views/template.html',
            controller: 'UsersCtrl'
        })
        .state('ecommerce', {
            url: '/ecommerce',
            templateUrl: 'views/template.html',
            controller: 'EcommerceCtrl'
        })
        .state('products-plans', {
            url: '/products-plans',
            templateUrl: 'views/template.html',
            controller: 'ProductsPlansCtrl'
        })
        .state('edit-product', {
            url: '/edit-product/:productId',
            templateUrl: 'views/template.html',
            controller: 'EditProductCtrl'
        })
        .state('reports', {
            url: '/reports',
            templateUrl: 'views/template.html',
            controller: 'ReportsCtrl'
        })

    // ,************ common for vendor and admin **********
    .state('vendors', {
            url: '/vendors',
            templateUrl: 'views/template.html',
            controller: 'VendorsCtrl'
        })
        // ,************ common for vendor and admin **********
        .state('create-vendor', {
            url: '/create-vendor',
            templateUrl: 'views/template.html',
            controller: 'CreateVendorCtrl'
        })
        .state('add-product', {
            url: '/add-product',
            templateUrl: 'views/template.html',
            controller: 'AddProductCtrl'
        })
        .state('ecom-details', {
            url: '/ecom-details',
            templateUrl: 'views/template.html',
            controller: 'EcomDetailsCtrl'
        })

    .state('edit-vendor', {
        url: '/edit-vendor/:vendorId',
        templateUrl: 'views/template.html',
        controller: 'EditVendorCtrl'
    })

    .state('admin-profile', {
            url: '/admin-profile',
            templateUrl: 'views/template.html',
            controller: 'AdminProfileCtrl'
        })
        .state('support-details', {
            url: '/support-details/:ticketId',
            templateUrl: 'views/template.html',
            controller: 'SupportDetailsCtrl'
        })
        .state('user-details', {
            url: '/user-details/:userId',
            templateUrl: 'views/template.html',
            controller: 'UserDetailsCtrl'
        })
        // <****************** for admin only ************>
        // <****************** for vendor only ************>
        .state('billing', {
            url: '/billing',
            templateUrl: 'views/template.html',
            controller: 'BillingCtrl'
        })

    // <****************** for vendor only ************>
    $urlRouterProvider.otherwise('/login')
    $locationProvider.html5Mode(isproduction)
})

firstapp.directive('dateModel', function($filter, $timeout) {
    return {
        scope: {
            model: '=ngModel'
        },
        link: function($scope, element, attrs) {
            console.log('in date model')
            $timeout(function() {
                console.log($filter('date')(new Date($scope.model), 'dd/MM/yyyy'))
                $scope.model = new Date($scope.model)
            }, 100)
        }
    }
})

firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = ''
        if (width && width !== '') {
            other += '&width=' + width
        }
        if (height && height !== '') {
            other += '&height=' + height
        }
        if (style && style !== '') {
            other += '&style=' + style
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath + '?file=' + input + other
            } else {
                return input
            }
        }
    }
})

firstapp.filter('uploadpathlocal', function() {
    return function(input, width, height, style) {
        var other = ''
        if (width && width !== '') {
            other += '&width=' + width
        }
        if (height && height !== '') {
            other += '&height=' + height
        }
        if (style && style !== '') {
            other += '&style=' + style
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath1 + '?file=' + input + other
            } else {
                return input
            }
        }
    }
})
firstapp.filter('showdate', function() {
    return function(input) {
        return new Date(input)
    }
})

firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload)
            })
        }
    }
})

firstapp.directive('uploadImage', function($http, $filter, $timeout) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            type: '@type',
            callback: '&ngCallback'
        },
        link: function($scope, element, attrs) {
            $scope.showImage = function() {}
            $scope.check = true
            if (!$scope.type) {
                $scope.type = 'image'
            }
            $scope.isMultiple = false
            $scope.inObject = false
            if (attrs.multiple == 'true') {
                $scope.isMultiple = true
                $('#inputImage').attr('multiple', 'ADD')
            }
            if (attrs.noView || attrs.noView === '') {
                $scope.noShow = true
            }
            // if (attrs.required) {
            //     $scope.required = true
            // } else {
            //     $scope.required = false
            // }

            $scope.$watch('image', function(newVal, oldVal) {
                isArr = _.isArray(newVal)
                if (!isArr && newVal && newVal.file) {
                    $scope.uploadNow(newVal)
                } else if (isArr && newVal.length > 0 && newVal[0].file) {
                    $timeout(function() {
                        _.each(newVal, function(newV, key) {
                            if (newV && newV.file) {
                                $scope.uploadNow(newV)
                            }
                        })
                    }, 100)
                }
            })

            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = []
                    _.each($scope.model, function(n) {
                        $scope.image.push({
                            url: n
                        })
                    })
                } else {
                    if (_.endsWith($scope.model, '.pdf')) {
                        $scope.type = 'pdf'
                    }
                }
            }
            if (attrs.inobj || attrs.inobj === '') {
                $scope.inObject = true
            }
            $scope.clearOld = function() {
                $scope.model = []
                $scope.uploadStatus = 'removed'
            }
            $scope.removeImage = function(index) {
                $scope.image = []
                $scope.model.splice(index, 1)
                _.each($scope.model, function(n) {
                    $scope.image.push({
                        url: n
                    })
                })
            }
            $scope.uploadNow = function(image) {
                $scope.uploadStatus = 'uploading'

                var Template = this
                image.hide = true
                var formData = new FormData()
                formData.append('file', image.file, image.file.name)
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).then(function(data) {
                    data = data.data
                    $scope.uploadStatus = 'uploaded'
                    if ($scope.isMultiple) {
                        if ($scope.inObject) {
                            $scope.model.push({
                                'image': data.data[0]
                            })
                        } else {
                            if (!$scope.model) {
                                $scope.clearOld()
                            }
                            $scope.model.push(data.data[0])
                        }
                    } else {
                        if (_.endsWith(data.data[0], '.pdf')) {
                            $scope.type = 'pdf'
                        } else {
                            $scope.type = 'image'
                        }
                        $scope.model = data.data[0]
                    }
                    $timeout(function() {
                        $scope.callback()
                    }, 100)
                })
            }
        }
    }
})

firstapp.directive('uploadImageFiles', function($http, $filter, $timeout, $state) {
    return {
        templateUrl: 'views/directive/uploadImageFiles.html',
        scope: {
            model: '=ngModel',
            type: '@type',
            callback: '&ngCallback'
        },
        link: function($scope, element, attrs) {
            $scope.showImage = function() {}
            $scope.check = true
            if (!$scope.type) {
                $scope.type = 'image'
            }
            $scope.isMultiple = false
            $scope.inObject = false
            if (attrs.multiple == 'true') {
                $scope.isMultiple = true
                $('#inputImage').attr('multiple', 'ADD')
            }
            if (attrs.noView || attrs.noView === '') {
                $scope.noShow = true
            }
            // if (attrs.required) {
            //     $scope.required = true
            // } else {
            //     $scope.required = false
            // }
            $scope.$watch('image', function(newVal, oldVal) {
                isArr = _.isArray(newVal)
                if (!isArr && newVal && newVal.file) {
                    $('.loading-img').css('display', 'block')
                    $('.loading-img-modal').css('display', 'block')

                    $scope.uploadNow(newVal)
                } else if (isArr && newVal.length > 0 && newVal[0].file) {
                    if (newVal.length > 0) {
                        var countForm = {}
                        countForm.user = $scope.$parent.profile._id
                            // console.log("$scope.$parent.profile", $scope.$parent.profile)
                        var currentSubscriptionForm = {}
                        currentSubscriptionForm._id = $scope.$parent.profile.currentSubscription
                        $http.post(adminurl + 'DFMSubscription/getOne', currentSubscriptionForm).then(function(currentSubscription) {
                            currentSubscription = currentSubscription.data.data
                            console.log('currentSubscription', currentSubscription)
                            countForm.currentSubscriptionDate = currentSubscription.createdAt
                            if (_.isEqual(currentSubscription.status, 'Active')) {
                                console.log('111111')
                                $http.post(adminurl + 'Mission/totalMissionCount', countForm).then(function(data) {
                                    console.log('2222', data)

                                    if (data.data.value == true) {
                                        var missionData = data.data.data
                                        console.log('newVal.length', newVal.length)
                                        missionData.fileSize = missionData.fileSize + newVal.length
                                        var currentSub = currentSubscription
                                        var sizeLimit = currentSub.UploadSize.trim()
                                        sizeLimit = sizeLimit.substring(0, sizeLimit.length - 2)
                                        var uploadSize = 0
                                        uploadSize = _.sumBy(newVal, function(o) {
                                            return o.file.size
                                        })
                                        console.log('_.sumBy(objects)----->>>>', uploadSize)
                                        var usedSize = missionData.folderSize
                                        usedSize = usedSize.split(' ')[0]
                                        if (uploadSize > 0) {
                                            usedSize = Number(usedSize) + Number(uploadSize / 1000000000).toFixed(8)
                                        }
                                        console.log('sizeLimit missionData.fileSize', missionData.fileSize, '------------->>>>>', usedSize, Number(currentSub.UploadPhoto) < Number(missionData.fileSize), Number(sizeLimit) < Number(usedSize), Number(currentSub.missions) <= Number(missionData.missionCount))
                                        if (Number(currentSub.UploadPhoto) <= Number(missionData.fileSize) || Number(sizeLimit) <= Number(usedSize) || Number(currentSub.missions) <= Number(missionData.missionCount)) {
                                            console.log('data-----count---...', currentSub.UploadPhoto, missionData)
                                            $('#myAlertModal').modal()
                                        } else {
                                            $('.loading-img').css('display', 'block')
                                            $('.loading-img-modal').css('display', 'block')
                                            $timeout(function() {
                                                async.eachLimit(newVal, 1, function(image, callback) {
                                                        // Perform operation on file here.
                                                        console.log('Processing file ---->>>', image)
                                                        if (image && image.file) {
                                                            $scope.fileprogressbar = 0
                                                            $scope.uploadStatus = 'uploading'

                                                            var Template = this
                                                            image.hide = true
                                                            var formData = new FormData()
                                                            formData.append('file', image.file, image.file.name)
                                                            $http.post(missionFileUrl, formData, {
                                                                headers: {
                                                                    'Content-Type': undefined
                                                                },
                                                                transformRequest: angular.identity,
                                                                uploadEventHandlers: {
                                                                    progress: function(e) {
                                                                        // console.log(e.loaded * 100 / e.total)
                                                                        $scope.fileprogressbar = parseInt((e.loaded / e.total) * 100) // percentage of progress
                                                                    }
                                                                }

                                                            }).then(function(data) {
                                                                data = data.data
                                                                $scope.uploadStatus = 'uploaded'
                                                                $('.loading-img').css('display', 'none')
                                                                $('.loading-img-modal').css('display', 'none')

                                                                if ($scope.isMultiple) {
                                                                    if ($scope.inObject) {
                                                                        $scope.model.push({
                                                                            'image': data.data[0]
                                                                        })
                                                                        callback(null, 'next')
                                                                    } else {
                                                                        if (!$scope.model) {
                                                                            $scope.clearOld()
                                                                        }
                                                                        var fileList = {}
                                                                        fileList.file = data.data[0]
                                                                        $scope.model.push(fileList)
                                                                        callback(null, 'next')
                                                                        $scope.imgGrp()
                                                                    }
                                                                } else {
                                                                    if (_.endsWith(data.data[0], '.pdf')) {
                                                                        $scope.type = 'pdf'
                                                                    } else {
                                                                        $scope.type = 'image'
                                                                    }
                                                                    var fileList = {}
                                                                    fileList.file = data.data[0]
                                                                    $scope.model = fileList
                                                                    callback(null, 'next')
                                                                }
                                                            })
                                                        } else {
                                                            callback(null, 'next')
                                                        }
                                                    }, function(err) {
                                                        // if any of the file processing produced an error, err would equal that error
                                                        if (err) {
                                                            // One of the iterations produced an error.
                                                            // All processing will now stop.
                                                            console.log('A file failed to process')
                                                        } else {
                                                            console.log('All files have been processed successfully')
                                                            if ($scope.$parent.mission) {
                                                                console.log($scope.$parent.mission, $scope.$parent.profile)
                                                                if ($scope.$parent.mission.selected == true && $scope.$parent.mission.name) {
                                                                    $scope.$parent.mission.user = $scope.$parent.profile._id
                                                                    $scope.$parent.mission.DFMSubscription = currentSubscriptionForm._id
                                                                    console.log($scope.$parent.mission.DFMSubscription)
                                                                    $http.post(adminurl + 'Mission/createMission', $scope.$parent.mission).then(function(data) {
                                                                        console.log("data", data)
                                                                        data = data.data
                                                                        console.log('missionCreated', $state.$current.name)
                                                                        $state.go('missions')
                                                                    })
                                                                } else {
                                                                    $('#noNameAlertModal').modal()
                                                                }
                                                            }
                                                        }
                                                    })
                                                    // _.each(newVal, function (newV, key) {
                                                    //     if (newV && newV.file) {
                                                    //         $scope.uploadNow(newV)
                                                    //     }
                                                    // })
                                            }, 15000)
                                        }
                                    } else {
                                        $('#myAlertModal').modal()
                                    }
                                })
                            } else {
                                $('#myAlertModal').modal()
                            }
                        })
                    }
                }
            })

            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = []
                    _.each($scope.model, function(n) {
                        $scope.image.push({
                            url: n
                        })
                    })
                } else {
                    if (_.endsWith($scope.model, '.pdf')) {
                        $scope.type = 'pdf'
                    }
                }
            }
            if (attrs.inobj || attrs.inobj === '') {
                $scope.inObject = true
            }
            $scope.clearOld = function() {
                $scope.model = []
                $scope.uploadStatus = 'removed'
            }
            $scope.removeImage = function(index) {
                $scope.image = []
                $scope.model.splice(index, 1)
                _.each($scope.model, function(n) {
                    $scope.image.push({
                        url: n
                    })
                })
            }

            $scope.uploadNow = function(image) {
                $scope.fileprogressbar = 0
                $scope.uploadStatus = 'uploading'
                var Template = this
                image.hide = true
                var formData = new FormData()
                formData.append('file', image.file, image.file.name)
                $http.post(missionFileUrl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity,
                    uploadEventHandlers: {
                        progress: function(e) {
                            console.log(e.loaded * 100 / e.total)
                            $scope.fileprogressbar = parseInt((e.loaded / e.total) * 100) // percentage of progress
                        }
                    }
                }).then(function(data) {
                    data = data.data
                    $('.loading-img').css('display', 'none')
                    $('.loading-img-modal').css('display', 'none')
                    $scope.uploadStatus = 'uploaded'
                    if ($scope.isMultiple) {
                        if ($scope.inObject) {
                            $scope.model.push({
                                'image': data.data[0]
                            })
                        } else {
                            if (!$scope.model) {
                                $scope.clearOld()
                            }
                            var fileList = {}
                            fileList.file = data.data[0]
                            $scope.model.push(fileList)
                        }
                    } else {
                        if (_.endsWith(data.data[0], '.pdf')) {
                            $scope.type = 'pdf'
                        } else {
                            $scope.type = 'image'
                        }
                        var fileList = {}
                        fileList.file = data.data[0]
                        $scope.model = fileList
                    }
                    $timeout(function() {
                        $scope.callback()
                    }, 15000)
                })
            }

            $scope.imgGrp = function() {
                $scope.length_img = $scope.model.length
                $scope.display_img = $scope.length_img
                $scope.display_img = $scope.display_img / 11
                $scope.display_img = Math.ceil($scope.display_img)
                console.log('qwerty', $scope.display_img)
                $scope.getNumber = function(num) {
                    return new Array(num)
                }
                if ($scope.length_img > 0) {
                    $scope.see = $scope.model.slice(0, 11)
                    $scope.pageNumber = 1
                }
            }
            $scope.changePage = function(pageNo) {
                $scope.pageNumber = pageNo
                if (pageNo == 1) {
                    console.log('1st page', pageNo)
                    $scope.see = $scope.model.slice(0, 11)
                } else {
                    console.log('pageNo', pageNo)
                    $scope.answer = (pageNo - 1) * 11
                    $scope.multiplication = (11 * pageNo)
                    $scope.see = $scope.model.slice($scope.answer, $scope.multiplication)
                }
            }
            $scope.changePagefirst = function() {
                $scope.see = $scope.model.slice(0, 11)
                $scope.pageNumber = 1
            }
            $scope.changePagelast = function() {
                $scope.answer = ($scope.display_img - 1) * 11
                $scope.multiplication = (11 * $scope.display_img)
                $scope.see = $scope.model.slice($scope.answer, $scope.multiplication)
                $scope.pageNumber = $scope.display_img
            }
            $scope.changePagePre = function() {
                if ($scope.pageNumber == 1) {
                    $scope.pageNumber = $scope.display_img + 1
                }
                $scope.answer = (($scope.pageNumber - 2) * 11)
                $scope.multiplication = (11 * ($scope.pageNumber - 1))
                $scope.see = $scope.model.slice($scope.answer, $scope.multiplication)
                $scope.pageNumber = $scope.pageNumber - 1
            }
            $scope.changePageNext = function() {
                if ($scope.pageNumber == $scope.display_img) {
                    $scope.pageNumber = 0
                }
                $scope.answer = ($scope.pageNumber * 11)
                $scope.multiplication = (11 * ($scope.pageNumber + 1))
                $scope.see = $scope.model.slice($scope.answer, $scope.multiplication)
                $scope.pageNumber = $scope.pageNumber + 1
            }
        },
        controller: function($scope) {
            // here you can access the controller scope by using $parent
        }
    }
})

firstapp.directive('onlyDigits', function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {
            var digits

            function inputValue(val) {
                if (val) {
                    var otherVal = val + ''
                    if (attr.type == 'text') {
                        digits = otherVal.replace(/[^0-9\-\.\\]/g, '')
                    } else {
                        digits = otherVal.replace(/[^0-9\-\.\\]/g, '')
                    }

                    if (digits !== val) {
                        ctrl.$setViewValue(digits)
                        ctrl.$render()
                    }
                    return parseInt(digits, 10)
                }
                return undefined
            }
            ctrl.$parsers.push(inputValue)
        }
    }
})

firstapp.filter('propsFilter', function() {
    return function(items, props) {
        var out = []

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false

                var keys = Object.keys(props)
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i]
                    var text = props[prop].toLowerCase()
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true
                        break
                    }
                }

                if (itemMatches) {
                    out.push(item)
                }
            })
        } else {
            // Let the output be the input untouched
            out = items
        }

        return out
    }
})

firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element)
            if (!attrs.noloading) {
                // $element.after("<img src='img/loading.gif' class='loading' />")
                var $loading = $element.next('.loading')
                $element.load(function() {
                    $loading.remove()
                    $(this).addClass('doneLoading')
                })
            } else {
                $($element).addClass('doneLoading')
            }
        }
    }
})

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element)
            var target
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']")
            } else {
                target = element
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            })
        }
    }
})

firstapp.directive('menuOptions', function($document) {
    return {
        restrict: 'C',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element)
            $(element).on('click', function() {
                $('.side-header.opened-menu').toggleClass('slide-menu')
                $('.main-content').toggleClass('wide-content')
                $('footer').toggleClass('wide-footer')
                $('.menu-options').toggleClass('active')
                $('.top-bar').toggleClass('top-add')
            })
        }
    }
})

firstapp.filter('serverimage', function() {
    return function(input, width, height, style) {
        if (input) {
            if (input.substr(0, 4) == 'http') {
                return input
            } else {
                image = imgpath + '?file=' + input
                if (width) {
                    image += '&width=' + width
                }
                if (height) {
                    image += '&height=' + height
                }
                if (style) {
                    image += '&style=' + style
                }
                return image
            }
        } else {
            return 'img/123.png'
        }
    }
})

firstapp.filter('convDate', function() {
    return function(input) {
        return new Date(input)
    }
})

firstapp.filter('downloadImage', function() {
    return function(input) {
        if (input) {
            return adminurl + 'download/' + input
        } else {
            return 'img/123.png'
        }
    }
})

firstapp.directive('oI', function($document) {
    return {
        restrict: 'C',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element)
            $element.click(function() {
                $element.parent().siblings().children('ul').slideUp()
                $element.parent().siblings().removeClass('active')
                $element.parent().children('ul').slideToggle()
                $element.parent().toggleClass('active')
                return false
            })
        }
    }
})
firstapp.directive('slimscroll', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element)
            $element.slimScroll({
                height: '400px',
                wheelStep: 10,
                size: '2px'
            })
        }
    }
})

firstapp.directive('addressForm', function($document) {
    return {
        templateUrl: 'views/directive/address-form.html',
        scope: {
            formData: '=ngModel',
            demoForm: '=ngValid'
        },
        restrict: 'EA',
        replace: false,
        controller: function($scope, NgMap, NavigationService) {
            $scope.map = {}
            $scope.change = function() {
                NgMap.getMap().then(function(map) {
                    var latLng = {
                        lat: map.markers[0].position.lat(),
                        lng: map.markers[0].position.lng()
                    }
                    _.assign($scope.formData, latLng)
                })
            }
            var LatLongi = 0
            $scope.getLatLng = function(address) {
                NavigationService.getLatLng(address, ++LatLongi, function(data, i) {
                        if (i == LatLongi) {
                            $scope.formData = _.assign($scope.formData, data.results[0].geometry.location)
                        }
                    })
                    // $http.get("http://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCn9ypqFNxdXt9Zu2YqLcdD1Xdt2wNul9s&address="+address)
            }
        }

    }
})

var aa = {}
firstapp.directive('multipleSelect', function($document, $timeout) {
    return {
        templateUrl: 'views/directive/multiple-select.html',
        scope: {
            model: '=ngModel',
            api: '@api',
            url: '@url',
            name: '@name',
            required: '@required',
            filter: '@filter',
            ngName: '=ngName',
            create: '@ngCreate',
            disabled: '=ngDisabled'

        },
        restrict: 'EA',
        replace: false,
        controller: 'MultipleSelectCtrl',
        link: function(scope, element, attr, NavigationService) {
            var $element = $(element)
            scope.activeKey = 0
            scope.isRequired = true
            if (scope.required === undefined) {
                scope.isRequired = false
            }
            scope.typeselect = attr.typeselect
                // $scope.searchNew()
            aa = $element
            var maxItemLength = 40
            var maxBoxLength = 200
            $timeout(function() {
                $element.find('.typeText').keyup(function(event) {
                    var scrollTop = $element.find('ul.allOptions').scrollTop()
                    var optionLength = $element.find('ul.allOptions li').length
                    if (event.keyCode == 40) {
                        scope.activeKey++
                    } else if (event.keyCode == 38) {
                        scope.activeKey--
                    } else if (event.keyCode == 13) {
                        $element.find('ul.allOptions li').eq(scope.activeKey).trigger('click')
                    }
                    if (scope.activeKey < 0) {
                        scope.activeKey = optionLength - 1
                    }
                    if (scope.activeKey >= optionLength) {
                        scope.activeKey = 0
                    }
                    var newScroll = -1
                    var scrollVisibility = (scrollTop + maxBoxLength) - maxItemLength
                    var currentItemPosition = scope.activeKey * maxItemLength
                    if (currentItemPosition < scrollTop) {
                        newScroll = (maxItemLength * scope.activeKey)
                    } else if (currentItemPosition > scrollVisibility) {
                        newScroll = (maxItemLength * scope.activeKey)
                    }
                    if (newScroll != -1) {
                        $element.find('ul.allOptions').scrollTop(newScroll)
                    }

                    scope.$apply()
                })
            }, 100)
        }
    }
})

firstapp.filter('ageFilter', function() {
    function calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime()
        var ageDate = new Date(ageDifMs) // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    return function(birthdate) {
        return calculateAge(birthdate)
    }
})

firstapp.filter('html', ['$sce', function($sce) {
    return function(text) {
        return $sce.trustAsHtml(text)
    }
}])

firstapp.filter('momentDate', function() {
    return function(date, format) {
        if (!format) {
            format = 'Do MMM YYYY, ddd'
        }
        return moment(date).format(format)
    }
})
firstapp.filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/
        return (!!input) ? input.replace(reg, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }) : ''
    }
})

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish)
    $translateProvider.translations('hi', LanguageHindi)
    $translateProvider.preferredLanguage('en')
})

firstapp.directive('viewField', function($http, $filter) {
    return {
        templateUrl: 'views/directive/viewField.html',
        scope: {
            type: '=type',
            value: '=value'
        },
        link: function($scope, element, attrs) {
            if (!$scope.type.type) {
                $scope.type.type = 'text'
            }
            $scope.form = {}
            $scope.objectDepth = function() {
                if (_.isObjectLike($scope.storeObj)) {
                    if ($scope.storeValue[$scope.storeObj.field]) {
                        $scope.form.model = $scope.storeValue[$scope.storeObj.field][$scope.storeObj.tableRef]
                        $scope.storeObj = $scope.storeObj.tableRef
                        if (_.isObjectLike($scope.storeObj)) {
                            $scope.objectDepth()
                        }
                    }
                }
            }
            if (_.isObjectLike($scope.type.tableRef)) {
                $scope.storeObj = $scope.type.tableRef
                $scope.storeValue = $scope.value
                $scope.objectDepth()
            } else {
                $scope.form.model = $scope.value[$scope.type.tableRef]
            }

            $scope.template = 'views/viewField/' + $scope.type.type + '.html'
        }
    }
})
firstapp.directive('dateForm', function() {
    return {
        scope: {
            ngModel: '=ngModel'
        },
        link: function($scope, element, attrs) {
            console.log($scope.ngModel)
        }
    }
})

firstapp.directive('detailField', function($http, $filter, JsonService) {
    return {
        templateUrl: 'views/directive/detailField.html',
        scope: {
            type: '=type',
            value: '=value',
            detailForm: '=form',
            formData: '=data'

        },
        controller: 'DetailFieldCtrl',
        link: function($scope, element, attrs) {}
    }
})

firstapp.filter('urlencoder', function() {
    return function(input) {
        return window.encodeURIComponent(input)
    }
})

firstapp.directive('ngFiles', ['$parse', function($parse) {
    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles)
        element.on('change', function(event) {
            onChange(scope, {
                $files: event.target.files
            })
        })
    }

    return {
        link: fn_link
    }
}])

firstapp.directive('mapBox', function($http, $filter, JsonService, $rootScope, $uibModal) {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            console.log('in tthe mapbox function')
            var locations = {}
                // console.log('mission details nad mission id for mapbox', $scope.missionDetails)
            if ($scope.missionDetails && $scope.missionDetails.missionId) {
                locations = $scope.missionDetails.geoLocation
                console.log('$scope.missionDetails', $scope.missionDetails)
                console.log('in mapbox directive>>>missions dtails', locations)
            } else if ($scope.cadLineDetails) {
                locations = $scope.cadLineDetails.geoLocation
                console.log('in mapbox directive>>>cadline work details', locations)
            } else {
                locations = {
                    upperLeft: [32.77840210218494, -117.23545173119574],
                    lowerLeft: [32.77740264966007, -117.23544909909386],
                    upperRight: [32.77840829977591, -117.23213078512207],
                    lowerRight: [32.77740884701485, -117.23212819014402],
                    center: [-117.23378995150006, 32.77790548568292]
                }
            }
            console.log('final locations', locations)
            var uL = locations.upperLeft.reverse();
            var lL = locations.lowerLeft.reverse();
            var uR = locations.upperRight.reverse();
            var lR = locations.lowerRight.reverse();

            console.log('ul', uL)
            var geojson = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "properties": {},
                        "coordinates": [
                            uL,
                            lL,
                            uR,
                            lR
                        ]
                    }
                }]
            };


            var imageUrl
            var zoomLevel = []
            if ($scope.missionDetails && $scope.missionDetails.missionId) {
                console.log('$scope.missionDetails.name', $scope.missionDetails)
                imageUrl = realhosturl + '/orthoFiles/' + $scope.missionDetails.missionId + 'google_tiles/{z}/{x}/{y}.png'
                    //imageUrl = realhosturl + '/' + $scope.missionDetails._id + '/' + $scope.missionDetails.missionId + '/3_dsm_ortho/2_mosaic/google_tiles/{z}/{x}/{y}.png'
                console.log('111111111111111111111111111', imageUrl)
                zoomLevel.push($scope.missionDetails.zoomLevel[0])
                zoomLevel.push($scope.missionDetails.zoomLevel[$scope.missionDetails.zoomLevel.length - 1])
                    // imageUrl = 'http://localhost:1337/google_tiles/{z}/{x}/{myY}.png'
            } else if ($scope.cadLineDetails && $scope.cadLineDetails.orthoFile.file) {
                // imageUrl = 'http://localhost:1337/5a0a8c4cda0e182241afa514.jpg'
                // imageUrl = 'http://localhost:1337/' + $scope.cadLineDetails.orthoFile.file.split(".")[0] + '.jpg'
                imageUrl = realhosturl + '/orthoFiles/' + $scope.cadLineDetails.orthoFile.file.split('.')[0] + '.jpg'
                console.log('22222222222222222222222222222222222', imageUrl)
                zoomLevel = [16, 21]
            } else if ($scope.cadLineDetails && $scope.cadLineDetails.mission) {
                // imageUrl = 'http://localhost:1337/google_tiles/{z}/{x}/{myY}.png'
                imageUrl = realhosturl + '/orthoFiles/' + $scope.cadLineDetails.mission.missionId + 'google_tiles/{z}/{x}/{myY}.png'
                zoomLevel.push($scope.cadLineDetails.mission.zoomLevel[0])
                zoomLevel.push($scope.cadLineDetails.mission.zoomLevel[$scope.cadLineDetails.mission.zoomLevel.length - 1])
                console.log('33333333333333333333333333333333333', imageUrl)
                    // imageUrl = 'http://35.194.248.13:80/google_tiles/{z}/{x}/{myY}.png'
            }
            console.log('zooooommmmmmm levellllllllllllllll', zoomLevel)
                // This is the trickiest part - you'll need accurate coordinates for the
                // corners of the image. You can find and create appropriate values at
                // http://maps.nypl.org/warper/ or
                // http://www.georeferencer.org/

            var latlngs
            if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.points)) {
                latlngs = [
                    $scope.cadLineDetails.points[0]
                ]
            }
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
                infoControl: false,
                attributionControl: false,
                //center: [-74.50, 40], // starting position [lng, lat]
                maxZoom: zoomLevel[1],
                minZoom: zoomLevel[0]
            })

            if (!_.isEmpty(locations)) {
                var coordinates = geojson.features[0].geometry.coordinates;
                console.log('cordinates', coordinates);
                // Pass the first coordinates in the LineString to `lngLatBounds` &
                // wrap each coordinate pair in `extend` to include them in the bounds
                // result. A variation of this technique could be applied to zooming
                // to the bounds of multiple Points or Polygon geomteries - it just
                // requires wrapping all the coordinates with the extend method.
                var bounds = coordinates.reduce(function(bounds, coord) {
                    return bounds.extend(coord);
                }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
            }
            console.log('boundssssssss111 s', bounds)

            map.fitBounds(bounds, {
                padding: 20
            });
            map.on('style.load', function() {
                if (($scope.missionDetails && $scope.missionDetails.missionId) || $scope.cadLineDetails.mission) {
                    console.log('heere is the main function problem is ____________________________________')
                    map.addLayer({
                        id: 'raster-layer',
                        type: 'raster',
                        source: {
                            type: 'raster',
                            tiles: [imageUrl],
                            "scheme": "tms",
                            maxZoom: zoomLevel[1],
                            minZoom: zoomLevel[0]
                        },
                    });
                }
            });


            map.on('load', function() {
                    /*  if (($scope.missionDetails && $scope.missionDetails.missionId) || $scope.cadLineDetails.mission) {
                         console.log('heere is the main function problem is ____________________________________')
                         map.addLayer({
                             id: 'raster-layer',
                             type: 'raster',
                             source: {
                                 type: 'raster',
                                 tiles: [imageUrl],
                                 "scheme": "tms",
                                 maxZoom: zoomLevel[1],
                                 minZoom: zoomLevel[0]
                             },
                         });
                     } */


                    if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.geoLocation) && !$scope.cadLineDetails.mission) {

                        map.addLayer({
                            "id": "image-overlay",
                            "source": {
                                "type": "image",
                                "url": imageUrl,
                                "coordinates": coordinates
                            },
                            "type": "raster"
                        })

                    }
                    var draw = new MapboxDraw({
                        displayControlsDefault: false,
                        controls: {
                            polygon: true,
                            trash: true,
                        },
                        styles: [
                            // ACTIVE (being drawn)
                            // line stroke
                            {
                                'id': 'gl-draw-polygon-fill-inactive',
                                'type': 'fill',
                                'filter': ['all', ['==', 'active', 'false'],
                                    ['==', '$type', 'Polygon'],
                                    ['!=', 'mode', 'static']
                                ],
                                'paint': {
                                    'fill-color': '#3bb2d0',
                                    'fill-outline-color': '#3bb2d0',
                                    'fill-opacity': 0.1
                                }
                            }, {
                                'id': 'gl-draw-polygon-fill-active',
                                'type': 'fill',
                                'filter': ['all', ['==', 'active', 'true'],
                                    ['==', '$type', 'Polygon']
                                ],
                                'paint': {
                                    'fill-color': '#fbb03b',
                                    'fill-outline-color': '#fbb03b',
                                    'fill-opacity': 0.1
                                }
                            }, {
                                'id': 'gl-draw-polygon-midpoint',
                                'type': 'circle',
                                'filter': ['all', ['==', '$type', 'Point'],
                                    ['==', 'meta', 'midpoint']
                                ],
                                'paint': {
                                    'circle-radius': 4,
                                    'circle-color': '#fbb03b'
                                }
                            }, {
                                'id': 'gl-draw-polygon-stroke-inactive',
                                'type': 'line',
                                'filter': ['all', ['==', 'active', 'false'],
                                    ['==', '$type', 'Polygon'],
                                    ['!=', 'mode', 'static']
                                ],
                                'layout': {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                'paint': {
                                    'line-color': '#3bb2d0',
                                    'line-width': 3
                                }
                            }, {
                                'id': 'gl-draw-polygon-stroke-active',
                                'type': 'line',
                                'filter': ['all', ['==', 'active', 'true'],
                                    ['==', '$type', 'Polygon']
                                ],
                                'layout': {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                'paint': {
                                    'line-color': '#fbb03b',
                                    'line-dasharray': [0.2, 2],
                                    'line-width': 3
                                }
                            }, {
                                'id': 'gl-draw-line-inactive',
                                'type': 'line',
                                'filter': ['all', ['==', 'active', 'false'],
                                    ['==', '$type', 'LineString'],
                                    ['!=', 'mode', 'static']
                                ],
                                'layout': {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                'paint': {
                                    'line-color': '#3bb2d0',
                                    'line-width': 3
                                }
                            }, {
                                'id': 'gl-draw-line-active',
                                'type': 'line',
                                'filter': ['all', ['==', '$type', 'LineString'],
                                    ['==', 'active', 'true']
                                ],
                                'layout': {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                'paint': {
                                    'line-color': '#fbb03b',
                                    'line-dasharray': [0.2, 2],
                                    'line-width': 3
                                }
                            }, {
                                'id': 'gl-draw-polygon-and-line-vertex-stroke-inactive',
                                'type': 'circle',
                                'filter': ['all', ['==', 'meta', 'vertex'],
                                    ['==', '$type', 'Point'],
                                    ['!=', 'mode', 'static']
                                ],
                                'paint': {
                                    'circle-radius': 6,
                                    'circle-color': '#fff'
                                }
                            }, {
                                'id': 'gl-draw-polygon-and-line-vertex-inactive',
                                'type': 'circle',
                                'filter': ['all', ['==', 'meta', 'vertex'],
                                    ['==', '$type', 'Point'],
                                    ['!=', 'mode', 'static']
                                ],
                                'paint': {
                                    'circle-radius': 4,
                                    'circle-color': '#fbb03b'
                                }
                            }, {
                                'id': 'gl-draw-point-point-stroke-inactive',
                                'type': 'circle',
                                'filter': ['all', ['==', 'active', 'false'],
                                    ['==', '$type', 'Point'],
                                    ['==', 'meta', 'feature'],
                                    ['!=', 'mode', 'static']
                                ],
                                'paint': {
                                    'circle-radius': 6,
                                    'circle-opacity': 1,
                                    'circle-color': '#fff'
                                }
                            }, {
                                'id': 'gl-draw-point-inactive',
                                'type': 'circle',
                                'filter': ['all', ['==', 'active', 'false'],
                                    ['==', '$type', 'Point'],
                                    ['==', 'meta', 'feature'],
                                    ['!=', 'mode', 'static']
                                ],
                                'paint': {
                                    'circle-radius': 4,
                                    'circle-color': '#3bb2d0'
                                }
                            }, {
                                'id': 'gl-draw-point-stroke-active',
                                'type': 'circle',
                                'filter': ['all', ['==', '$type', 'Point'],
                                    ['==', 'active', 'true'],
                                    ['!=', 'meta', 'midpoint']
                                ],
                                'paint': {
                                    'circle-radius': 8,
                                    'circle-color': '#fff'
                                }
                            }, {
                                'id': 'gl-draw-point-active',
                                'type': 'circle',
                                'filter': ['all', ['==', '$type', 'Point'],
                                    ['!=', 'meta', 'midpoint'],
                                    ['==', 'active', 'true']
                                ],
                                'paint': {
                                    'circle-radius': 6,
                                    'circle-color': '#fbb03b'
                                }
                            }, {
                                'id': 'gl-draw-polygon-fill-static',
                                'type': 'fill',
                                'filter': ['all', ['==', 'mode', 'static'],
                                    ['==', '$type', 'Polygon']
                                ],
                                'paint': {
                                    'fill-color': '#404040',
                                    'fill-outline-color': '#404040',
                                    'fill-opacity': 0.1
                                }
                            }, {
                                'id': 'gl-draw-polygon-stroke-static',
                                'type': 'line',
                                'filter': ['all', ['==', 'mode', 'static'],
                                    ['==', '$type', 'Polygon']
                                ],
                                'layout': {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                'paint': {
                                    'line-color': '#404040',
                                    'line-width': 3
                                }
                            }, {
                                'id': 'gl-draw-line-static',
                                'type': 'line',
                                'filter': ['all', ['==', 'mode', 'static'],
                                    ['==', '$type', 'LineString']
                                ],
                                'layout': {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                'paint': {
                                    'line-color': '#404040',
                                    'line-width': 3
                                }
                            }, {
                                'id': 'gl-draw-point-static',
                                'type': 'circle',
                                'filter': ['all', ['==', 'mode', 'static'],
                                    ['==', '$type', 'Point']
                                ],
                                'paint': {
                                    'circle-radius': 6,
                                    'circle-color': '#404040'
                                }
                            },
                        ]
                    })
                    map.addControl(draw);

                    map.on('draw.create', updateArea);
                    map.on('draw.delete', updateArea);
                    map.on('draw.update', updateArea);
                    var acres

                    function updateArea(e) {
                        console.log('e.type', e.type)
                        var data = draw.getAll();
                        var answer = document.getElementById('calculated-area');
                        console.log('data.featuews', data.features)
                        if (data.features.length > 0) {

                            var area = turf.area(data);
                            // restrict to area to 2 decimal points
                            var rounded_area = Math.round(area * 100) / 100;
                            answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
                            acres = rounded_area * 0.00024711;
                            console.log('area in acres', acres)

                            if ($scope.cadLineDetails) {
                                console.log('$scope.cadLineDetails', $scope.cadLineDetails)
                                $scope.cadLineDetails.acreage = Number(acres).toFixed(2)

                                $scope.cadreq = function() {
                                    // $scope.cadLineDetails.points = e.layer._latlngs //comments by vikas
                                    // $("#myModal").modal()
                                    $('#myModal').on('show.bs.modal', function() {
                                        console.log('inside modal')
                                        $('#acreage').val(Number(acres).toFixed(2))
                                    }).modal('show')
                                }
                            }
                        } else {

                            answer.innerHTML = '';
                            if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
                        }
                    }

                    var layerList = document.getElementById('menu');
                    var inputs = layerList.getElementsByTagName('input');



                    function switchLayer(layer) {
                        var layerId = layer.target.id;
                        map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
                    }

                    for (var i = 0; i < inputs.length; i++) {
                        inputs[i].onclick = switchLayer;
                    }
                    //map.addControl(new mapboxgl.Directions());
                    map.on('load', function() {
                        console.log('cnjdncjdncjds923812jndu802n282332u822')
                        map.addControl(new mapboxgl.NavigationControl());
                    })
                })
                ///////////////////////////////////////////////till here waas working

            /*   var TopoLayer = L.  (imageUrl, {
                    maxZoom: zoomLevel[1],
                    minZoom: zoomLevel[0],
                    myY: function(data) {
                        console.log('myY function : data: ', data)
                        return (Math.pow(2, data.z) - data.y - 1)
                    }
                })

                // console.log('myY()<<<<>>>>>>>>>>>>>>{myY}', myY())
                console.log('Topolayer adding to mapp', map.addLayer(TopoLayer))
                map.addLayer(TopoLayer)
                console.log('topolaye>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', TopoLayer)
            }


                 var attribution = L.control.attribution()
                 attribution.setPrefix('<a href="https://cloud.unifli.aero/">Unifli</a>')
                    
                 attribution.addTo(map)
                    
        
                 
                 console.log('#^%&^%#%&^%^&%^%^&%^^%^%^&%%%^&%^%&^%&^%^&%^&%^%^&%^&%&^\n')
                
                 var polygon
                 if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.points)) {
                     polygon = L.polygon(latlngs, {
                         color: 'white'
                     }).addTo(map)
                     map.fitBounds(polygon.getBounds())
                 }

                 var featureGroup = L.featureGroup().addTo(map)

                 var drawControl = new L.Control.Draw({
                     edit: {
                         featureGroup: featureGroup
                     },
                     draw: {
                         polygon: {
                             showArea: true,
                             allowIntersection: true,
                             shapeOptions: {
                                 stroke: true,
                                 metric: false,
                                 color: '#fff',
                                 weight: 4,
                                 opacity: 1,
                                 fill: true,
                                 fillColor: null, // same as color by default
                                 fillOpacity: 0.3
                             }
                         },
                         polyline: false,
                         rectangle: false,
                         circle: false,
                         marker: false
                     }
                 }).addTo(map)

                 map.on('draw:created', showPolygonArea)
                 map.on('draw:edited', showPolygonAreaEdited)

                 function showPolygonAreaEdited(e) {
                     e.layers.eachLayer(function(layer) {
                         showPolygonArea({
                             layer: layer
                         })
                     })
                 }
                 var acres

                 function showPolygonArea(e) {
                     featureGroup.clearLayers()
                     featureGroup.addLayer(e.layer)
                     var type = e.layerType
                     var layer = e.layer
                     layer.getLatLngs()[0][layer.getLatLngs()[0].length] = layer.getLatLngs()[0][0]
                     console.log('e.layer', layer)
                     var pointsList = []

                     _.forEach(e.layer._latlngs[0], function(val) {
                         var latLng = []
                         latLng.push(val.lat)
                         latLng.push(val.lng)
                         console.log('val--', latLng)
                         pointsList.push(latLng)
                     })
                     console.log('pointsList', pointsList)
                     var polygon = turf.polygon([
                         pointsList
                     ])

                     area = turf.area(polygon)
                     console.log('area--', area, LGeo.area(e.layer) * 0.0002471054)
                     acres = LGeo.area(e.layer) * 0.0002471054
                     console.log('acres--', Number(acres).toFixed(2))
                     if ($scope.cadLineDetails) {
                         $scope.cadLineDetails.acreage = Number(acres).toFixed(2)
                         $scope.cadLineDetails.points = e.layer._latlngs
                             // $("#myModal").modal()
                         $('#myModal').on('show.bs.modal', function() {
                             console.log('inside modal')
                             $('#acreage').val(Number(acres).toFixed(2))
                         }).modal('show')
                     }
                 }

                 map.on('load', function() {
                     console.log('it is staing on map...............................................................................')
                         // ALL YOUR APPLICATION CODE
                     slider.addEventListener('input', function(e) {
                         // Adjust the layers opacity. layer here is arbitrary - this could
                         // be another layer name found in your style or a custom layer
                         // added on the fly using `addSource`.
                         map.setPaintProperty('chicago', 'raster-opacity', parseInt(e.target.value, 10) / 100)

                         // Value indicator
                         sliderValue.textContent = e.target.value + '%'
                     })
                     console.log('hi,its loaded')
                 }) */
        }
    }
})


















 firstapp.directive('mapBox', function($http, $filter, JsonService, $rootScope, $uibModal) {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            console.log('in tthe mapbox function')
            var locations = {}
                // console.log('mission details nad mission id for mapbox', $scope.missionDetails)
            if ($scope.missionDetails && $scope.missionDetails.missionId) {
                locations = $scope.missionDetails.geoLocation
                console.log('$scope.missionDetails', $scope.missionDetails)
                console.log('in mapbox directive>>>missions dtails', locations)
            } else if ($scope.cadLineDetails) {
                locations = $scope.cadLineDetails.geoLocation
                console.log('in mapbox directive>>>cadline work details', locations)
            } else {
                locations = {
                    upperLeft: [32.77840210218494, -117.23545173119574],
                    lowerLeft: [32.77740264966007, -117.23544909909386],
                    upperRight: [32.77840829977591, -117.23213078512207],
                    lowerRight: [32.77740884701485, -117.23212819014402],
                    center: [-117.23378995150006, 32.77790548568292]
                }
            }
            console.log('locations', locations);

            var imageUrl
            var zoomLevel = []
            if ($scope.missionDetails && $scope.missionDetails.missionId) {
                console.log('$scope.missionDetails.name', $scope.missionDetails)
                imageUrl = realhosturl + '/orthoFiles/' + $scope.missionDetails.missionId + 'google_tiles/{z}/{x}/{myY}.png'


                console.log('111111111111111111111111111', imageUrl)
                zoomLevel.push($scope.missionDetails.zoomLevel[0])
                zoomLevel.push($scope.missionDetails.zoomLevel[$scope.missionDetails.zoomLevel.length - 1])
                    // imageUrl = 'http://localhost:1337/google_tiles/{z}/{x}/{myY}.png'
            } else if ($scope.cadLineDetails && $scope.cadLineDetails.orthoFile.file) {
                // imageUrl = 'http://localhost:1337/5a0a8c4cda0e182241afa514.jpg'
                // imageUrl = 'http://localhost:1337/' + $scope.cadLineDetails.orthoFile.file.split(".")[0] + '.jpg'
                imageUrl = realhosturl + '/orthoFiles/' + $scope.cadLineDetails.orthoFile.file.split('.')[0] + '.jpg'
                console.log('22222222222222222222222222222222222', imageUrl)
                zoomLevel = [16, 21]
            } else if ($scope.cadLineDetails && $scope.cadLineDetails.mission) {
                // imageUrl = 'http://localhost:1337/google_tiles/{z}/{x}/{myY}.png'
                imageUrl = realhosturl + '/orthoFiles/' + $scope.cadLineDetails.mission.missionId + 'google_tiles/{z}/{x}/{myY}.png'
                zoomLevel.push($scope.cadLineDetails.mission.zoomLevel[0])
                zoomLevel.push($scope.cadLineDetails.mission.zoomLevel[$scope.cadLineDetails.mission.zoomLevel.length - 1])
                console.log('33333333333333333333333333333333333', imageUrl)
                    // imageUrl = 'http://35.194.248.13:80/google_tiles/{z}/{x}/{myY}.png'
            }

            // This is the trickiest part - you'll need accurate coordinates for the
            // corners of the image. You can find and create appropriate values at
            // http://maps.nypl.org/warper/ or
            // http://www.georeferencer.org/
            var imageBounds
            if (!_.isEmpty(locations)) {
                imageBounds = L.latLngBounds([
                    locations.upperLeft,
                    locations.lowerLeft,
                    locations.upperRight,
                    locations.lowerRight
                ])
                console.log("image bounds>>>>>>>>>>>>>>", imageBounds)
            }
            var latlngs
            if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.points)) {
                latlngs = [
                    $scope.cadLineDetails.points[0]
                ]
            }
            var map = L.mapbox.map('map', 'mapbox.streets', {
                    infoControl: false,
                    attributionControl: false,
                    maxZoom: zoomLevel[1],
                    minZoom: zoomLevel[0]
                })
                .fitBounds(imageBounds)

            console.log("map >>>>>>>>>>>>>", map)
            var attribution = L.control.attribution()
            attribution.setPrefix('<a href="https://cloud.unifli.aero/">Unifli</a>')
               
            attribution.addTo(map)
               
            if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.geoLocation) && !$scope.cadLineDetails.mission) {
                var overlay = L.imageOverlay(imageUrl, imageBounds).addTo(map)
            }
            // overlay.setOpacity($scope.slider.value)
            // omnivore.kml('http://localhost:1337/newM_mosaic.kml').addTo(map)
            console.log('#^%&^%#%&^%^&%^%^&%^^%^%^&%%%^&%^%&^%&^%^&%^&%^%^&%^&%&^\n')
            if (($scope.missionDetails && $scope.missionDetails.missionId) || $scope.cadLineDetails.mission) {
                console.log('heere is the main function problem is ____________________________________')
                var TopoLayer = L.tileLayer(imageUrl, {
                    maxZoom: zoomLevel[1],
                    minZoom: zoomLevel[0],
                    myY: function(data) {
                        console.log('myY function : data: ', data)
                        return (Math.pow(2, data.z) - data.y - 1)
                    }
                })

                // console.log('myY()<<<<>>>>>>>>>>>>>>{myY}', myY())
                console.log('Topolayer adding to mapp', map.addLayer(TopoLayer))
                map.addLayer(TopoLayer)
                console.log('topolaye>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', TopoLayer)
            }
            // $rootScope.$on('greeting', function (event, arg) {
            //     overlay.setOpacity(arg.value)
            // })
            var polygon
            if ($scope.cadLineDetails && !_.isEmpty($scope.cadLineDetails.points)) {
                polygon = L.polygon(latlngs, {
                    color: 'white'
                }).addTo(map)
                map.fitBounds(polygon.getBounds())
            }

            var featureGroup = L.featureGroup().addTo(map)

            var drawControl = new L.Control.Draw({
                edit: {
                    featureGroup: featureGroup
                },
                draw: {
                    polygon: {
                        showArea: true,
                        allowIntersection: true,
                        shapeOptions: {
                            stroke: true,
                            metric: false,
                            color: '#fff',
                            weight: 4,
                            opacity: 1,
                            fill: true,
                            fillColor: null, // same as color by default
                            fillOpacity: 0.3
                        }
                    },
                    polyline: false,
                    rectangle: false,
                    circle: false,
                    marker: false
                }
            }).addTo(map)

            map.on('draw:created', showPolygonArea)
            map.on('draw:edited', showPolygonAreaEdited)

            function showPolygonAreaEdited(e) {
                e.layers.eachLayer(function(layer) {
                    showPolygonArea({
                        layer: layer
                    })
                })
            }
            var acres

            function showPolygonArea(e) {
                featureGroup.clearLayers()
                featureGroup.addLayer(e.layer)
                var type = e.layerType
                var layer = e.layer
                layer.getLatLngs()[0][layer.getLatLngs()[0].length] = layer.getLatLngs()[0][0]
                console.log('e.layer', layer)
                var pointsList = []

                _.forEach(e.layer._latlngs[0], function(val) {
                    var latLng = []
                    latLng.push(val.lat)
                    latLng.push(val.lng)
                    console.log('val--', latLng)
                    pointsList.push(latLng)
                })
                console.log('pointsList', pointsList)
                var polygon = turf.polygon([
                    pointsList
                ])

                area = turf.area(polygon)
                console.log('area--', area, LGeo.area(e.layer) * 0.0002471054)
                acres = LGeo.area(e.layer) * 0.0002471054
                console.log('acres--', Number(acres).toFixed(2))
                if ($scope.cadLineDetails) {
                    $scope.cadLineDetails.acreage = Number(acres).toFixed(2)
                    $scope.cadLineDetails.points = e.layer._latlngs
                        // $("#myModal").modal()
                    $('#myModal').on('show.bs.modal', function() {
                        console.log('inside modal')
                        $('#acreage').val(Number(acres).toFixed(2))
                    }).modal('show')
                }
            }

            map.on('load', function() {
                console.log('it is staing on map...............................................................................')
                    // ALL YOUR APPLICATION CODE
                slider.addEventListener('input', function(e) {
                    // Adjust the layers opacity. layer here is arbitrary - this could
                    // be another layer name found in your style or a custom layer
                    // added on the fly using `addSource`.
                    map.setPaintProperty('chicago', 'raster-opacity', parseInt(e.target.value, 10) / 100)

                    // Value indicator
                    sliderValue.textContent = e.target.value + '%'
                })
                console.log('hi,its loaded')
            })
        }
    }
}) 

firstapp.factory('shareMission', function() {
    var missionData = {},
        setval, getval
    setval = function(obj) {
        missionData = obj
    }
    getval = function() {
        return missionData
    }
    return {
        setval: setval,
        getval: getval
    }
})

firstapp.directive('pagination', function() {
    return {
        restrict: 'E',
        scope: {
            // item: "=value"
        },
        templateUrl: 'views/directive/pagination.html',
        link: function() {}
    }
})
firstapp.directive('commonView', function() {
    return {
        restrict: 'E',
        scope: {
            // item: "=value"
        },
        templateUrl: 'views/directive/common-view.html',
        link: function($scope, element, attrs) {
            console.log($scope.model)
            $scope.dataSize = function(data) {
                $scope.selectedSize = data
                    // alert("hello")
                console.log('print size', $scope.selectedSize)
            }
        }
    }
})
firstapp.directive('disallowSpaces', function() {
    return {
        restrict: 'A',

        link: function($scope, $element) {
            $element.bind('keydown', function(e) {
                if (e.which === 32) {
                    e.preventDefault()
                }
            })
        }
    }
})

firstapp.directive('phoneInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var listener = function() {
                var value = $element.val().replace(/[^0-9]/g, '')
                $element.val($filter('tel')(value, false))
            }

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function(viewValue) {
                return viewValue.replace(/[^0-9]/g, '').slice(0, 10)
            })

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function() {
                $element.val($filter('tel')(ngModelCtrl.$viewValue, false))
            }

            $element.bind('change', listener)
            $element.bind('keydown', function(event) {
                var key = event.keyCode
                    // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                    // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) {
                    return
                }
                $browser.defer(listener); // Have to do this or changes don't get picked up properly
            })

            $element.bind('paste cut', function() {
                $browser.defer(listener)
            })
        }

    }
})
firstapp.filter('tel', function() {
    return function(tel) {
        console.log(tel)
        if (!tel) {
            return ''
        }

        var value = tel.toString().trim().replace(/^\+/, '')

        if (value.match(/[^0-9]/)) {
            return tel
        }

        var country, city, number

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value
                break

            default:
                city = value.slice(0, 3)
                number = value.slice(3)
        }
        if (number) {
            if (number.length > 3) {
                number = number.slice(0, 3) + '-' + number.slice(3, 7)
            } else {
                number = number
            }
            return (city + '-' + number).trim()
        } else {
            return city
        }
    }
})