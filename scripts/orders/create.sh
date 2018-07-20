#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order": {
      "items": ["5b4f4c791e24d40f6d5a13b9", "5b4f4c791e24d40f6d5a13b9", "5b4f4c791e24d40f6d5a13b9"],
      "checkoutComplete": "'"false"'"
    }
  }'

echo
