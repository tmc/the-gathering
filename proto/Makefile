.PHONY: generate
generate: venv
	PATH=$(PATH):./venv/bin buf generate

venv: .requirements.in
	python3 -m venv venv
	./venv/bin/pip install wheel pip-tools
	./venv/bin/pip-compile .requirements.in
	./venv/bin/pip install -r .requirements.txt


.PHONY: clean
clean:
	rm -rf ../ts/packages/the-gathering/gen
	rm -rf ../py/pygathering/gen
	rm -rf ../go/gen
