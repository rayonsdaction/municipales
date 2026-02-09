check:
	for i in content/communes/ligne-*json;do echo $$i; python -mjson.tool $$i >/dev/null ;echo $$?;done || :
	grep type content/communes/ligne-*.json|sed -e 's!.*json!!' -e 's!\,!!' |sort -u
