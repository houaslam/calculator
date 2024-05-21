all:
	cd src && npx vite

push:
	git  add .
	git commit -m "calculator"
	git push