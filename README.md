# README - go-sst-htmx
Test out new CF Features via SST; internal BE HTMX

Structure

- SST - Infra by ion; setting up all the pieces + linknig ..

- Pages - Test HTML page; static components

- App - DummyApp with detailed headers from various devices getting User from the Auth service; powered by AuthKit + WorkOS. Global KV will release features.

- RPC example --> https://github.com/cloudflare/js-rpc-and-entrypoints-demo/blob/main/public-admin-api-interfaces/README.md

- Events powered by R2 NOtification goes to Durable storage; to be processed into D1; partitioned by deviceID,sessionID..day,hour ..

- General Business Events - tracked with their needed blobs of data in R2; meta-data via D1; partition by day (UTC)

- API - Golang powered backend; with "internal" portal powered by HTMX; deployed in Fly; libsql-server backed by R2

- Cron - https://github.com/pmbanugo/cron-atlas?tab=readme-ov-file

- Further data processing with Tembo - https://cloud.tembo.io/

- WebHook - CF hook ..

