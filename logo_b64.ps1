$mediaDir = "pptx_extracted\ppt\media"
$logos = @("logoTws.png", "logoTwsLight.png")
foreach ($logo in $logos) {
    $path = Join-Path $mediaDir $logo
    $b64 = [Convert]::ToBase64String([IO.File]::ReadAllBytes($path))
    Write-Output "===== $logo ====="
    Write-Output "data:image/png;base64,$b64"
    Write-Output ""
}
