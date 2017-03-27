echo "Welcome KOKOMO Developer PowerShell"

if (-not (Get-Module -ListAvailable -Name posh-git)) {
    Write-Host "PowerShell posh-git 모듈을 설치합니다."
    PowerShellGet\Install-Module posh-git -Scope CurrentUser
}

Import-Module posh-git

function Global:prompt {
    $origLastExitCode = $LASTEXITCODE
    Write-Host $ExecutionContext.SessionState.Path.CurrentLocation -NoNewline
    Write-VcsStatus
    $LASTEXITCODE = $origLastExitCode
    "$('>' * ($nestedPromptLevel + 1)) "
}

$node_ver = node --version
$scriptPath = split-path -parent $MyInvocation.MyCommand.Definition
$env:Path += ";$scriptPath\..\.bin"

#echo $scriptPath
#echo "PATH : $env:Path"
echo "NodeJS Version : $node_ver"
