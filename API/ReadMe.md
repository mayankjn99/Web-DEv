curl -X 'POST' \
  'http://127.0.0.1:8000/users/user123' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com"
}'


curl -X 'GET' \
  'http://127.0.0.1:8000/users/user123' \
  -H 'accept: application/json'

run the app using uvicorn app:app --reload 

Dependency fastapi and uvicorn 