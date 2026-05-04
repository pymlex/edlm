cd C:\Users\aleks\Downloads
if (Test-Path .\edlm) { Remove-Item .\edlm -Recurse -Force }
git clone https://github.com/pymlex/edlm.git
cd .\edlm
git checkout 5ec8409870246b164c18cd063103521e90705a8a
git switch -c docs-work
Expand-Archive -Path C:\Users\aleks\Downloads\edlm_docusaurus_solution.zip -DestinationPath . -Force
Set-Location .\website
npm install
npm install docusaurus-plugin-drawio@0.4.0 redocusaurus @akebifiky/remark-simple-plantuml
npm run start
npm run build
Set-Location ..
git add .
git commit -m "docs: docusaurus docs as code"
git push -u origin docs-work:main
