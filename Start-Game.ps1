param([int]$Port = 4174)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$pythonCommand = Get-Command python -ErrorAction SilentlyContinue
$bundledPython = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe'
if ($pythonCommand) { $gamePython = $pythonCommand.Source }
elseif (Test-Path -LiteralPath $bundledPython) { $gamePython = $bundledPython }
else { throw '需要 Python 3。也可将此目录上传到静态网站托管后游玩。' }
Write-Host "万世仙族预览：http://127.0.0.1:$Port/ （Ctrl+C停止）"
& $gamePython -m http.server $Port --bind 127.0.0.1
