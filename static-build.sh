#!/bin/sh
set -e
mkdir -p dist
cp -a public/. dist/
cp docs/index.html dist/index.html
echo static-ok
