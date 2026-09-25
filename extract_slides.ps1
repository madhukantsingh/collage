$slidesDir = "pptx_extracted\ppt\slides"
for ($i = 1; $i -le 12; $i++) {
    $file = "$slidesDir\slide$i.xml"
    Write-Output "===== SLIDE $i ====="
    [xml]$xml = Get-Content $file -Raw
    # Extract all text runs
    $ns = @{
        a = "http://schemas.openxmlformats.org/drawingml/2006/main"
        p = "http://schemas.openxmlformats.org/presentationml/2006/main"
        r = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
    }
    
    # Get background color
    $bgNode = $xml.SelectNodes("//p:bg//a:srgbClr", (New-Object System.Xml.XmlNamespaceManager($xml.NameTable)))
    
    # Simple regex approach - find all text content
    $content = Get-Content $file -Raw
    # Find all <a:t> elements
    $matches = [regex]::Matches($content, '<a:t>([^<]*)</a:t>')
    foreach ($m in $matches) {
        $text = $m.Groups[1].Value
        $text = $text -replace '&amp;', '&'
        $text = $text -replace '&lt;', '<'
        $text = $text -replace '&gt;', '>'
        Write-Output "  TEXT: $text"
    }
    
    # Find image references
    $imgMatches = [regex]::Matches($content, 'descr="([^"]*)"')
    foreach ($m in $imgMatches) {
        Write-Output "  IMG_DESC: $($m.Groups[1].Value)"
    }
    
    # Find image embed references
    $embedMatches = [regex]::Matches($content, 'r:embed="([^"]*)"')
    foreach ($m in $embedMatches) {
        Write-Output "  EMBED: $($m.Groups[1].Value)"
    }
    
    Write-Output ""
}
