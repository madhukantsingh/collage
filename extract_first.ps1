$slidesDir = "pptx_extracted\ppt\slides"
for ($i = 1; $i -le 6; $i++) {
    $file = "$slidesDir\slide$i.xml"
    Write-Output "===== SLIDE $i ====="
    $content = Get-Content $file -Raw
    $matches = [regex]::Matches($content, '<a:t>([^<]*)</a:t>')
    foreach ($m in $matches) {
        $text = $m.Groups[1].Value
        $text = $text -replace '&amp;', '&'
        $text = $text -replace '&lt;', '<'
        $text = $text -replace '&gt;', '>'
        Write-Output "  TEXT: $text"
    }
    $imgMatches = [regex]::Matches($content, 'descr="([^"]*)"')
    foreach ($m in $imgMatches) {
        Write-Output "  IMG_DESC: $($m.Groups[1].Value)"
    }
    Write-Output ""
}
