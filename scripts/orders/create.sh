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
      "items": ["5b4f4391151ea8f19edd3b0a", "5b4f4384151ea8f19edd3b09", "5b4f4371151ea8f19edd3b08"],
      "checkoutComplete": "'"false"'"
    }
  }'

echo
