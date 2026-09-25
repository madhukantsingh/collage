$relsDir = "pptx_extracted\ppt\slides\_rels"
Get-ChildItem $relsDir | ForEach-Object {
    Write-Output "===== $($_.Name) ====="
    Get-Content $_.FullName
    Write-Output ""
}
