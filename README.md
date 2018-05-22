Welcome to the TimeStamp Microservice
=====================================

The microservice exposes the end point "/<date>" which accepts the <date> parameter in the form:
- Unix time (in seconds) (e.g. 1450137600 which corresponds to December 15, 2015).
- Natural date (e.g. "December 15, 2015" - formatted in the url as "December%2015,%202015").

The microservice returns the following JSON:

{ "unix" : <unix_time>, 
"natural": <natural_date> }

Where:
- <unix_time> is the Unix time (in seconds) since January 1, 1970 00:00:00.
- <natural_date> is the natural date string of the form "Month Day, Year".

If a request is made to the end point that does not satisfy the formats expected for <date> then
the microservice will return 'null' for both <unix_time> and <natural_date>.

The microservice was built to satisfy the [FCC TimeStamp Microservice API Challenge](https://www.freecodecamp.org/challenges/timestamp-microservice).


Made by [lance21](https://github.com/lance21/microservice-timsetamp)
-------------------

\ ゜o゜)ノ
