'use strict';

var task = () => {
  return {
    scope: {
      vm: '='
    },
    templateUrl: '/assets/html/common/task/task.tmpl.html',
    controller: 'taskCtrl'
  }
}

module.exports = task;
