curl.exe -v http://localhost:3000/admin --cookie "isAdmin=false"

curl.exe -v http://localhost:3000/admin --cookie "isAdmin=true"

curl.exe -v http://localhost:3000/admin -H "x-middleware-subrequest: middleware:middleware:middleware:middleware:middleware"

