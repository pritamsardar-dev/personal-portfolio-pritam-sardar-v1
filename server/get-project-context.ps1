$outputFile = "project-context.txt"

$paths = @(
    "src/config",
    "src/controllers",
    "src/middlewares",
    "src/models",
    "src/routes",
    "src/utils",

    "app.js",
    "server.js",
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
