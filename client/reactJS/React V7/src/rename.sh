#!/bin/bash

for file in *.js; do
	name=$(basename "$file" .js)
	mv "$file" "$name.jsx"
done
