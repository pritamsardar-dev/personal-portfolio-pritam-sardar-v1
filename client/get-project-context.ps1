$outputFile = "project-context.txt"

$paths = @(
    "public",
    "scripts",
    "src/api",
    "src/components",
    "src/context",
    "src/hooks",
    "src/layout",
    "src/loading",
    "src/modules",
    "src/providers",
    "src/renderers",
    "src/routes",
    "src/styles",
    "src/utils",
    "src/validation",
    "app.css",
    "app.jsx",
    "index.css",
    "main.jsx",
    "index.html",
    ".eslint.config",
    ".prettierrc",
    "package.json"
)

"# PROJECT STRUCTURE`n" | Out-File $outputFile

foreach ($path in $paths) {

    if (Test-Path $path) {

        if ((Get-Item $path) -is [System.IO.DirectoryInfo]) {

            "`n## FOLDER TREE: $path`n" | Add-Content $outputFile

            tree $path /F /A | Add-Content $outputFile

            "`n`n## FILE CONTENTS: $path`n" | Add-Content $outputFile

            Get-ChildItem $path -Recurse -File | ForEach-Object {

                $relativePath = $_.FullName.Replace((Get-Location).Path + "\", "")

                "`n`n# FILE: $relativePath`n" | Add-Content $outputFile

                "====================" | Add-Content $outputFile

                Get-Content $_.FullName | Add-Content $outputFile

                "====================" | Add-Content $outputFile
            }
        }
        else {

            "`n`n# FILE: $path`n" | Add-Content $outputFile

            "====================" | Add-Content $outputFile

            Get-Content $path | Add-Content $outputFile

            "====================" | Add-Content $outputFile
        }
    }
}

Write-Host "Project context exported to $outputFile"
