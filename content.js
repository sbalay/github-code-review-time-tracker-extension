var assigneeSelector = '#partial-discussion-sidebar > div.discussion-sidebar-item.sidebar-assignee.js-discussion-sidebar-item > form > span';
var assignee;
var timer = 0;
var noAssigneeSign = 'No one—assign yourself';

setInterval(function () {
  var assigneeElem = document.querySelector(assigneeSelector);
  if (assigneeElem) {
    var newAssignee = assigneeElem.textContent.trim();
    newAssignee = newAssignee === noAssigneeSign ? 'Empty' : newAssignee;
    if (assignee !== newAssignee) {
      if (assignee) {
        var message = '<b>Old assignee:</b> ' + assignee +
                      '<br><b>New assignee:</b> ' + newAssignee +
                      '<br><b>Time elapsed:</b> ' + Math.round(timer / 60) + ' minutes';
        $.growl.notice({ title: '', message: message, location: "tl", duration: 10000 });
      }
      assignee = newAssignee;
      timer = 0;
    }
  }
  timer += 1;
}, 1000);
