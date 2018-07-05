'use strict';

angular.module('xrxfcWebApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [{
      'title': '首页',
      'state': 'main'
    },{
      'title': '购房指南',
      'state': 'about'
    },{
      'title': '查学区',
      'state': 'about'
    },{
      'title': '查户口',
      'state': 'about'
    },{
      'title': '查征信',
      'state': 'about'
    },{
      'title': '看直播',
      'state': 'about'
    },{
      'title': '谈案例',
      'state': 'about'
    },{
      'title': '学经验',
      'state': 'about'
    },{
      'title': '长知识',
      'state': 'about'
    },{
      'title': '关于我们',
      'state': 'aboutUs.introduction'
    }];

    $scope.isCollapsed = true;

  });
