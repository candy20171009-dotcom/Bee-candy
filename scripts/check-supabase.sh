#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost:3000}"

echo "[1/3] Checking Supabase health endpoint..."
curl -s "$BASE_URL/api/health/supabase" | tee /tmp/bee-supabase-health.json

echo "\n[2/3] Posting demo request..."
curl -s -X POST "$BASE_URL/api/demo-request" \
  -H 'content-type: application/json' \
  -d '{"name":"Supabase Test","company":"Bee QA","contact":"12345678","email":"qa@beefintech.com","role":"QA","interestedService":"Demo","message":"integration check"}' \
  | tee /tmp/bee-supabase-demo.json

echo "\n[3/3] Querying dividend records..."
curl -s "$BASE_URL/api/dividend?insuranceCompany=Bee%20Life" | tee /tmp/bee-supabase-dividend.json

echo "\nDone. Inspect outputs in:"
echo "  /tmp/bee-supabase-health.json"
echo "  /tmp/bee-supabase-demo.json"
echo "  /tmp/bee-supabase-dividend.json"
