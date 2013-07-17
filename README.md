cscotquiz
=========
Creative Scotland Investment Quiz
---------------------------------

Based on a Culture Hack Scotland 2013 project by Yann Seznec @amazingrolo. Built by Gavin @galvanist.

Components
----------
- Angular.js
- angular-cookie
- Node.js
- Express.js
- gzippo
- JSON
- Heroku

Summary
-------
Culture Hack Scotland has been sponsored by Creative Scotland as part of @synchq for the past two years. During the 2013 hack weekend Yan Seznec @amazingrolo built a multi choice quiz that presents a randomly selected Creative Scotland investment/project to the user with a list of possible award values.
If the user was incorrect in their choice they would be told that, of course, it was ridiculous. Only once the user identified the correct value would they progress to a new project to repeat the process.

This project is a web-based single page app clone of this project. The dataset was provided by @synchq at the Culture Hack weekend as CSV and has firstly been converted to JSON by a small Python script (csvToJson.py).

This JSON (as a whole) is loaded (within the browser/client) and parsed by the Angular.js application. One random project is selected for presentation while two others are selected for possible award values. When the user clicks a award value button the choice is compared against the correct answer, this is likely very hackable/cheatable as all data resides in the $scope, there is no RESTful interface, yet.

If the user is correct they get +1 point, if they are incorrect they get -1 point. The points are displayed top right. The points are also duplicated to a cookie so that refreshes will persist the value. To reset the score the icon can be clicked.
