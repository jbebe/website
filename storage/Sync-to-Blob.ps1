param ($folderToSync)

function Test-CommandExists {
	param ($command)
	
	try {
		Get-Command $command | Out-Null
	}
	catch {
		Write-Host "azcopy is missing!"
		exit 1
	}
}

Test-CommandExists azcopy

azcopy sync $folderToSync $env:WEBSITE_STORAGE_SAS
